/** */
const $search = $('#search-filter');
const $ch_filter = $('#ch-filter');
let tmt_filter;

/**
 * @param {boolean} ch
 */
function trShowHide(ch)
{
    $('.tbl-filter tr').show();
    if (ch) {
        $('.tbl-filter tr.-hidden-').hide();
    }
}

/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /* when fill filter field */
    $search.on('keyup', function() {

        clearTimeout(tmt_filter);
        $('.tbl-filter tr').addClass('-hidden-');
        $('.tbl-filter td').removeClass('-found-');


        let s = $.trim($(this).val());
        if (!s.length) {
            $('.tbl-filter tr').removeClass('-hidden-');
            trShowHide($ch_filter.is(':checked'));
            return false;
        }

        tmt_filter = setTimeout(function() {

            $('.tbl-filter').find('td').each(function() {

                if ($(this).text().toLowerCase().indexOf(s.toLowerCase()) >= 0) {
                    $(this).addClass('-found-');
                    $(this).parent().removeClass('-hidden-');
                }
            });

            trShowHide($ch_filter.is(':checked'));

        }, 500);

    });

    /* when change filter checkbox */
    $ch_filter.on('change', function () {
        trShowHide($(this)[0].checked)
    });

});
