<?php 

/* https://api.telegram.org/bot981766549:AAFodOsrPWMXjoQm9x81ye6Al_2W9fuxZwA/getUpdates,*/
$data = $_POST;
$name = $_POST['username'];
$phone = $_POST['tel'];
$token = "981766549:AAFodOsrPWMXjoQm9x81ye6Al_2W9fuxZwA";
$chat_id = "-366524881";
$arr = array(
	'Имя пользователя:' => $name,
	'Телефон:' => $phone
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
	echo $data['username'];
} else {
	echo "Error";
}
?>
