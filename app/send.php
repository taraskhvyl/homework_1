<?php

    $name = $_POST['nameProject'];
    $url = $_POST['urlProject'];
    $descriptionProject = $_POST['descriptionProject'];
    $data = array();
    
    if(($name === '')||($url === '')||($descriptionProject === '')){
        $data['status'] = 'error';

    } else {
        $data['status'] = 'OK';

    }

    header("Content-type: application/json");
    echo json_encode($data);
    exit;

?>