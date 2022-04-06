let $keyboard_id = $('#keyboard-id');

/**
 *
 * @param {string} lang
 */
function selectCurrentKeyboard(lang)
{
    $keyboard_id.find('.keyboard-button').each(function () {
        let $self = $(this);
        $self.children('div').children('span').children('span').html($self.data(`value-${lang}`));
    });
}

/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /**/
    $('.sel-lang').on('click', function () {
        selectCurrentKeyboard($(this).data('lang'));
    });

    /**/
    document.querySelector('body').addEventListener('keyup', function (e) {

        /* find out which button is pressed */
        let curPressKey = e.key.trim();
        let curKeyCode  = e.keyCode;

        if (curKeyCode === 16) {
            $('.keyboard-keyset-default').show();
            $('.keyboard-keyset-shift').hide();
        }
    });

    /**/
    document.querySelector('body').addEventListener('keydown', function (e) {

        /* find out which button is pressed */
        let curPressKey = e.key.trim();
        let curKeyCode  = e.keyCode;

        console.log(curKeyCode, curPressKey);

        if (curKeyCode === 16) {
            $('.keyboard-keyset-default').hide();
            $('.keyboard-keyset-shift').show();
        }

    });

});