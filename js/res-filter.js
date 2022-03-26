/** */
const $search = $('#search-filter');
const $ch_filter = $('#ch-filter');
let tmt_filter;
let current_sort = '-finishTime';

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
 * For sorting stat in table
 * @param property
 * @returns {function(*, *): number}
 */
function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

/**
 * Load stat from localStorage to html-table
 * @param {object} $modal
 * @param {string} sort
 */
function loadStat($modal, sort)
{
    let user_stat = localStorage.getItem('user_stat');
    let tr = '<tr>' +
        '<td colspan="6" class="a-center">Пока нет статистики</td>' +
        '</tr>';
    if (user_stat !== null) {
        let json_user_stat = JSON.parse(user_stat);
        let l = json_user_stat.length;
        if (l > 0) {

            json_user_stat.sort(dynamicSort(sort));

            tr = '';
            for (let i=0; i<l; i++) {
                tr +=
                    '<tr>' +
                    `<td>${json_user_stat[i].finish_date}</td>` +
                    `<td>${json_user_stat[i].speed}</td>` +
                    `<td>${json_user_stat[i].accuracyCurrent}</td>` +
                    `<td>${json_user_stat[i].countErrorsTotal}</td>` +
                    `<td>${json_user_stat[i].textLen}</td>` +
                    `<td>${json_user_stat[i].currentTextShort}</td>` +
                    '</tr>';
            }
        }
    }

    $('#tbody').html(tr);
}

/**
 *
 */
function openStatModal($modal)
{
    loadStat($modal, current_sort);
    doFilter($search, 0);
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
        current_sort = $self.attr('data-sort');

        $('.js-sort').removeClass('current-sort desc asc');

        if(current_sort[0] === "-") {
            $self.attr('data-sort', current_sort.substr(1));
            $self.addClass('current-sort desc');
        } else {
            $self.attr('data-sort', `-${current_sort}`);
            $self.addClass('current-sort asc');
        }

        loadStat($modal, current_sort);
        doFilter($search, 0);
    });

});
