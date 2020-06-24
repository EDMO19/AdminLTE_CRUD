<?php
include('cors.php');
include('bd.php');

$array = array();
$modelo = new Conexion();
$db = $modelo->getConnection();
$sql = 'Select * from enterprises';
$query = $db->prepare($sql);
$query->execute();

    while($fila = $query->fetch()){
        $array[] = array(
            "id" => $fila['id'],
            "name" => $fila['name']
        );
    }
    $json = json_encode($array);
    echo $json;
?>