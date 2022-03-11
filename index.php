<html>
<head>
    <meta charset="utf-8">
    <title>My Ratatype</title>
    <link rel="stylesheet" href="style.css?v=<?= filemtime('style.css') ?>">
</head>
<body>
<div class="main-container">

    <div class="rt-textarea">
        <form method="post" onsubmit="return false">
            <table>
                <tr>
                    <td width="100%">
                        <textarea id="text-for-test"
                                  placeholder="Введите текст для тестирования ваших способностей"></textarea>
                    </td>
                    <td width="1px" class="no-wrap">
                        <button type="reset"
                                id="rt-reset-btn">Очистить</button>
                        <button type="button"
                                class="rt-start-btn"
                                id="reset-typing-btn"
                                data-start-text="Начать"
                                data-reset-text="Заново">Начать</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>

    <div class="rt-stats">
        <table>
            <tr>
                <td width="15%">Скорость: <div id="rt-speed">0</div> <span>зн/мин</span></td>
                <td width="15%">Точность: <div id="rt-accuracy">100</div> <span>%</span></td>
                <td width="15%">Ошибок: <div id="rt-errors">0</div></td>
                <td width="15%" class="-hidden">Набрано: <div id="rt-count">0</div></td>
                <td width="1%"  class="no-wrap">
                    <input type="checkbox" id="rt-show-result" checked="checked"><label for="rt-show-result">Результат печати</label>
                    <br>
                    <input type="checkbox" id="rt-show-example" checked="checked"><label for="rt-show-example">Примеры текстов</label>
                </td>
            </tr>
        </table>
    </div>

    <div class="rt-text" id="rt-container"></div>

    <div class="rt-text rt-result">
        <span class="close" data-checkbox="rt-show-result">x</span>
        Результирующий текст:
        <div id="rt-result-typing"></div>
    </div>

    <div class="rt-example -hidden" id="rt-example-text">
        <span class="close" data-checkbox="rt-show-example">x</span>
        <b>Пример текстов для тестирования (клик на тексте выбирает его):</b>
        <p></p>
        <div class="text-example" id="rt-example-container">

        </div>
    </div>

</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="script.js?v=<?= filemtime('script.js') ?>"></script>

</body>
</html>