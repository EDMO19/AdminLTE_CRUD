<?php
include('cors.php');
include('bd.php');

$array=array();
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$pass = $data['pass'];

$modelo = new Conexion();
$db = $modelo->getConnection();
$sql = "Select * from usuario where email = '$email' and pass = '$pass'";
$query = $db->prepare($sql);
$query->execute();

    while($fila = $query->fetch()){
        $array[] = array(
            "id"=>$fila['id'],
            "email"=>$fila['email'],
            "pass"=>$fila['pass']
        );
    }

    $json = json_encode($array);

    echo $json;

?>