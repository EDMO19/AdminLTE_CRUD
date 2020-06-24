<?php
include('cors.php');
include('bd.php');

$data = json_decode(file_get_contents("php://input"),true);
$name = $data['name'];
$salary = $data['salary'];
$id_enterprise=$data['id_enterprise'];

    $modelo = new Conexion();
    $db = $modelo->getConnection();
    $sql = "Insert into job(name,salary, id_enterprise) values('$name','$salary, '$id_enterprise')";
    $query = $db->prepare($sql);
    $query->execute();

    echo $query;

?>