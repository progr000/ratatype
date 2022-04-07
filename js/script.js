/** My own Ratatype */
const availableLang = {
    ru: /[а-я]/gi,
    en: /[a-z]/gi
};
const data_file = 'data/examples-text-in-utf8.txt';
const skipKeys = [0, 9, 16, 17, 18, 19, 20, 27, 37, 38, 39, 40, 45, 46, 91, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144];
const visualEnter = "\u21B5";
const maxStatLen = 1000;
/**/
const $body = $('body');
const $rt_own_text_content = $('#rt-own-text-content');
const $text_for_test = $('#text-for-test');
const $reset_typing_btn = $('#reset-typing-btn');
const $rt_reset_btn = $('#rt-reset-btn');
const $text_lang = $('#text-lang');
const $caps_lock = $('#caps-lock');
const $sel_text_variant = $('#sel-text-variant');
const $rt_show_example = $('#rt-example-show');
const $rt_container = $('#rt-container');
const $rt_example_content = $('#rt-example-content');
const $rt_example_texts = $('#rt-example-texts');
/**/
let $curNeedEl;
let tmt;
let replaceEntersInTexts = true;
let is_finished = true;
let continue_with_errors = false;
/**/
let statistics = {
    textLen: 0,
    speed: 0,
    accuracyCurrent: 0,
    countErrorsTotal: 0,
    countSymbol: 0,
    countErrors: 0,
    finish_date: '',
    currentTextShort: '',
    currentTextLang: '',
    startTime: 0,
    finishTime: 0
};

/**
 * Replace double spaces and enter+spaces
 * @returns {string}
 */
String.prototype.replaceDoubleSpaces = function(replaceEnters=false) {
    return replaceEnters
        ? this.replace(/\s{1,}/g, " ")
        : this.replace(/ {1,}/g, " ").replace(/\n {1,}/g, "\n");
};

/**
 * Calculate and give the result to the user
 */
function calculateResults()
{
    /* calculate diff seconds */
    if (!is_finished) {
        statistics.finishTime = Math.floor(Date.now() / 1000);
    }
    let diffTime = statistics.finishTime - statistics.startTime;
    if (diffTime < 1) { diffTime = 1; }

    if (!$('.modal').is(':visible')) {
        /* calculate accuracy */
        // подсчет как в https://www.ratatype.ru/typing-test/test/en/ (считается только первая ошибка после правильного набора)
        //let accuracy = Math.round((100 - countErrors*100/textLen)*10)/10;
        // правильный подсчет (с учетом всех набранных неверно символов)
        //let accuracyTotal = Math.round((100 - countErrorsTotal*100/textLen)*10)/10;
        //if (accuracyTotal < 0) { accuracyTotal = 0; }

        // (еще более жесткий подсчет с учетом всех набранных неверно символов и кличеством верно набранных на текущий момент)
        statistics.accuracyCurrent = statistics.countSymbol > 0
            ? Math.round((100 - statistics.countErrorsTotal * 100 / statistics.countSymbol) * 10) / 10
            : 0;
        if (statistics.accuracyCurrent < 0) {
            statistics.accuracyCurrent = 0;
        }

        /* calculate speed */
        statistics.speed = diffTime > 0
            ? Math.floor(statistics.countSymbol / diffTime * 60)
            : 0;

        /* set data to html */
        $('#rt-speed').html(statistics.speed);
        $('#rt-accuracy').html(statistics.accuracyCurrent);
        $('#rt-errors').html(statistics.countErrorsTotal);
        $('#rt-count').html(statistics.countSymbol);
    }

    /* restart every seconds if user starts typing */
    if (statistics.startTime) {
        tmt = setTimeout(calculateResults, 1000);
    }
}

/**
 * Initialization function for any text
 * @param {string} text
 */
function initText(text)
{
    /* prepare visual content from text */
    let data = text.replaceDoubleSpaces(replaceEntersInTexts).split('');
    let res = '';
    data.forEach(function (v) {
        if (v.charCodeAt(0) === 10) {
            res += `<span class="t-black" data-original-letter="${visualEnter}">${visualEnter}</span><br>`;
        } else {
            if (v === '"') {
                res += `<span class="t-black" data-original-letter='${v}'>${v}</span>`;
            } else {
                res += `<span class="t-black" data-original-letter="${v}">${v}</span>`;
            }
        }
    });
    $rt_container.html(res);

    /* detect text language */
    for (let k in availableLang) {
        let test = text.substr(0, 10).match(availableLang[k]);
        if (test !== null) {
            $text_lang.html(k.toUpperCase());
            statistics.currentTextLang = k;
            current_lang = k;
            initKeyboard(k);
            break;
        }
    }

    /* highlight for the first character */
    $curNeedEl = $rt_container.find('span.t-black').first();
    if ($curNeedEl.length) {
        $curNeedEl.addClass('t-green');
        showKeyForLetter($curNeedEl.text().trim());
    }

    /* init stat for this text */
    is_finished = false;
    statistics.startTime   = 0;
    statistics.finishTime  = 0;
    statistics.countSymbol = 0;
    statistics.countErrorsTotal = 0;
    statistics.textLen     = data.length;
    statistics.currentTextShort = (text.length > 20)
        ? text.substr(0, 17).replace(/\s{1,}/g, " ") + '...'
        : text.substr(0, 20).replace(/\s{1,}/g, " ");
    calculateResults();
}

