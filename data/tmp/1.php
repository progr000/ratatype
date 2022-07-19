<?php
$data = file_get_contents('txt.txt');
$arr = explode(' ', $data);
//var_dump($arr);
//var_dump(array_unique($arr));
$res = implode(' ', array_unique($arr));
file_put_contents('res.txt.txt', $res);
var_dump($res);