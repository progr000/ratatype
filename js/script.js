/** My own Ratatype */
const skipKeys = [0, 8, 9, 16, 17, 18, 19, 20, 27, 37, 38, 39, 40, 45, 46, 91, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144];
const $body = $('body');
const $rt_container = $('#rt-container');
const $text_for_test = $('#text-for-test');
const $reset_typing_btn = $('#reset-typing-btn');
const $rt_reset_btn = $('#rt-reset-btn');
const $rt_show_result = $('#rt-show-result');
const $rt_result = $('#rt-result-typing');
const $rt_show_example = $('#rt-show-example');
const $rt_example = $('#rt-example-text');
const $sel_text_variant = $('#sel-text-variant');
const $rt_example_container = $('#rt-example-container');
const visualEnter = "\u21B5";

let startTime   = 0;
let finishTime  = 0;
let countSymbol = 0;
let countErrors = 0;
let countErrorsTotal = 0;
let textLen = 0;
let $curNeedEl;
let tmt;

/**
 * Replace double spaces and enter+spaces
 * @returns {string}
 */
String.prototype.replaceDoubleSpaces = function() {
    return this.replace(/ {1,}/g," ").replace(/\n {1,}/g,"\n");
};

/**
 * Calculate and give the result to the user
 */
function calculateResults()
{
    /* calculate diff seconds */
    finishTime = Math.floor(Date.now() / 1000);
    let diffTime = finishTime - startTime;
    //console.log(diffTime);

    /* calculate accuracy */
    //let accuracy = Math.round((100 - countErrors*100/textLen)*10)/10;
    let accuracyTotal = Math.round((100 - countErrorsTotal*100/textLen)*10)/10;
    if (accuracyTotal < 0) { accuracyTotal = 0; }

    /* calculate speed */
    let speed = 0;
    if (diffTime > 0) {
        speed = Math.floor(countSymbol / diffTime * 60);
    }

    /* set data to html */
    $('#rt-speed').html(speed);
    $('#rt-accuracy').html(accuracyTotal);
    $('#rt-errors').html(countErrorsTotal);
    $('#rt-count').html(countSymbol);

    /* restart every seconds if user starts typing */
    if (startTime) {
        tmt = setTimeout(calculateResults, 1000);
    }
}

/**
 * Print to div result of user typing
 * @param {string} letter
 * @param {boolean} error
 */
function printTypingResult(letter, error=false)
{
    let is_space = false;
    if (letter.trim() === "") {
        letter = "&nbsp;";
        is_space = true;
    }

    let is_enter = false;
    if (letter.trim() === visualEnter) {
        is_enter = true;
    }

    let cl = error
        ? 'r-error'
        : 'r-passed';

    if (!is_space && !is_enter) {
        letter = `<span class="${cl}">${letter}</span>`;
    } else if (is_space) {
        error
            ? letter = `<span class="${cl} r-is-space">${letter}</span>`
            : letter = ' ';
    } else if (is_enter) {
        error
            ? letter = `<span class="${cl} r-is-space">${letter}</span>`
            : letter = '<br>';
    }

    $rt_result.html($rt_result.html() + letter);
}

/**
 * Initialization function for any text
 * @param {string} text
 */
function initText(text)
{
    /* prepare visual content from text */
    let data = text.replaceDoubleSpaces().split('');
    let res = '';
    data.forEach(function (v) {
        console.log('"' + v.charCodeAt(0) + '"');
        if (v.charCodeAt(0) === 10) {
            res += '<span class="t-black">' + visualEnter + '</span><br>';
        } else {
            res += `<span class="t-black">${v}</span>`;
        }
    });
    $rt_container.html(res);
    $curNeedEl = $rt_container.find('span.t-black').first();
    if ($curNeedEl.length) {
        $curNeedEl.addClass('t-green');
    }

    /* init stat for this text */
    startTime   = 0;
    finishTime  = 0;
    countSymbol = 0;
    countErrors = 0;
    countErrorsTotal = 0;
    textLen     = data.length;
    $rt_result.html('');
    calculateResults();
}

/**
 * Load examples from text-file (encoding must be utf8, text delimiter must be ---)
 */
function loadExamples()
{
    $.ajax({
        type: 'get',
        url: 'examples-text-in-utf8.txt',
        dataType: 'text'
    }).done(function (response) {
        let text = '';
        let data = response.split('---');
        data.forEach(function (v, k) {
            data[k] = v.trim();
            let opt_name = data[k].substr(0, 17) + '...';
            $sel_text_variant.append(`<option value="${k}">${opt_name}</option>`);
        });
        if (data.length) {
            text = '<p>' + data.join('</p><span class="delimiter"></span><p>') + '</p>';
        }
        $rt_example_container.html(text);
    });
}

