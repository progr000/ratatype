const $keyboard = $('#rt-keyboard-content');
const $keyboard_keyset_default = $('.keyboard-keyset-default');
const $keyboard_keyset_shift = $('.keyboard-keyset-shift');
let current_lang = 'en';
//let sysKeys = [8, 16];
let sysKeysCode = ['Backspace', 'ShiftLeft', 'ShiftRight'];

/**
 *
 * @param {string} lang
 */
function initKeyboard(lang)
{
    $keyboard.find('.keyboard-button').each(function () {
        let $self = $(this);
        $self.children('div').children('span').children('span').html($self.data(`value-${lang}`));
        $keyboard_keyset_default.show();
        $keyboard_keyset_shift.hide();
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

    $keyboard_keyset_default.show();
    $keyboard_keyset_shift.hide();

    if (letter === '') { letter = ' '; }
    $('.keyboard-button').removeClass('cHover');
    let $next_key = $keyboard.find(`[data-value-${current_lang}='${letter}']`);
    if ($next_key.length) {
        $next_key.addClass('cHover');
        if ($next_key.parent().parent().hasClass('keyboard-keyset-shift') && letter !== ' ') {
            //cHoverNeed
            $keyboard_keyset_default.hide();
            $keyboard_keyset_shift.show();
            if ($next_key.hasClass('left')) {
                $keyboard_keyset_shift.find('.keyboard-key-16.right').first().addClass('cHover');
            } else {
                $keyboard_keyset_shift.find('.keyboard-key-16.left').first().addClass('cHover');
            }
        }
    }
}

/**
 *
 * @param {object} event
 */
function initDefaultKeyset(event)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    /* find out which button is pressed */
    let curCode = event.code;

    if ($.inArray(curCode, ['ShiftLeft', 'ShiftRight']) >= 0) {
        if ($keyboard_keyset_shift.find('.cHover').length === 0) {
            $keyboard_keyset_default.show();
            $keyboard_keyset_shift.hide();
        }
    }
    if ($.inArray(curCode, sysKeysCode) >= 0) {
        $(`.keyboard-key-${curCode}`).removeClass('k-system');
    }
}

/**
 *
 * @param {object} event
 */
function initShiftKeyset(event)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    /* find out which button is pressed */
    let curCode = event.code;

    if ($.inArray(curCode, ['ShiftLeft', 'ShiftRight']) >= 0) {
        $keyboard_keyset_default.hide();
        $keyboard_keyset_shift.show();
    }
    if ($.inArray(curCode, sysKeysCode) >= 0) {
        $(`.keyboard-key-${curCode}`).addClass('k-system');
    }
}

/**
 *
 * @param {string} keyCode
 */
function markSuccessKeyPressed(keyCode)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    let $key = $(`.code-${keyCode}`);
    $key.addClass("k-success");

    setTimeout(function () {
        $key.removeClass('k-error k-success');
    }, 200);
}

/**
 *
 * @param {string} keyCode
 */
function markErrorKeyPressed(keyCode)
{
    /**/
    if (!$keyboard.is(':visible')) {
        return;
    }

    let $key = $(`.code-${keyCode}`);
    if ($.inArray(keyCode, sysKeysCode) < 0) {
        $key.addClass("k-error");
    }

    setTimeout(function () {
        $key.removeClass('k-error k-success');
    }, 200);
}
