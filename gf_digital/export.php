<?php
if (!$_POST) die('приветик'); // если глобальный массив POST не передан значит приветик
// иначе продолжаем

$response = array(); // сюда будем писать то что будем возвращать скрипту
$data = array(); // массив для отправки в гугл форм

$data['entry.855328194'] = isset($_POST['name']) ? $_POST['name'] : false; // сунем каждое поле в отдельную переменную
$data['entry.453467288'] = isset($_POST['email']) ? $_POST['email'] : false;
$data['entry.237800895'] = isset($_POST['phone']) ? $_POST['phone'] : false;
$data['entry.1908638813'] = isset($_POST['landing_id']) ? $_POST['landing_id'] : false;
$data['entry.1608576852'] = isset($_POST['token']) ? $_POST['token'] : false;
$data['entry.727545548'] = isset($_POST['success_url']) ? $_POST['success_url'] : false;
$data['entry.648990995'] = isset($_POST['ref']) ? $_POST['ref'] : false;
$data['entry.1682744372'] = isset($_POST['ga']) ? $_POST['ga'] : false;
$data['entry.648990995'] = isset($_POST['ym_uid']) ? $_POST['ym_uid'] : false;
$data['entry.1538143664'] = isset($_POST['ref']) ? $_POST['ref'] : false;
$data['entry.1611386070'] = isset($_POST['utm_source']) ? $_POST['utm_source'] : false;
$data['entry.303098708'] = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : false;
$data['entry.2017816980'] = isset($_POST['utm_term']) ? $_POST['utm_term'] : false;
$data['entry.1496240053'] = isset($_POST['utm_content']) ? $_POST['utm_content'] : false;
$data['entry.1649576813'] = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : false;
$data['entry.551924681'] = isset($_POST['google_client_id']) ? $_POST['google_client_id'] : false;
$data['entry.1344309620'] = isset($_POST['es_mail_id']) ? $_POST['es_mail_id'] : false;
$data['entry.1435002694'] = isset($_POST['convert_in_zoho']) ? $_POST['convert_in_zoho'] : false;
$data['entry.2104886981'] = isset($_POST['es_id']) ? $_POST['es_id'] : false;
$data['entry.30461863'] = isset($_POST['error_url']) ? $_POST['error_url'] : false;
$data['entry.769939785'] = isset($_POST['redirect']) ? $_POST['redirect'] : false;
$data['entry.1457552342'] = isset($_POST['rolecompany']) ? $_POST['rolecompany'] : false;
$data['entry.896069618'] = isset($_POST['countcompany']) ? $_POST['countcompany'] : false;
$data['entry.655376985'] = isset($_POST['location_href']) ? $_POST['location_href'] : false;
$data['entry.1346304178'] = isset($_POST['tranid']) ? $_POST['tranid'] : false;
$data['entry.930396305'] = isset($_POST['formid']) ? $_POST['formid'] : false;
$data['entry.648990995'] = isset($_POST['ref']) ? $_POST['ref'] : false;


// теперь подготовим данные для отправки в гугл форму
$url = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScxpc1bQCG6zaRXcPrz2ckr64rPIR9PY1J1GHU2fgQRJkld3w/formResponse?pli=1'; // куда слать, это атрибут action у гугл формы


$data = http_build_query($data); // теперь сериализуем массив данных в строку для отправки


$options = array( // задаем параметры запроса
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => $data,
    ),
);
$context  = stream_context_create($options); // создаем контекст отправки
$result = file_get_contents($url, false, $context); // отправляем

if (!$result) { // если что-то не так
    $response['ok'] = 0; // пишем что все плохо
    $response['message'] = '<p class="error">Что-то пошло не так, попробуйте отправить позже.</p>'; // пишем ответ
    die(json_encode($response)); //выводим массив в json формате и умираем
}

$response['ok'] = 1; // если дошло до сюда, значит все ок
$response['message'] = '<p class="">Все ок, отправилось.</p>'; // пишем ответ
echo json_encode($data);
die(json_encode($response)); //выводим массив в json формате и умираем

?>