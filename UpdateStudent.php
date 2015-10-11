<?php
session_start();
if($_SESSION)
{

$enrollmentNumber=$_GET["enrollmentNumber"];
$name=$_GET["name"];
$department=$_GET["department"];
$gender=$_GET["gender"];
$dateOfBirth=$_GET["dateOfBirth"];
$yearOfJoining=$_GET["yearOfJoining"];
$college=$_GET["college"];
$contactNumber=$_GET["contactNumber"];
$currentYear=$_GET["currentYear"];
$semester=$_GET["semester"];
$address=$_GET["address"];
$yearOfPassing=$_GET["yearOfPassing"];
$collegeID=$_GET["collegeID"];

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$ps=$c->prepare("update student set college_id=?,student_name=?,gender=?,date_of_birth=?,department_name=?,semester=?,current_year=?,year_of_joining=?,year_of_complition=?,college_name=?,contact_number=?,address=? where enrollment_number=?");
$ps->bindParam(1,$collegeID);
$ps->bindParam(2,$name);
$ps->bindParam(3,$gender);
$ps->bindParam(4,$dateOfBirth);
$ps->bindParam(5,$department);
$ps->bindParam(6,$semester);
$ps->bindParam(7,$currentYear);
$ps->bindParam(8,$yearOfJoining);
$ps->bindParam(9,$yearOfPassing);
$ps->bindParam(10,$college);
$ps->bindParam(11,$contactNumber);
$ps->bindParam(12,$address);
$ps->bindParam(13,$enrollmentNumber);
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