function saveSecurityOptions()
{
var x=0;
var usernameErrorIcon=document.getElementById("usernameErrorIcon");
var securityQuestionErrorIcon=document.getElementById("securityQuestionErrorIcon");
var securityAnswerErrorIcon=document.getElementById("securityAnswerErrorIcon");
var newPasswordErrorIcon=document.getElementById("newPasswordErrorIcon");
var confirmPasswordErrorIcon=document.getElementById("confirmPasswordErrorIcon");
usernameErrorIcon.style.display="none";
securityQuestionErrorIcon.style.display="none";
securityAnswerErrorIcon.style.display="none";
newPasswordErrorIcon.style.display="none";
confirmPasswordErrorIcon.style.display="none";

var username=document.getElementById("username");
var securityQuestion=document.getElementById("securityQuestion");
var securityAnswer=document.getElementById("securityAnswer");
var newPassword=document.getElementById("newPassword");
var confirmPAssword=document.getElementById("confirmPassword");

if(username.value.length==0)
{
usernameErrorIcon.style.display="inline";
usernameErrorIcon.title="Enter a Username";
x++;
}

if(securityQuestion.selectedIndex==0)
{
securityQuestionErrorIcon.style.display="inline";
securityQuestionErrorIcon.title="Select a Security Question";
x++;
}
if(securityAnswer.value.length==0)
{
securityAnswerErrorIcon.style.display="inline";
securityAnswerErrorIcon.title="Enter a Security answer";
x++;
}
if(newPassword.value.length==0)
{
newPasswordErrorIcon.style.display="inline";
newPasswordErrorIcon.title="please Enter a Password";
x++;
}
if(newPassword.value.length<6)
{
newPasswordErrorIcon.style.display="inline";
newPasswordErrorIcon.title="Password must be atlest of 6 Characters";
x++;
}
if(newPassword.value.localeCompare(confirmPassword.value) && confirmPassword.value.length>0)
{
newPasswordErrorIcon.style.display="none";
confirmPasswordErrorIcon.style.display="inline";
confirmPasswordErrorIcon.title="Password didn,t Match";
x++;
}
if(x==0)
{
var url='ResetPassword.php?securityQuestion='+securityQuestion.options[securityQuestion.selectedIndex].text+'&securityAnswer='+securityAnswer.value+'&password='+newPassword.value+'&username='+username.value+'';
var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");

if((result.success).localeCompare("true")==0) 
{
alert("Your Password has been Reset");
window.location.href = "http://localhost:9090/CampusVue/Index.html";
}

if((result.success).localeCompare("false")==0) 
{
if((result.username).localeCompare("false")==0) 
{
usernameErrorIcon.style.display="inline";
usernameErrorIcon.title="Username doesnot exist";
}
if((result.username).localeCompare("true")==0) 
{
if((result.securityQuestion).localeCompare("false")==0) 
{
securityQuestionErrorIcon.style.display="inline";
securityQuestionErrorIcon.title="Security Question didn't match";
}
if((result.securityQuestion).localeCompare("true")==0) 
{
if((result.securityAnswer).localeCompare("false")==0) 
{
securityAnswerErrorIcon.style.display="inline";
securityAnswerErrorIcon.title="Security Answer didn't match";
}
}}}
}
};
ax.send();
}
}



