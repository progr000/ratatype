let $keyboard = $('#keyboard-id');
let $string_typing = $('#string-typing');
let ind = 0;
let current_lang = 'en';
let sysKeys = [8, 16];

/**
 *
 * @param {string} lang
 */
function selectCurrentKeyboard(lang)
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
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /**/
    showKeyForLetter($string_typing.text().charAt(ind).trim());

    /**/
    $('.sel-lang').on('click', function () {
        current_lang = $(this).data('lang');
        selectCurrentKeyboard(current_lang);
    });

    /**/
    document.querySelector('body').addEventListener('keyup', function (e) {

        /* find out which button is pressed */
        let curKeyCode  = e.keyCode;
        let curCode = e.code;

        if (curKeyCode === 16) {
            if ($('.keyboard-keyset-shift').find('.cHover').length === 0) {
                $('.keyboard-keyset-default').show();
                $('.keyboard-keyset-shift').hide();
            }
        }
        if ($.inArray(curKeyCode, sysKeys) >= 0) {
            $(`.keyboard-key-${curCode}`).removeClass('system');
        }
    });

    /**/
    document.querySelector('body').addEventListener('keydown', function (e) {

        /* find out which button is pressed */
        let curPressKey = e.key.trim();
        let curKeyCode  = e.keyCode;
        let curCode = e.code;

        //console.log(curKeyCode, curPressKey, e);

        if (curKeyCode === 16) {
            $('.keyboard-keyset-default').hide();
            $('.keyboard-keyset-shift').show();
        }
        if ($.inArray(curKeyCode, sysKeys) >= 0) {
            $(`.keyboard-key-${curCode}`).addClass('system');
        }

        let $key = $(`.keyboard-key-${curKeyCode}`);
        let current_letter = $string_typing.text().charAt(ind).trim();
        if (curPressKey === current_letter) {
            $key.addClass("success");
            ind++;
            let next_letter = $string_typing.text().charAt(ind).trim();
            showKeyForLetter(next_letter);
        } else if ($.inArray(curKeyCode, sysKeys) < 0) {
            $key.addClass("error");
        }
        setTimeout(function () {
            $key.removeClass('error success');
        }, 200);
    });

});