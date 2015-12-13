<?php

    $name = $_POST['nameProject'];
    $data = array();
    
    if($name === ''){
        $data['status'] = 'error';
        $data['text'] = 'Заполните имя!';
    } else {
        $data['status'] = 'OK';
        $data['text'] = 'Вы молодец!';
    }

    header("Content-type: application/json");
    echo json_encode($data);
    exit;

?>