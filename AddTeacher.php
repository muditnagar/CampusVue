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
$ps=$c->prepare("select * from professor where teachr_id=?");
$ps->bindParam(1,$userId);
$ps->execute();
$row=$ps->fetch(PDO::FETCH_ASSOC);
if($row)
{
print"{";
print"\"success\":\"false\"";
print"}";
}
else
{
$ps=$c->prepare("insert into logindetails (username,user_password,role) values(?,?,?)");
$ps->bindParam(1,$userId);
$ps->bindParam(2,$password);
$ps->bindParam(3,$role);
$ps->execute();

$ps=$c->prepare("insert into professor (teachr_id,professor_name,gender,college_name,department_name,date_of_birth,date_of_joining,designation,salary,contact_number,address) values(?,?,?,?,?,?,?,?,?,?,?)");
$ps->bindParam(1,$userId);
$ps->bindParam(2,$username);
$ps->bindParam(3,$gender);
$ps->bindParam(4,$college);
$ps->bindParam(5,$department);
$ps->bindParam(6,$dateOfBirth);
$ps->bindParam(7,$dateOfJoining);
$ps->bindParam(8,$designation);
$ps->bindParam(9,$salary);
$ps->bindParam(10,$contactNumber);
$ps->bindParam(11,$address);
$ps->execute();
print"{";
print"\"success\":\"true\"";
print"}";
}
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