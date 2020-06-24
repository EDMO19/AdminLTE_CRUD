<?php
    class Conexion {
        public function getConnection(){
            $host = "localhost";
            $db = "company";
            $user = "root";
            $pass = "root";

            $db = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);

            return $db;
        }
    }
?>