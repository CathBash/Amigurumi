<?php
header('Content-Type: text/html; charset=utf-8');

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$email = trim($email);
$message = htmlspecialchars($message);
$message = urldecode($message);
$message = trim($message);

if (mail(
  "yarncraft@mail.ru",
  "Новое письмо с сайта",
  "Имя: " . $name . "\n" . "E-mail: " . $email . "\n" . "Тема: " . $subject . "\n" . "Текст: " . $message . "\n",
  "From:  yarncraft@a0723293.xsph.ru \r\n"
)) {
  print("ok");
} else {
  echo ('Есть ошибки! Проверьте данные..');
}
