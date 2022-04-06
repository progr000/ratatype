<html>
<head>
    <meta charset="utf-8">
    <title>My Ratatype</title>
    <link rel="stylesheet" href="css/keyboard.css?v=<?= filemtime('css/keyboard.css') ?>"/>
</head>

<body>


<span class="sel-lang" data-lang="en">EN</span>
<span class="sel-lang" data-lang="ru">RU</span>

<div class="typing-trainer-wrap">

    <div class="keyboard" id="keyboard-id">

        <div class="keyboard-keyset keyboard-keyset-default" style="display: block;"><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-192" data-value-ru="ё" data-value-en="`" data-key-code="192"><div class="c0"><span class="keyboard-container"><span>`</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-49" data-value-ru="1" data-value-en="1" data-key-code="49"><div class="c1"><span class="keyboard-container"><span>1</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-50" data-value-ru="2" data-value-en="2" data-key-code="50"><div class="c1"><span class="keyboard-container"><span>2</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-51" data-value-ru="3" data-value-en="3" data-key-code="51"><div class="c2"><span class="keyboard-container"><span>3</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-52" data-value-ru="4" data-value-en="4" data-key-code="52"><div class="c3"><span class="keyboard-container"><span>4</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-53" data-value-ru="5" data-value-en="5" data-key-code="53"><div class="c4"><span class="keyboard-container"><span>5</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-54" data-value-ru="6" data-value-en="6" data-key-code="54"><div class="c4"><span class="keyboard-container"><span>6</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-55" data-value-ru="7" data-value-en="7" data-key-code="55"><div class="c5"><span class="keyboard-container"><span>7</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-56" data-value-ru="8" data-value-en="8" data-key-code="56"><div class="c3"><span class="keyboard-container"><span>8</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-57" data-value-ru="9" data-value-en="9" data-key-code="57"><div class="c2"><span class="keyboard-container"><span>9</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-48" data-value-ru="0" data-value-en="0" data-key-code="48"><div class="c1"><span class="keyboard-container"><span>0</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-189" data-value-ru="-" data-value-en="-" data-key-code="189"><div class="c1"><span class="keyboard-container"><span>-</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-187" data-value-ru="=" data-value-en="=" data-key-code="187"><div class="c1"><span class="keyboard-container"><span>=</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-8 keyboard-key-bksp" data-value-ru="&larr;" data-value-en="&larr;" data-key-code="8"><div class="kBack"><span class="keyboard-container"><span>&larr;</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-9 keyboard-key-tab" data-value-ru=TAB" data-value-en="TAB" data-key-code="9"><div class="kTab"><span class="keyboard-container"><span>TAB</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-81" data-value-ru="й" data-value-en="q" data-key-code="81"><div class="c1"><span class="keyboard-container"><span>q</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-87" data-value-ru="ц" data-value-en="w" data-key-code="87"><div class="c2"><span class="keyboard-container"><span>w</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-69" data-value-ru="у" data-value-en="e" data-key-code="69"><div class="c3"><span class="keyboard-container"><span>e</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-82" data-value-ru="к" data-value-en="r" data-key-code="82"><div class="c4"><span class="keyboard-container"><span>r</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-84" data-value-ru="е" data-value-en="t" data-key-code="84"><div class="c4"><span class="keyboard-container"><span>t</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-89" data-value-ru="н" data-value-en="y" data-key-code="89"><div class="c5"><span class="keyboard-container"><span>y</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-85" data-value-ru="г" data-value-en="u" data-key-code="85"><div class="c5"><span class="keyboard-container"><span>u</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-73" data-value-ru="ш" data-value-en="i" data-key-code="73"><div class="c3"><span class="keyboard-container"><span>i</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-79" data-value-ru="щ" data-value-en="o" data-key-code="79"><div class="c2"><span class="keyboard-container"><span>o</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-80" data-value-ru="з" data-value-en="p" data-key-code="80"><div class="c1"><span class="keyboard-container"><span>p</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-219" data-value-ru="х" data-value-en="[" data-key-code="219"><div class="c1"><span class="keyboard-container"><span>[</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-221" data-value-ru="ъ" data-value-en="]" data-key-code="221"><div class="c1"><span class="keyboard-container"><span>]</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-220" data-value-ru="\" data-value-en="\" data-key-code="220"><div class="kSlash"><span class="keyboard-container"><span>\</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-20 keyboard-key-lock" data-value-ru="CAPS" data-value-en="CAPS" data-key-code="20"><div class="kCaps"><span class="keyboard-container"><span>CAPS</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-65" data-value-ru="ф" data-value-en="a" data-key-code="65"><div class="c1"><span class="keyboard-container"><span>a</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-83" data-value-ru="ы" data-value-en="s" data-key-code="83"><div class="c2"><span class="keyboard-container"><span>s</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-68" data-value-ru="в" data-value-en="d" data-key-code="68"><div class="c3" ><span class="keyboard-container"><span>d</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-70" data-value-ru="а" data-value-en="f" data-key-code="70"><div class="c4" style="background-color: rgb(255, 71, 21)"><span class="keyboard-container"><span>f</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-71" data-value-ru="п" data-value-en="g" data-key-code="71"><div class="c4"><span class="keyboard-container"><span>g</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-72" data-value-ru="р" data-value-en="h" data-key-code="72"><div class="c5"><span class="keyboard-container"><span>h</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-74" data-value-ru="о" data-value-en="j" data-key-code="74"><div class="c5"><span class="keyboard-container"><span>j</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-75" data-value-ru="л" data-value-en="k" data-key-code="75"><div class="c3"><span class="keyboard-container"><span>k</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-76" data-value-ru="д" data-value-en="l" data-key-code="76"><div class="c2"><span class="keyboard-container"><span>l</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-186" data-value-ru="ж" data-value-en=";" data-key-code="186"><div class="c1"><span class="keyboard-container"><span>;</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-222" data-value-ru="э" data-value-en="'" data-key-code="222"><div class="c1"><span class="keyboard-container"><span>'</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-13 keyboard-key-enter" data-value-ru="ENTER" data-value-en="ENTER" data-key-code="13"><div class="kEnter"><span class="keyboard-container"><span>ENTER</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-16 keyboard-key-shift" data-value-ru="SHIFT" data-value-en="SHIFT" data-key-code="16"><div class="kShift"><span class="keyboard-container"><span>SHIFT</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-90" data-value-ru="я" data-value-en="z" data-key-code="90"><div class="c1"><span class="keyboard-container"><span>z</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-88" data-value-ru="ч" data-value-en="x" data-key-code="88"><div class="c2"><span class="keyboard-container"><span>x</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-67" data-value-ru="с" data-value-en="c" data-key-code="67"><div class="c3"><span class="keyboard-container"><span>c</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-86" data-value-ru="м" data-value-en="v" data-key-code="86"><div class="c4"><span class="keyboard-container"><span>v</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-66" data-value-ru="и" data-value-en="b" data-key-code="66"><div class="c4"><span class="keyboard-container"><span>b</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-78" data-value-ru="т" data-value-en="n" data-key-code="78"><div class="c5"><span class="keyboard-container"><span>n</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-77 cHover" data-value-ru="ь" data-value-en="m" data-key-code="77"><div class="c5"><span class="keyboard-container"><span>m</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-188" data-value-ru="б" data-value-en="," data-key-code="188"><div class="c3"><span class="keyboard-container"><span>,</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-190" data-value-ru="ю" data-value-en="." data-key-code="190"><div class="c2"><span class="keyboard-container"><span>.</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-191" data-value-ru="." data-value-en="/" data-key-code="191"><div class="c1"><span class="keyboard-container"><span>/</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-16 keyboard-key-shift" data-value-ru="SHIFT" data-value-en="SHIFT" data-key-code="16"><div class="kShiftR"><span class="keyboard-container"><span>SHIFT</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-32 keyboard-key-space" data-value-ru=" " data-value-en=" " data-key-code="32"><div class="kSpace"><span class="keyboard-container"><span> </span></span></div></i><!--
            --></div>
        </div>



        <div class="keyboard-keyset keyboard-keyset-shift" style="display: none;"><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-192" data-value-ru="Ё" data-value-en="~" data-key-code="192"><div class="c0"><span class="keyboard-container"><span>~</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-49" data-value-ru="!" data-value-en="!" data-key-code="49"><div class="c1"><span class="keyboard-container"><span>!</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-50" data-value-ru="&quot;" data-value-en="@" data-key-code="50"><div class="c1"><span class="keyboard-container"><span>@</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-51" data-value-ru="№" data-value-en="#" data-key-code="51"><div class="c2"><span class="keyboard-container"><span>#</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-52" data-value-ru=";" data-value-en="$" data-key-code="52"><div class="c3"><span class="keyboard-container"><span>$</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-53" data-value-ru="%" data-value-en="%" data-key-code="53"><div class="c4"><span class="keyboard-container"><span>%</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-54" data-value-ru=":" data-value-en="^" data-key-code="54"><div class="c4"><span class="keyboard-container"><span>^</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-55" data-value-ru="?" data-value-en="&amp;" data-key-code="55"><div class="c5"><span class="keyboard-container"><span>&amp;</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-56" data-value-ru="*" data-value-en="*" data-key-code="56"><div class="c3"><span class="keyboard-container"><span>*</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-57" data-value-ru="(" data-value-en="(" data-key-code="57"><div class="c2"><span class="keyboard-container"><span>(</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-48" data-value-ru=")" data-value-en=")" data-key-code="48"><div class="c1"><span class="keyboard-container"><span>)</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-189" data-value-ru="_" data-value-en="_" data-key-code="189"><div class="c1"><span class="keyboard-container"><span>_</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-187" data-value-ru="+" data-value-en="+" data-key-code="187"><div class="c1"><span class="keyboard-container"><span>+</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-8 keyboard-key-bksp" data-value-ru="&larr;" data-value-en="&larr;" data-key-code="8"><div class="kBack"><span class="keyboard-container"><span>&larr;</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-9 keyboard-key-tab" data-value-ru="TAB" data-value-en="TAB" data-key-code="9"><div class="kTab"><span class="keyboard-container"><span>TAB</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-81" data-value-ru="Й" data-value-en="Q" data-key-code="81"><div class="c1"><span class="keyboard-container"><span>Q</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-87" data-value-ru="Ц" data-value-en="W" data-key-code="87"><div class="c2"><span class="keyboard-container"><span>W</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-69" data-value-ru="У" data-value-en="E" data-key-code="69"><div class="c3"><span class="keyboard-container"><span>E</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-82" data-value-ru="К" data-value-en="R" data-key-code="82"><div class="c4"><span class="keyboard-container"><span>R</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-84" data-value-ru="Е" data-value-en="T" data-key-code="84"><div class="c4"><span class="keyboard-container"><span>T</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-89" data-value-ru="Н" data-value-en="Y" data-key-code="89"><div class="c5"><span class="keyboard-container"><span>Y</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-85" data-value-ru="Г" data-value-en="U" data-key-code="85"><div class="c5"><span class="keyboard-container"><span>U</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-73" data-value-ru="Ш" data-value-en="I" data-key-code="73"><div class="c3"><span class="keyboard-container"><span>I</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-79" data-value-ru="Щ" data-value-en="O" data-key-code="79"><div class="c2"><span class="keyboard-container"><span>O</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-80" data-value-ru="З" data-value-en="P" data-key-code="80"><div class="c1"><span class="keyboard-container"><span>P</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-219" data-value-ru="Х" data-value-en="{" data-key-code="219"><div class="c1"><span class="keyboard-container"><span>{</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-221" data-value-ru="Ъ" data-value-en="}" data-key-code="221"><div class="c1"><span class="keyboard-container"><span>}</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-220" data-value-ru="/" data-value-en="|" data-key-code="220"><div class="kSlash"><span class="keyboard-container"><span>|</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-20 keyboard-key-lock" data-value-ru="CAPS" data-value-en="CAPS" data-key-code="20"><div class="kCaps"><span class="keyboard-container"><span>CAPS</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-65" data-value-ru="Ф" data-value-en="A" data-key-code="65"><div class="c1"><span class="keyboard-container"><span>A</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-83" data-value-ru="Ы" data-value-en="S" data-key-code="83"><div class="c2"><span class="keyboard-container"><span>S</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-68" data-value-ru="В" data-value-en="D" data-key-code="68"><div class="c3"><span class="keyboard-container"><span>D</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-70" data-value-ru="А" data-value-en="F" data-key-code="70"><div class="c4"><span class="keyboard-container"><span>F</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-71" data-value-ru="П" data-value-en="G" data-key-code="71"><div class="c4"><span class="keyboard-container"><span>G</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-72" data-value-ru="Р" data-value-en="H" data-key-code="72"><div class="c5"><span class="keyboard-container"><span>H</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-74" data-value-ru="О" data-value-en="J" data-key-code="74"><div class="c5"><span class="keyboard-container"><span>J</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-75" data-value-ru="Л" data-value-en="K" data-key-code="75"><div class="c3"><span class="keyboard-container"><span>K</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-76" data-value-ru="Д" data-value-en="L" data-key-code="76"><div class="c2"><span class="keyboard-container"><span>L</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-186" data-value-ru="Ж" data-value-en=":" data-key-code="186"><div class="c1"><span class="keyboard-container"><span>:</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-222" data-value-ru="Э" data-value-en="&quot;" data-key-code="222"><div class="c1"><span class="keyboard-container"><span>"</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-13 keyboard-key-enter" data-value-ru="ENTER" data-value-en="ENTER" data-key-code="13"><div class="kEnter"><span class="keyboard-container"><span>ENTER</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-16 keyboard-key-shift" data-value-ru="SHIFT" data-value-en="SHIFT" data-key-code="16"><div class="kShift"><span class="keyboard-container"><span>SHIFT</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-90" data-value-ru="Я" data-value-en="Z" data-key-code="90"><div class="c1"><span class="keyboard-container"><span>Z</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-88" data-value-ru="Ч" data-value-en="X" data-key-code="88"><div class="c2"><span class="keyboard-container"><span>X</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-67" data-value-ru="С" data-value-en="C" data-key-code="67"><div class="c3"><span class="keyboard-container"><span>C</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-86" data-value-ru="М" data-value-en="V" data-key-code="86"><div class="c4"><span class="keyboard-container"><span>V</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-66" data-value-ru="И" data-value-en="B" data-key-code="66"><div class="c4"><span class="keyboard-container"><span>B</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-78" data-value-ru="Т" data-value-en="N" data-key-code="78"><div class="c5"><span class="keyboard-container"><span>N</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-77 cHover" data-value-ru="Ь" data-value-en="M" data-key-code="77"><div class="c5"><span class="keyboard-container"><span>M</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-188" data-value-ru="Б" data-value-en="&lt;" data-key-code="188"><div class="c3"><span class="keyboard-container"><span>&lt;</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-190" data-value-ru="Ю" data-value-en="&gt;" data-key-code="190"><div class="c2"><span class="keyboard-container"><span>&gt;</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-191" data-value-ru="," data-value-en="?" data-key-code="191"><div class="c1"><span class="keyboard-container"><span>?</span></span></div></i><!--
                --><i class="keyboard-button keyboard-key-16 keyboard-key-shift" data-value-ru="SHIFT" data-value-en="SHIFT" data-key-code="16"><div class="kShiftR"><span class="keyboard-container"><span>SHIFT</span></span></div></i><!--
            --></div><!--
            --><div class="row"><!--
                --><i class="keyboard-button keyboard-key-32 keyboard-key-space" data-value-ru=" " data-value-en=" " data-key-code="32"><div class="kSpace"><span class="keyboard-container"><span> </span></span></div></i><!--
            --></div>
        </div>

        <div class="keyboard-hands" data-r="true" style="opacity: 0;"></div>
    </div>

</div>

<!-- -->
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/keyboard.js?v=<?= filemtime('js/keyboard.js') ?>"></script>

</body>
</html>