/**
 * Finishing the typing and save statistics
 */
function finishText() {

    /**/
    is_finished = true;
    statistics.finishTime = Math.floor(Date.now() / 1000);

    /**/
    setTimeout(function () {
        /* stop timeout */
        clearTimeout(tmt);

        if (statistics.startTime > 0 && statistics.speed > 0 && statistics.countSymbol > 0) {
            /* finish date-time */
            let d = new Date();
            statistics.finish_date =
                ("0" + d.getDate()).slice(-2) + "-" +
                ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
                d.getFullYear() + " " +
                ("0" + d.getHours()).slice(-2) + ":" +
                ("0" + d.getMinutes()).slice(-2);

            /* load stat from local storage or create new if not exists */
            let json_user_stat = [];
            let user_stat = localStorage.getItem('user_stat');
            if (user_stat !== null) {
                json_user_stat = JSON.parse(user_stat);
                json_user_stat[json_user_stat.length] = statistics;
            } else {
                json_user_stat[0] = statistics;
            }

            /* shorten the stat if it is greater than maxStatLen */
            if (json_user_stat.length > maxStatLen) {
                json_user_stat.shift();
            }

            /* save stat into local storage */
            localStorage.setItem('user_stat', JSON.stringify(json_user_stat));
        }

    }, 2000);
}

/**
 * Load examples from text-file (encoding must be utf8, text delimiter must be ---)
 */
function loadExamples()
{
    $.ajax({
        type: 'get',
        url: data_file,
        dataType: 'text',
        cache: false,
        error: function (xhr, status, error) {
            showAlert(
                'Ошибка выполнения AJAX.<br>' +
                `Error: ${xhr.status} ${xhr.statusText}.<br>` +
                `Тексты из файла <b>${this.url}</b> не были загружены.<br>` +
                'Вы можете использовать свой текст для тренировки.<br>' +
                'Более детально об ошибке, смотрите в консоли ошибок.'
            );
            console.log(xhr, status, error);
        },
    }).done(function (response) {
        let texts = '';
        let data = response.split('---');
        data.forEach(function (v, k) {
            data[k] = v.trim();
            let opt_name = data[k].substr(0, 17).replace(/\s{1,}/g, " ") + '... (' + data[k].length + ')';
            $sel_text_variant.append(`<option value="${k}">${opt_name}</option>`);
        });
        $sel_text_variant.prepend('<option value="-1" hidden disabled selected>Варианты текстов</option>');
        if (data.length) {
            texts = '<p>' + data.join('</p><span class="delimiter"></span><p>') + '</p>';
        }
        $rt_example_texts.html(texts);
    });
}

/**
 * Select any example text from html element
 * @param {object} $obj
 */
function selectExampleText($obj)
{
    $text_for_test.val($obj.html().trim().replaceDoubleSpaces(false));
    $reset_typing_btn.trigger('click');
}

/**
 * Check layout when user typing
 * @param {string} checkedString
 * @param {string} expectedLang
 * @returns {boolean}
 */
function checkKeyboardLayout(checkedString, expectedLang)
{
    for (let k in availableLang) {
        if (expectedLang === k) {
            continue;
        }
        let test = checkedString.match(availableLang[k]);
        if (test !== null) {
            return false;
        }
    }
    return true;
}

/**
 * Change checkbox
 * @param {object} $obj
 */
function onChangeCheckbox($obj) {
    let div_id = $obj.attr('id').replace('-show', '-content');
    let $div = $(`#${div_id}`);
    if ($div.length) {
        $obj.is(':checked')
            ? $div.removeClass('hidden')
            : $div.addClass('hidden');
    }
    if ($obj.attr('id') === 'rt-without-enter-show') {
        replaceEntersInTexts = $obj.is(':checked');
        $reset_typing_btn.trigger('click');
    }
    if ($obj.attr('id') === 'rt-stop-if-error-show') {
        continue_with_errors = $obj.is(':checked');
        //$reset_typing_btn.trigger('click');
    }

    localStorage.setItem($obj.attr('id'), ($obj.is(':checked') ? 1 : 0));
}

