let $keyboard = $('#rt-keyboard-content');
let current_lang = 'en';
let sysKeys = [8, 16];

/**
 *
 * @param {string} lang
 */
function initKeyboard(lang)
{
    $keyboard.find('.keyboard-button').each(function () {
        let $self = $(this);
        $self.children('div').children('span').children('span').html($self.data(`value-${lang}`));
    });
}

/**
 *
 * @param {string} letter
 */
function showKeyForLetter(letter)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    if (letter === '') { letter = ' '; }
    $('.keyboard-button').removeClass('cHover');
    let $next_key = $keyboard.find(`[data-value-${current_lang}='${letter}']`);
    if ($next_key.length) {
        $next_key.addClass('cHover');
        if ($next_key.parent().parent().hasClass('keyboard-keyset-shift') && letter !== ' ') {
            //cHoverNeed
            $('.keyboard-keyset-default').hide();
            $('.keyboard-keyset-shift').show();
            if ($next_key.hasClass('left')) {
                $('.keyboard-keyset-shift').find('.keyboard-key-16.right').first().addClass('cHover');
            } else {
                $('.keyboard-keyset-shift').find('.keyboard-key-16.left').first().addClass('cHover');
            }
        }
    }
}

/**
 *
 * @param {object} event
 */
function showDefaultKeyset(event)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    /* find out which button is pressed */
    let curKeyCode = event.keyCode;
    let curCode = event.code;

    if (curKeyCode === 16) {
        if ($('.keyboard-keyset-shift').find('.cHover').length === 0) {
            $('.keyboard-keyset-default').show();
            $('.keyboard-keyset-shift').hide();
        }
    }
    if ($.inArray(curKeyCode, sysKeys) >= 0) {
        $(`.keyboard-key-${curCode}`).removeClass('k-system');
    }
}

/**
 *
 * @param {object} event
 */
function showShiftKeyset(event)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    /* find out which button is pressed */
    let curKeyCode  = event.keyCode;
    let curCode = event.code;

    //console.log(curKeyCode, curPressKey, e);

    if (curKeyCode === 16) {
        $('.keyboard-keyset-default').hide();
        $('.keyboard-keyset-shift').show();
    }
    if ($.inArray(curKeyCode, sysKeys) >= 0) {
        $(`.keyboard-key-${curCode}`).addClass('k-system');
    }
}

/**
 *
 * @param {int} keyCode
 */
function markSuccesKeyPressed(keyCode)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    let $key = $(`.keyboard-key-${keyCode}`);
    $key.addClass("k-success");

    setTimeout(function () {
        $key.removeClass('k-error k-success');
    }, 200);
}

/**
 *
 * @param {int} keyCode
 */
function markErrorKeyPressed(keyCode)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    let $key = $(`.keyboard-key-${keyCode}`);
    if ($.inArray(keyCode, sysKeys) < 0) {
        $key.addClass("k-error");
    }

    setTimeout(function () {
        $key.removeClass('k-error k-success');
    }, 200);
}
