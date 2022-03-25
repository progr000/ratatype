/** */
let modalStartTime = 0;
let modalFinishTime = 0;

/**
 * Show an alert
 * @param text
 */
function showAlert(text)
{
    modalStartTime = Math.floor(Date.now() / 1000);
    let $modal = $('#rt-alert-popup');
    if ($modal.length) {
        $modal.find('.modal-body').html(text);
        let $b = $modal.find('button').first();
        $modal.addClass('opened');
        $b.focus();
    }
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
function loadStat($modal, sort='-finishTime')
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
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /* close an modal */
    $(document).on('click', '.js-modal-close', function () {
        $(this).closest('.modal').removeClass('opened');

        /* for repair stat while modal opened */
        if (statistics.startTime) {
            modalFinishTime = Math.floor(Date.now() / 1000);
            statistics.startTime += (modalFinishTime - modalStartTime);
        }
        modalFinishTime = 0;
        modalFinishTime = 0;
    });

    /* open an modal */
    $(document).on('click', '.js-modal-open', function () {
        let $modal = $(`#${$(this).data('modal-id')}`);
        let before = $(this).data('funct-before');
        if (typeof before !== undefined && typeof window[before] === "function") {
            window[before]($modal);
        }
        if ($modal.length) {
            $modal.addClass('opened');
        }
    });

    /* close modal with class .close-when-click-out when click out of this modal */
    $(document).on('click', '.modal.close-when-click-out', function () {
        $(this).removeClass('opened');
    });
    $(document).on('click', '.modal__inner', function (e) {
        e.stopPropagation();
    });

});
