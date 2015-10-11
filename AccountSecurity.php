<?php
session_start();
if($_SESSION)
{
?>

<!doctype html>
<head>
<title>Account Security</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="styles/AccountSecurity.css" />
<script type="text/javascript" src="js/AccountSecurity.js"></script>
</head>
<body>
<div id='container'>
<input type='text' id='usernameInputBox' value='<?php print $_SESSION["username"]; ?>' hidden/>
<div id='logocontainer'><div id='softwareLogoDivision'></div><div id='softwareTitleDivision'><h1>Campus Vue<h1></div></div>
<div id='windowCloseButtonDivision'><a href='HomePage.php'><img id='windowCloseButton' src='images/closeWindowIcon.png' class='moduleIcon' onClick='closeAccountSecurityPage()'/></a></div>

<div id='detailsDivision'>

<div id='securityQuestionLabelDivision'>Security Question :</div><div id='securityQuestionInputDivision'>
<select name='securityQuestion' id='securityQuestion'>
<option value='-1'>&lt;Select&gt;</option>
<option value='What is your Nationality?'>What is your Nationality?</option>
<option value="What is your pet's name?">What is your pet's name?</option>
<option value='What is Your postal code?'>What is Your postal code?</option>
<option value='What is Your first Mobile number?'>What is Your first Mobile number?</option>
<option value='What is Your first school name?'>What is Your first school name?</option>
<option value='What is your BirthDay?'>What is your BirthDay?</option>
</select></div><div id='securityQuestionErrorIconDivision'><img src='images/errorIcon.png' id='securityQuestionErrorIcon'/></div>


<div id='securityAnswerLabelDivision'>Security Answer : </div><div id='securityAnswerInputDivision'><input type="text" name='securityAnswer' id='securityAnswer' size='32'></div><div id='securityAnswerErrorIconDivision'><img src='images/errorIcon.png' id='securityAnswerErrorIcon'/></div>
<div id='newPasswordLabelDivision'>New Password : </div><div id='newPasswordInputDivision'><input type="password" name='newPassword' id='newPassword' size='32'></div><div id='newPasswordErrorIconDivision'><img src='images/errorIcon.png' id='newPasswordErrorIcon'/></div>
<div id='confirmPasswordLabelDivision'>Confirm Password : </div><div id='confirmPasswordInputDivision'><input type="password" name='confirmPassword' id='confirmPassword' size='32'></div><div id='confirmPasswordErrorIconDivision'><img src='images/errorIcon.png' id='confirmPasswordErrorIcon'/></div>
<div id='saveButtonDivision'><button type='button' onclick='saveSecurityOptions()'>Save</button></div>
</div>
</div>
</body>
</html>



<?php
}
else
{
include 'index.html';
}
?>