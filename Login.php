<?php

$username=$_GET["username"];
$password=$_GET["password"];
$sessionId=uniqid();

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("select role from logindetails where username=? and user_password=?");
$ps->bindParam(1,$username);
$ps->bindParam(2,$password);
$ps->execute();
$row=$ps->fetch(PDO::FETCH_ASSOC);
if($row["role"])
{
session_start();
$_SESSION["username"]=$username;
$_SESSION["sessionId"]=$sessionId;
if(strcmp($row["role"],"A")==0)
{
$_SESSION["role"]="admin";
print"{";
print"\"success\":\"true\",";
print"\"role\":\"admin\"";
print"}";
}
else
{
$_SESSION["role"]="nonadmin";
print"{";
print"\"success\":\"true\",";
print"\"role\":\"nonadmin\"";
print"}";
}
}
else
{
print"{";
print"\"success\":\"false\"";
print"}";
}
}catch(PDOException $pdoe)
{
$pdoe->getMessage();
}
catch(Exception $e)
{
$e->getMessage();
}

?>