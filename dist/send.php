<?php

if (!empty($_POST['name']))                             $name   = $_POST['nameProject'];
if (!empty($_POST['urlProject']))                        $url   = $_POST['urlProject'];
if (!empty($_POST['descriptionProject'])) $descriptionProject   = $_POST['descriptionProject'];
$data = array();
    
if((!isset($name))||(!isset($url))||(!isset($descriptionProject))){
        $data['status'] = 'error';

    } else {
        $data['status'] = 'OK';

    }

    header("Content-type: application/json");
    echo json_encode($data);

?>