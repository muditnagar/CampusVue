
function teacherInfo()
{
var form=document.getElementById("actionForm");
form.action="TeachersListView.php";
form.submit();
}

function studentInfo()
{
var form=document.getElementById("actionForm");
form.action="StudentsListView.php";
form.submit();
}


function accountSecurity()
{
var form=document.getElementById("actionForm");
form.action="AccountSecurity.php";
form.submit();
}

function logout()
{
var form=document.getElementById("actionForm");
form.action="logout.php";
form.submit();
}