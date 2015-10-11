function login()
{
var usernameErrorIcon=document.getElementById("usernameErrorIcon");
var passwordErrorIcon=document.getElementById("passwordErrorIcon");
passwordErrorIcon.style.display="none";
passwordErrorIcon.title=" ";
usernameErrorIcon.style.display="none";
usernameErrorIcon.title=" ";
validateLogin();
}

function validateLogin()
{
var x=0;
var password=document.getElementById("password");
var username=document.getElementById("username");
var loginForm=document.getElementById("loginForm");
var usernameErrorIcon=document.getElementById("usernameErrorIcon");
var passwordErrorIcon=document.getElementById("passwordErrorIcon");
if(password.value.length==0)
{
passwordErrorIcon.style.display="inline";
passwordErrorIcon.title="Password required";
x++;
}

if(username.value.length==0)
{
usernameErrorIcon.style.display="inline";
usernameErrorIcon.title="Username required";
x++;
}

if(x==0)
{
var ax=new XMLHttpRequest();
var url='Login.php?username='+username.value+'&password='+password.value+'';
ax.open('GET',url,true);
ax.onreadystatechange=function()
{
if(ax.readyState===4 && ax.status===200)
{
var data=eval("("+ax.responseText+")");
if((data.success).localeCompare("true")==0)
{
loginForm.action="HomePage.php";
loginForm.submit();
}
else 
{
passwordErrorIcon.style.display="inline";
passwordErrorIcon.title="Username or password incorrect";
}
}
};
ax.send();
}
}

function clearSession()
{
ax=new XMLHttpRequest();
var url='Logout.php';
ax.open('GET',url,true);
ax.onreadystatechange=function()
{
};
ax.send();
}

window.addEventListener("load",clearSession);