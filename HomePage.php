<?php
session_start();
if($_SESSION)
{
?>
<!doctype html>
<html>
<head>
<title>Admin Home Page</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<?php
if(strcmp($_SESSION["role"],"admin")==0) print "<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/AdminHomePage.css\">";
else print "<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/NonAdminHomePage.css\">";
?>
<script type="text/javascript" src="js/HomePage.js"></script>
</head>
<body>
<div id='container'>
<div id='innerContainer'>
<div id='logocontainer'><div id='softwareLogoDivision'></div><div id='softwareTitleDivision'><h1>Campus Vue<h1></div></div>
<div id='welcomeUserDivision'><center><span id='welcomeUserSpan1'>Welcome :</span><span id='welcomeUserSpan2'> <?php print $_SESSION["username"]; ?></span></center></div>
<div id='teacherButtonDivision'><img src='images/teacherIcon.png' id='teacherButtonImage' onclick='teacherInfo()'><div class='textSpan'><center><span>Teacher Info</span></center></div></div>
<div id='studentButtonDivision'><img src='images/studentIcon.png' id='studentButtonImage' onclick='studentInfo()'><div class='textSpan'><center><span>Student Info</span></center></div></div>
<div id='updateProfileButtonDivision'><img src='images/securityIcon.png' id='updateProfileButtonImage' onclick='accountSecurity()'><div class='textSpan'><center><span>Security</span></center></div></div>
<div id='logoutButtonDivision'><img src='images/logoutIcon.png' id='logoutButtonImage' onclick='logout()'><div class='textSpan'><center><span>Logout</span></center></div></div>
</div>
</div>
<form action='' id='actionForm' method='POST'></form>
</body>
</html>

<?php
}
else
{
include 'index.html';
}
?>