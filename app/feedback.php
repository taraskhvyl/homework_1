<?php

if (!empty($_POST['name']))    $name = $_POST['name'];
if (!empty($_POST['email']))   $email = $_POST['email'];
if (!empty($_POST['message'])) $message = $_POST['message'];
if (!empty($_POST['captcha'])) $captcha = $_POST['captcha'];
$data = array();

if((!isset($name))||(!isset($email))||(!isset($message))||(!isset($captcha))){
        $data['status'] = 'error';

    } else {
        $data['status'] = 'OK';

    }

    header("Content-type: application/json");
    echo json_encode($data);

?>
