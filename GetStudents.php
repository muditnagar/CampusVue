<?php
session_start();
if($_SESSION)
{

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$rs=$c->query("select * from student order by student_name");
$applyComma=false;
print "[";
foreach($rs as $row)
{
if($applyComma)
{
print ",";
}
$applyComma=true;
print "{";
print "\"enrollmentNumber\": \"".$row["enrollment_number"]."\",";
print "\"collegeID\":\"".$row["college_id"]."\",";
print "\"name\": \"".$row["student_name"]."\",";
print "\"gender\": \"".$row["gender"]."\",";
print "\"dateOfBirth\":\"".$row["date_of_birth"]."\",";
print "\"department\":\"".$row["department_name"]."\",";
print "\"semester\":\"".$row["semester"]."\",";
print "\"currentYear\":\"".$row["current_year"]."\",";
print "\"yearOfJoining\":".$row["year_of_joining"].",";
print "\"yearOfPassing\":\"".$row["year_of_complition"]."\",";
print "\"college\":\"".$row["college_name"]."\",";
print "\"contactNumber\":\"".$row["contact_number"]."\",";
print "\"address\":\"".$row["address"]."\"";
print "}";
}
print "]";
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