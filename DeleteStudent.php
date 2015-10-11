<?php
session_start();
if($_SESSION)
{

$enrollmentNumber=$_GET["enrollmentNumber"];
try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("delete from student where enrollment_number=?");
$ps->bindParam(1,$enrollmentNumber);
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