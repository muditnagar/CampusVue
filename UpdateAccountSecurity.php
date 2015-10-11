<?php
session_start();
if($_SESSION)
{

$securityQuestion=$_GET["securityQuestion"];
$securityAnswer=$_GET["securityAnswer"];
$password=$_GET["password"];
$username=$_GET["username"];

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$ps=$c->prepare("insert into accountsecurity (username,securtiy_question,security_answer) values(?,?,?)");
$ps->bindParam(1,$username);
$ps->bindParam(2,$securityQuestion);
$ps->bindParam(3,$securityAnswer);
$ps->execute();

$ps=$c->prepare("update logindetails SET user_password=? where username=?");
$ps->bindParam(1,$password);
$ps->bindParam(2,$username);
$ps->execute();

print"{";
print"\"success\":\"true\"";
print"}";

$c=null;
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