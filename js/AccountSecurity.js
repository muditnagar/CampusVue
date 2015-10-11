function saveSecurityOptions()
{
var x=0;
var username=document.getElementById("usernameInputBox").value;
var securityQuestionErrorIcon=document.getElementById("securityQuestionErrorIcon");
var securityAnswerErrorIcon=document.getElementById("securityAnswerErrorIcon");
var newPasswordErrorIcon=document.getElementById("newPasswordErrorIcon");
var confirmPasswordErrorIcon=document.getElementById("confirmPasswordErrorIcon");
securityQuestionErrorIcon.style.display="none";
securityAnswerErrorIcon.style.display="none";
newPasswordErrorIcon.style.display="none";
confirmPasswordErrorIcon.style.display="none";


var securityQuestion=document.getElementById("securityQuestion");
var securityAnswer=document.getElementById("securityAnswer");
var newPassword=document.getElementById("newPassword");
var confirmPAssword=document.getElementById("confirmPassword");

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
alert(username);
var url='UpdateAccountSecurity.php?securityQuestion='+securityQuestion.options[securityQuestion.selectedIndex].text+'&securityAnswer='+securityAnswer.value+'&password='+newPassword.value+'&username='+username+'';
alert(url);
var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0) 
{
alert("Information Updated");
window.location.href = "http://localhost:9090/CampusVue/HomePage.php";
}
}
};
ax.send();
}
}



