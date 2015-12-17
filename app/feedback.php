<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $captcha = $_POST['captcha'];
    $url = $_POST['urlProject'];
    $data = array();

if(($name === '')||($email === '')||($message === '')||($captha === '')||($url === '')){
        $data['status'] = 'error';

    } else {
        $data['status'] = 'OK';

    }

    header("Content-type: application/json");
    echo json_encode($data);
    exit;

?>
