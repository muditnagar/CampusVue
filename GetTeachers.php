<?php
session_start();
if($_SESSION)
{

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$rs=$c->query("select * from professor order by professor_name");
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
print "\"id\": \"".$row["teachr_id"]."\",";
print "\"name\":\"".$row["professor_name"]."\",";
print "\"gender\": \"".$row["gender"]."\",";
print "\"collegeName\": \"".$row["college_name"]."\",";
print "\"department\":\"".$row["department_name"]."\",";
print "\"dateOfBirth\":\"".$row["date_of_birth"]."\",";
print "\"dateOfJoining\":\"".$row["date_of_joining"]."\",";
print "\"designation\":\"".$row["designation"]."\",";
print "\"salary\":".$row["salary"].",";
print "\"contactNumber\":\"".$row["contact_number"]."\",";
print "\"address\":\"".$row["address"]."\",";
$r=$c->query("select user_password , role from logindetails where username='".$row["teachr_id"]."'");
foreach($r as $w)
{
print "\"password\":\"".$w["user_password"]."\",";
print "\"role\":\"".$w["role"]."\"";
}
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