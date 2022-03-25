/** */
const $search = $('#search-filter');
const $ch_filter = $('#ch-filter');
let tmt_filter;

/**
 * @param {boolean} ch
 */
function trShowHide(ch)
{
    $('.tbl-filter tr').removeClass('hidden-tr');//.show();
    if (ch) {
        $('.tbl-filter tr.-hidden-').addClass('hidden-tr');//.hide();
    }
}

/**
 * Apply filter for stat
 * @param {object} $obj
 * @param {int} wait
 * @returns {boolean}
 */
function doFilter($obj, wait=500)
{
    clearTimeout(tmt_filter);
    $('.tbl-filter tr').addClass('-hidden-');
    $('.tbl-filter td').removeClass('-found-');


    let s = $.trim($obj.val());
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

    }, wait);
}

/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /* when fill filter field */
    $search.on('keyup', function() {
        doFilter($(this));
    });

    /* when change filter checkbox */
    $ch_filter.on('change', function () {
        trShowHide($(this)[0].checked)
    });

    /* sorting stat table */
    $(document).on('click', '.js-sort', function () {
        let $modal = $('#rt-stat-popup');
        let $self = $(this);
        let sort = $self.attr('data-sort');
        $('.js-sort').removeClass('current-sort desc asc');

        if(sort[0] === "-") {
            $self.attr('data-sort', sort.substr(1));
            $self.addClass('current-sort desc');
        } else {
            $self.attr('data-sort', `-${sort}`);
            $self.addClass('current-sort asc');
        }

        loadStat($modal, sort);
        doFilter($search, 0);
    });

});
