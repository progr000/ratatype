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
                    <td width="1px">
                        <button type="reset">Очистить</button>
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
                <td width="1%"  class="no-wrap a-right"><span class="rt-reset" id="reset-text-btn" data-start-text="Начать" data-reset-text="Заново">Начать</span></td>
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
        <div class="text-example">

            <span class="delimiter"></span>
            <p>
                Testing
                text with
                Enter
            </p>
            <span class="delimiter"></span>
            <p>

            </p>
            <span class="delimiter"></span>
            <p>
                Hello!

                My name is Kate. My surname is Pavlova. I'm seven. I live in Minsk, in Pushkin street. I go to school number 214. I'm in the first form.

                I've got a family. It is small. We are a family of four. I've got a father, a mother and a brother. I haven't got a sister. My father is.an engineer. He works in a plant. My mother is a teacher. She works at school. My brother is little. He doesn't go to school. He goes to a kindergarten. He is four.
            </p>
            <span class="delimiter"></span>
            <p>
            You can pick your friends, you can pick your nose, but you can't pick your friend's nose. Babies are born without knee caps. They don't appear until the child reaches 2-6 years of age. Modern records do not compare with that of St Simeon the younger called stylites a monk who spent the final 45 years of his life living at the top of a stone pillar on the hill of wonders near Antioch in Syria!
            </p>
            <span class="delimiter"></span>
            <p>
            Almonds are a member of the peach family. Dentists have recommended that a toothbrush be kept at least 6 feet away from a toilet to avoid airborne particles resulting from the flush. The plastic things on the end of shoelaces are called aglets. Richard Millhouse Nixon was the first US president whose name contains all the letters from the word 'criminal'. The second was William Jefferson Clinton.
            </p>
            <span class="delimiter"></span>
            <p>
            Ancient Greeks wove marjoram into funeral wreaths and put them on the graves of loved ones. The wreaths served as prayers for the happiness of the deceased in a future life. Breaking of a glass is traditional in some wedding ceremonies. This custom symbolizes different things. To some it is the destruction of the temple in Jerusalem, and for some it is the represents the fragility of a relationship.
            </p>
            <span class="delimiter"></span>
            <p>
            Когда человек сознательно или интуитивно выбирает себе в жизни какую-то цель, жизненную задачу, он невольно дает себе оценку. По тому, ради чего человек живет, можно судить и о его самооценке - низкой или высокой.
            </p>
            <span class="delimiter"></span>
            <p>
            Если человек живет, чтобы приносить людям добро, облегчать их страдания, давать людям радость, то он оценивает себя на уровне этой своей человечности. Он ставит себе цель, достойную человека.
            </p>
            <span class="delimiter"></span>
            <p>
            Только такая цель позволяет человеку прожить свою жизнь с достоинством и получить настоящую радость. Да, радость! Подумайте: если человек ставит себе задачей увеличивать в жизни добро, приносить людям счастье, какие неудачи могут его постигнуть? Не тому помочь? Но много ли людей не нуждаются в помощи?
            </p>
            <span class="delimiter"></span>
            <p>
            Если жить только для себя, своими мелкими заботами о собственном благополучии, то от прожитого не останется и следа. Если же жить для других, то другие сберегут то, чему служил, чему отдавал силы.
            </p>
            <span class="delimiter"></span>
            <p>
            Можно по-разному определять цель своего существования, но цель должна быть. Надо иметь и принципы в жизни. Одно правило в жизни должно быть у каждого человека, в его цели жизни, в его принципах жизни, в его поведении: надо прожить жизнь с достоинством, чтобы не стыдно было вспоминать.
            </p>
            <span class="delimiter"></span>
            <p>
            Достоинство требует доброты, великодушия, умения не быть эгоистом, быть правдивым, хорошим другом, находить радость в помощи другим.
            Ради достоинства жизни надо уметь отказываться от мелких удовольствий и немалых тоже… Уметь извиняться, признавать перед другими ошибку - лучше, чем врать.
            Обманывая, человек прежде всего обманывает самого себя, ибо он думает, что успешно соврал, а люди поняли и из деликатности промолчали.
            </p>
            <span class="delimiter"></span>
            <p>
            Жизнь - прежде всего творчество, но это не значит, что каждый человек, чтобы жить, должен родиться художником, балериной или ученым. Можно творить просто добрую атмосферу вокруг себя. Человек может принести с собой атмосферу подозрительности, какого-то тягостного молчания, а может внести сразу радость, свет. Вот это и есть творчество.
            </p>
            <span class="delimiter"></span>

        </div>
    </div>

</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="script.js?v=<?= filemtime('script.js') ?>"></script>

</body>
</html>