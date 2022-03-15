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
    $modal.find('.modal-body').html(text);
    let $b = $modal.find('button').first();
    $modal.show();
    $b.focus();
}

/**
 * When the document is loaded we can start
 */
$(document).ready(function () {

    /* close an modal */
    $(document).on('click', '.js-modal-close', function () {
        $(this).closest('.modal').hide();

        /* for repair stat while modal opened */
        if (statistics.startTime) {
            modalFinishTime = Math.floor(Date.now() / 1000);
            statistics.startTime += (modalFinishTime - modalStartTime);
        }
        modalFinishTime = 0;
        modalFinishTime = 0;
    });

});
