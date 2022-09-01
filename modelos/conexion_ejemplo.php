<?php

class Conexion{

	static public function conectar(){

		$link = new PDO("mysql:host=localhost;dbname=NOMBRE_BD",
			            "USUARIO",
			            "PASSWORD");

		$link->exec("set names utf8");

		return $link;

	}
	
	static public function conectarEnlace(){
			
			try{

				$link = new PDO("mysql:host=66.97.41.81;dbname=NOMBRE_BD",
								 "USUARIO",
								 "PASSWORD");
		
				$link->exec("set names utf8");
	
				$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
				return $link;
			
			}catch(Exception $error){
	
				return null;
				
			}
			

	}
	

}