/**
 * Select any example text from html element
 * @param {object} $obj
 */
function selectExampleText($obj)
{
    $text_for_test.val($obj.html().trim().replaceDoubleSpaces());
    $reset_typing_btn.trigger('click');
}

/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /**/
    loadExamples();

    /* initialization for any text from textarea */
    $reset_typing_btn.on('click', function () {
        let $rt_textarea = $('.rt-textarea');
        let $rt_example = $('.rt-example');
        let text = $text_for_test.val().trim();
        $rt_textarea.removeClass('error');
        if (text.length) {
            $reset_typing_btn.html($reset_typing_btn.data('reset-text'));
            initText(text);
        } else {
            $reset_typing_btn.html($reset_typing_btn.data('start-text'));
            $rt_textarea.addClass('error');
            $rt_example.removeClass('hidden');
            $rt_show_example.prop('checked', true);
            $rt_container.html('');
            $rt_result.html('');
            alert($text_for_test.attr('placeholder'));
        }
    });

    /* clear text in textarea */
    $rt_reset_btn.on('click', function () {
        $reset_typing_btn.html($reset_typing_btn.data('start-text'));
    });

    /* close span with example text */
    $('span.close').on('click', function () {
        $(this).parent().addClass('hidden');
        if ($(this).data('checkbox') !== undefined) {
            let $checkbox = $(`#${$(this).data('checkbox')}`);
            if ($checkbox.length) {
                $checkbox.prop('checked', false);
            }
        }
    });

    /* select any example text */
    $sel_text_variant.on('change', function () {
        let val = parseInt($(this).val());
        if (val < 0) return;
        let $texts = $rt_example_container.find('p');
        if (typeof $texts[val] !== undefined) {
            selectExampleText($($texts[val]));
        }
    });

    /* select any example text */
    $(document).on('click', '.text-example p', function () {
        selectExampleText($(this));
    });

    /* show or hide div with result of typing */
    $rt_show_result.on('change', function () {
        $(this).is(':checked')
            ? $rt_result.parent().removeClass('hidden')
            : $rt_result.parent().addClass('hidden');
    });

    /* show or hide div with example texts */
    $rt_show_example.on('change', function () {
        $(this).is(':checked')
            ? $rt_example.removeClass('hidden')
            : $rt_example.addClass('hidden');
    });

    /* handle the user's key press event */
    document.querySelector('body').addEventListener('keydown', function (e) {

        /* focus on main div with indicated text */
        if ($text_for_test.is(":focus")) {
            return;
        }
        $rt_container.attr("tabindex",-1).focus();

        /* find out which button is pressed */
        let curPressKey = e.key.trim();
        let curKeyCode  = e.keyCode;

        /* restart if ESC pressed */
        if (curKeyCode === 27 && startTime) {
            $reset_typing_btn.trigger('click');
            return;
        }

        /* return if systems key pressed */
        console.log(curKeyCode);
        if ($.inArray(curKeyCode, skipKeys) >= 0) {
            return;
        }

        /* detect CapsLock */
        if (e.getModifierState('CapsLock')) {
            alert('Caps lock is on! Please, turn it off.');
            return;
        }

        /* imitation Enter pressed */
        if (curKeyCode === 13) {
            curPressKey = visualEnter;
        }

        /* if the text has not ended, continue processing keypress events */
        $curNeedEl = $rt_container.find('span.t-black').first();
        if ($curNeedEl.length) {

            let curNeedKey = $curNeedEl.text().trim();
            console.log(curPressKey);

            if (!startTime) {
                startTime = Math.floor(Date.now() / 1000);
                calculateResults();
                //console.log(startTime);
            }

            if (curPressKey === curNeedKey) {
                countSymbol++;
                $curNeedEl
                    .removeClass()
                    .addClass('t-passed');
                let $nextNeedEl = $rt_container.find('span.t-black').first();
                if ($nextNeedEl.length) {
                    $nextNeedEl.addClass('t-green');
                } else {
                    clearTimeout(tmt);
                }
                printTypingResult(curPressKey);
            } else {
                if (!$curNeedEl.hasClass('t-red')) {
                    countErrors++;
                }
                countErrorsTotal++;
                $curNeedEl
                    .addClass('t-red');
                printTypingResult(curPressKey, true);
            }
        } else {
            clearTimeout(tmt);
        }

        /* cancel default browser reaction on keydowngit commit -m "first commit" */
        e.preventDefault();

    });

});
