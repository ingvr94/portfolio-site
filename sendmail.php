<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Excepiton;

require 'PHPMailer-6.8.0/src/Exception.php';
require 'PHPMailer-6.8.0/src/PHPMailer.php'';

$mail=new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.8.0/language/');
$mail->isHTML(true);


$mail->setFrom('','Сайт портфолио')
$mail->addAddress('ingvar94@mail.ru')

$body='<h1>Новое сообщение</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Email</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['project']))) {
    $body.='<p><strong>Проект</strong> '.$_POST['project'].'</p>';
}
if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message='Ошибка';
} else {
    $message='Данные отправлены';
}

$response=['message'=>$message];

header('Content-type: application/json');
echo json_encode($response);

?>