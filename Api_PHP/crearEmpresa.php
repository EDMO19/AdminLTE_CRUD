<?php
include('cors.php');
include('bd.php');

$data = json_decode(file_get_contents("php://input"),true);
$name = $data['name'];

    $modelo = new Conexion();
    $db = $modelo->getConnection();
    $sql = "Insert into enterprises(name) values('$name')";
    $query = $db->prepare($sql);
    $query->execute();

    echo $query;

?>