<?php

	$salt = "AMAG20";
	$usuario = array();
	if(isset($_POST["nombre"]) && isset($_POST["edad"])&& isset($_POST["departamento"]) && isset($_POST["ciudad"]))
	{
		$usuario["nombre"]  =   $_POST["nombre"];
		$usuario["edad"]=   $_POST["edad"];
		$usuario["departamento"] =   $_POST["departamento"];
		$usuario["ciudad"]  =   $_POST["ciudad"];
	}
	$usuario["contrasena"] =   md5($salt.$_POST["contrasena"]);

	echo json_encode($usuario);
?>