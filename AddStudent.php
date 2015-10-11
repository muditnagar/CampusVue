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
$ps=$c->prepare("select * from student where enrollment_number=?");
$ps->bindParam(1,$enrollmentNumber);
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
$ps=$c->prepare("insert into student (enrollment_number,college_id,student_name,gender,date_of_birth,department_name,semester,current_year,year_of_joining,year_of_complition,college_name,contact_number,address) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
$ps->bindParam(1,$enrollmentNumber);
$ps->bindParam(2,$collegeID);
$ps->bindParam(3,$name);
$ps->bindParam(4,$gender);
$ps->bindParam(5,$dateOfBirth);
$ps->bindParam(6,$department);
$ps->bindParam(7,$semester);
$ps->bindParam(8,$currentYear);
$ps->bindParam(9,$yearOfJoining);
$ps->bindParam(10,$yearOfPassing);
$ps->bindParam(11,$college);
$ps->bindParam(12,$contactNumber);
$ps->bindParam(13,$address);
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