/**
 * Restore state of checkboxes
 * @returns {string}
 */
function restoreCheckbox()
{
    $(document).find('.js-rt-ch').each(function () {
        let ch_id = $(this).attr('id');
        if (ch_id.length) {
            let ch_val = localStorage.getItem(ch_id);
            if (ch_val !== null) {
                ch_val = (parseInt(ch_val) === 1);
                $(this).prop('checked', ch_val);

                onChangeCheckbox($(this));
            }
        }
    });
}

/*
//window.location.reload();
if(window.addEventListener){
    window.addEventListener("DOMCharacterDataModified", function(){alert(1);}, true);
    window.addEventListener("DOMAttributeNameChanged", function(){alert(2);}, true);
    window.addEventListener("DOMCharacterDataModified", function(){alert(3);}, true);
    window.addEventListener("DOMElementNameChanged", function(){alert(4);}, true);
    window.addEventListener("DOMNodeInserted", function(){alert(5);}, true);
    window.addEventListener("DOMNodeInsertedIntoDocument", function(){alert(6);}, true);
    window.addEventListener("DOMNodeRemoved", function(){alert(7);}, true);
    window.addEventListener("DOMNodeRemovedFromDocument", function(){alert(8);}, true);
    window.addEventListener("DOMSubtreeModified", function(){alert(9);}, true);
}
*/


