<?php
$host= "localhost";
$username= "root";
$pass= "";
$db="biblioteca";

$conexion=mysqli_connect($host,$username,$pass,$db);
if(!$conexion){
    die("Problemas para conectar". mysqli_error($conexion));
}
?>