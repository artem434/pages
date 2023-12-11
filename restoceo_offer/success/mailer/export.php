<?php
	include "libmail.php"; // вставляем файл с классом
	include "libmail_idna_convert.php";
	$username = $_POST['name'];
	$usermail = $_POST['email'];
	$userphone = $_POST['phone'];
	$m= new Mail(); // начинаем
	$m->From( 'sevnikita@gmail.com' ); // от кого отправляется почта
	$m->To( 'holodniak.e@gmail.com' ); // кому адресованно
	$m->Subject( "Заявка с avis" );
	$m->Body( "Пользователь: $username<br>Номер телефона: $userphone <br> Email: $usermail" ,"html" );
	$m->Priority(3) ;    // приоритет письма
	$m->Send();    // а теперь пошла отправка
exit;
?>