/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    // let user_stat = localStorage.getItem('user_stat');
    // let json_user_stat = JSON.parse(user_stat);
    // json_user_stat.pop();
    // localStorage.setItem('user_stat', JSON.stringify(json_user_stat));

    /* restore state of checkboxes */
    restoreCheckbox();

    /* load examples texts from file */
    loadExamples();

    /* unselectable */
    $body[0].onmousedown = $body[0].onselectstart = function(e) {
        let el = e.srcElement.nodeName.toLowerCase();
        if ($.inArray(el, ['select', 'textarea']) < 0) {
            //return false;
        }
    };

    /* disable right click */
    window.oncontextmenu = function() {
        //return false;
    };

    /* disable event click on any tag with class void-0 */
    $(document).on('click', '.void-0', function () {
        return false;
    });

    /* reset select-field with texts if change this area */
    $text_for_test.on('change', function () {
        $text_lang.html('&nbsp;');
        $sel_text_variant.val("-1");
        initText($(this).val().trim());
    });

    /* initialization for any text from textarea */
    $reset_typing_btn.on('click', function () {
        let text = $text_for_test.val().trim();
        $rt_own_text_content.removeClass('error');
        if (text.length) {
            $reset_typing_btn.html($reset_typing_btn.data('reset-text'));
            initText(text);
        } else {
            $reset_typing_btn.html($reset_typing_btn.data('start-text'));
            $rt_own_text_content.addClass('error');
            $rt_example_content.removeClass('hidden');
            $rt_show_example.prop('checked', true);
            $rt_container.html('');
            showAlert($text_for_test.attr('placeholder'));
        }
    });

    /* clear text in textarea */
    $rt_reset_btn.on('click', function () {
        $reset_typing_btn.html($reset_typing_btn.data('start-text'));
    });

    /* select any example text */
    $sel_text_variant.on('change', function () {
        let val = parseInt($(this).val());
        if (val < 0) return;
        let $texts = $rt_example_texts.find('p');
        if (typeof $texts[val] !== undefined) {
            selectExampleText($($texts[val]));
        }
    });

    /* select any example text */
    $(document).on('click', '.text-example p', function () {
        selectExampleText($(this));
    });

    /* close span with example text */
    $(document).on('click', '.js-close', function () {
        let $div_for_close = $(this).parent();
        $div_for_close.addClass('hidden');
        let check_box_id = $div_for_close.attr('id').replace('-content', '-show');

        let $checkbox = $(`#${check_box_id}`);
        if ($checkbox.length) {
            $checkbox.prop('checked', false);
            onChangeCheckbox($checkbox);
        }
    });

    /* show or hide div on change checkbox */
    $(document).on('change', '.js-rt-ch', function() {
        onChangeCheckbox($(this));
    });

    /* Needed only for indicator CapsLock */
    document.querySelector('body').addEventListener('keyup', function (e) {
        if (e.getModifierState('CapsLock')) {
            if (e.keyCode === 20) {
                $caps_lock.toggleClass('hidden');
            } else {
                $caps_lock.removeClass('hidden');
            }
        } else {
            $caps_lock.addClass('hidden');
        }

        /**/
        showDefaultKeyset(e);
    });

    /* handle the user's key press event */
    document.querySelector('body').addEventListener('keydown', function (e) {

        /**/
        showShiftKeyset(e);

        /* if any modal is active */
        if ($('.modal').is(':visible')) {
            return;
        }

        /* focus on main div with indicated text */
        if ($text_for_test.is(":focus")) {
            return;
        }
        $rt_container.attr("tabindex",-1).focus();

        /* find out which button is pressed */
        let curPressKey = e.key.trim();
        let curKeyCode  = e.keyCode;
        //console.log(curPressKey, curKeyCode, e.code, e);

        /* restart if ESC pressed */
        if (curKeyCode === 27 && statistics.startTime) {
            $reset_typing_btn.trigger('click');
            return;
        }

        /* detect CapsLock */
        if (e.getModifierState('CapsLock') && curKeyCode !== 20) {
            $caps_lock.removeClass('hidden');
            showAlert('CapsLock включен! Пожалуйста отключите, что бы прододжить.');
            return;
        }

        /* disable F12 (dev-tools) */
        if (curKeyCode === 123) {
            //e.preventDefault();
            //e.stopPropagation();
            //return;
        }

        /* return if systems key pressed */
        if ($.inArray(curKeyCode, skipKeys) >= 0) {
            return;
        }

        /* typing already finished */
        if (is_finished) {
            return;
        }

        /* if the text has not ended, continue processing keypress events */
        $curNeedEl = $rt_container.find('span.t-black').first();
        if ($curNeedEl.length) {

            /* BackSpace */
            if (curKeyCode === 8) {

                /* if checkbox not set */
                if (!continue_with_errors) {
                    return;
                }

                /* find out prev letter */
                let $prev = $curNeedEl.prev();
                do {
                    if ($prev.is("span")) break;
                    if (!$prev.length) break;
                    $prev = $prev.prev();
                } while (true);

                /* if prev found */
                if ($prev.length) {
                    $curNeedEl.removeClass('t-green');
                    let repaired = ($prev.hasClass('t-failed') || $prev.hasClass('t-repaired')) ? 't-repaired' : '';
                    if ($prev.hasClass('t-failed')) {
                        statistics.countErrorsTotal--;
                    } else {
                        statistics.countSymbol--;
                    }
                    $prev
                        .removeClass()
                        .addClass(`t-black ${repaired} t-green`)
                        .html($prev.data('original-letter'));

                    showKeyForLetter($prev.text().trim());
                }
                return;
            }

            /* check keyboard layout */
            if (!checkKeyboardLayout(curPressKey, statistics.currentTextLang) && curKeyCode !== 13) {
                showAlert(`Пожалуйста, смените раскладку клавиатуры на ${statistics.currentTextLang.toUpperCase()}`);
                return;
            }

            /* imitation Enter pressed */
            if (curKeyCode === 13) {
                curPressKey = visualEnter;
            }

            let curNeedKey = $curNeedEl.text().trim();

            if (!statistics.startTime) {
                statistics.startTime = Math.floor(Date.now() / 1000);
                calculateResults();
            }

            if (curPressKey === curNeedKey) {

                statistics.countSymbol++;
                $curNeedEl
                    .removeClass('t-black t-green t-failed')
                    .addClass('t-passed');
                markSuccesKeyPressed(curKeyCode);


                let $nextNeedEl = $rt_container.find('span.t-black').first();
                if ($nextNeedEl.length) {
                    $nextNeedEl.addClass('t-green');
                    showKeyForLetter($nextNeedEl.text().trim());
                } else {
                    finishText();
                }

            } else {

                statistics.countErrorsTotal++;
                if (continue_with_errors) {
                    $curNeedEl
                        .removeClass('t-black t-green')
                        .html(curPressKey ? (curNeedKey ? curPressKey : curPressKey + '&#8203;') : '&#183;');
                }
                $curNeedEl.addClass('t-failed');
                markErrorKeyPressed(curKeyCode);

                if (continue_with_errors) {
                    let $nextNeedEl = $rt_container.find('span.t-black').first();
                    if ($nextNeedEl.length) {
                        $nextNeedEl.addClass('t-green');
                        showKeyForLetter($nextNeedEl.text().trim());
                    } else {
                        finishText();
                    }
                }

            }



        } else {
            finishText();
        }

        /* cancel default browser reaction on keydown */
        e.preventDefault();

    });

});
