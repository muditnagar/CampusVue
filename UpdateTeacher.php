<?php
session_start();
if($_SESSION)
{

$userId=$_GET["id"];
$username=$_GET["name"];
$department=$_GET["department"];
$gender=$_GET["gender"];
$dateOfBirth=$_GET["dateOfBirth"];
$dateOfJoining=$_GET["dateOfJoining"];
$college=$_GET["college"];
$contactNumber=$_GET["contactNumber"];
$college=$_GET["college"];
$designation=$_GET["designation"];
$salary=$_GET["salary"];
$address=$_GET["address"];
$role=$_GET["role"];
$password=$_GET["password"];

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("update professor SET professor_name=?,gender=?,college_name=?,department_name=?,date_of_birth=?,date_of_joining=?,designation=?,salary=?,contact_number=?,address=? where teachr_id=?");

$ps->bindParam(1,$username);
$ps->bindParam(2,$gender);
$ps->bindParam(3,$college);
$ps->bindParam(4,$department);
$ps->bindParam(5,$dateOfBirth);
$ps->bindParam(6,$dateOfJoining);
$ps->bindParam(7,$designation);
$ps->bindParam(8,$salary);
$ps->bindParam(9,$contactNumber);
$ps->bindParam(10,$address);
$ps->bindParam(11,$userId);
$ps->execute();

$ps=$c->prepare("update logindetails SET user_password=?,role=? where username=? ");
$ps->bindParam(1,$password);
$ps->bindParam(2,$role);
$ps->bindParam(3,$userId);
$ps->execute();

print "{";
print "\"success\":\"true\"";
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