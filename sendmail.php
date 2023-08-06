<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Excepiton;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail=new PHPMailer(true);
$mail->CharSet="UTF-8";

$name="name";
$email="email";
$project="project";
$message="message";

$body=$name.' '.$email.' '.$project.' '.$message;
$theme="[Заявка с формы]";

$mail->addAddress("ingvar94@mail.ru");

$mail->Subject=$theme;
$mail->Body=$body;

try {
 $mail->send();
 echo "Message has been sent successfully";
    } catch (Exception $e) {
echo "Mailer Error: " . $mail->ErrorInfo;
    }




