<?php
session_start();
if($_SESSION)
{

$id=$_GET["id"];
try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("delete from professor where teachr_id=?");
$ps->bindParam(1,$id);
$ps->execute();
$ps=$c->prepare("delete from logindetails where username=?");
$ps->bindParam(1,$id);
$ps->execute();

$c=null;
print"{";
print"\"success\":\"true\"";
print"}";
}catch(PDOException $pe)
{
print $pe->getMessage();
}
catch(Exception $e)
{
print $e->getMessage();
}

}
else
{
include 'index.html';
}
?>