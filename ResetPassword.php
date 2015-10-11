<?php
$username=$_GET["username"];
$securityQuestion=$_GET["securityQuestion"];
$securityAnswer=$_GET["securityAnswer"];
$password=$_GET["password"];

try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=educationmanagerdb","educationmaster","educationmaster");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("select * from accountsecurity where username=?");
$ps->bindParam(1,$username);
$ps->execute();
$row=$ps->fetch(PDO::FETCH_ASSOC);
if($row)
{
$ps=$c->prepare("select * from accountsecurity where username=? and securtiy_question=?");
$ps->bindParam(1,$username);
$ps->bindParam(2,$securityQuestion);
$ps->execute();
$row=$ps->fetch(PDO::FETCH_ASSOC);
if($row)
{
$ps=$c->prepare("select * from accountsecurity where username=? and securtiy_question=? and security_answer=?");
$ps->bindParam(1,$username);
$ps->bindParam(2,$securityQuestion);
$ps->bindParam(3,$securityAnswer);
$ps->execute();
$row=$ps->fetch(PDO::FETCH_ASSOC);
if($row)
{
$ps=$c->prepare("update logindetails SET user_password=? WHERE username=?");
$ps->bindParam(1,$password);
$ps->bindParam(2,$username);
$ps->execute();
print"{";
print"\"success\":\"true\",";
print"\"username\":\"true\",";
print"\"securityQuestion\":\"true\",";
print"\"securityAnswer\":\"true\"";
print"}";
}
else
{
print"{";
print"\"success\":\"false\",";
print"\"username\":\"true\",";
print"\"securityQuestion\":\"true\",";
print"\"securityAnswer\":\"false\"";
print"}";
}

}
else
{
print"{";
print"\"success\":\"false\",";
print"\"username\":\"true\",";
print"\"securityQuestion\":\"false\",";
print"\"securityAnswer\":\"false\"";
print"}";
}
}
else
{
print"{";
print"\"success\":\"false\",";
print"\"username\":\"false\",";
print"\"securityQuestion\":\"false\",";
print"\"securityAnswer\":\"false\"";
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


?>