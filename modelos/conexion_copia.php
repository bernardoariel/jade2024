<?php

class Conexion{

	static public function conectar(){

		$link = new PDO("mysql:host=jade_db;dbname=jade", "", "");

		$link->exec("set names utf8");

		return $link;

	}

	static public function conectarEnlace(){
		
		try{

			$link = new PDO("mysql:host=;dbname=",
			 	            "",
			 	            "");
			
			$link->exec("set names utf8");

			$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			return $link;
			// return null;
		
		}catch(Exception $error){

			// echo "ERROR: " .$error->getMessage() ."<br>";
			return null;
			
		}
		
	
	}


} 