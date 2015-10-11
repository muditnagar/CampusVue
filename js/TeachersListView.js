var teachersCollection=null;
var teachersGridSelectedRow=null;
var teachersGridSelectedRowIndex=-1;
window.addEventListener("load",initComponents);


function getTeachers()
{
var ax=new XMLHttpRequest();
ax.open('GET','GetTeachers.php',true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
teachersCollection=eval("("+ax.responseText+")");
populateTeachersGrid();
}
};
ax.send();
}



function populateTeachersGrid()
{
var teachersGrid=document.getElementById("teachersGrid");
var teachersGridBody=teachersGrid.getElementsByTagName("tbody")[0];
var x=0;
var row,cell;
while(x<teachersCollection.length)
{
row=teachersGridBody.insertRow(x);
(function(rr,ii){
row.addEventListener("click",function(){
teachersGridRowClicked(rr,ii);
})})(row,x);
cell=row.insertCell(0);
cell.innerHTML=(x+1);
cell=row.insertCell(1);
cell.innerHTML=teachersCollection[x].id;
cell=row.insertCell(2);
cell.innerHTML=teachersCollection[x].name;
cell=row.insertCell(3);
cell.innerHTML=teachersCollection[x].department;
x++;
}
}

function teachersGridRowClicked(row,rowIndex)
{
if(row==teachersGridSelectedRow) return;
if(teachersGridSelectedRow!=null)
{
teachersGridSelectedRow.className="notSelectedRow";
}
row.className="selectedRow";
teachersGridSelectedRow=row;
teachersGridSelectedRowIndex=rowIndex;
updateDetailsPanel();
}

function updateDetailsPanel()
{
var userRoleSpan=document.getElementById("userRoleSpan");

var selectedTeachersId=document.getElementById("selectedTeachersId");
var selectedTeachersName=document.getElementById("selectedTeachersName");
var selectedTeachersDepartment=document.getElementById("selectedTeachersDepartment");
var selectedTeachersGender=document.getElementById("selectedTeachersGender");
var selectedTeachersDateOfBirth=document.getElementById("selectedTeachersDateOfBirth");
var selectedTeachersDateOfJoining=document.getElementById("selectedTeachersDateOfJoining");
if(userRoleSpan.innerHTML.localeCompare("admin")==0)
{
var selectedTeachersSalary=document.getElementById("selectedTeachersSalary");
}
var selectedTeachersDesignation=document.getElementById("selectedTeachersDesignation");
var selectedTeachersContactNumber=document.getElementById("selectedTeachersContactNumber");
var selectedTeachersCollege=document.getElementById("selectedTeachersCollege");
var selectedTeachersAddress=document.getElementById("selectedTeachersAddress");

selectedTeachersId.innerHTML=teachersCollection[teachersGridSelectedRowIndex].id;
selectedTeachersName.innerHTML=teachersCollection[teachersGridSelectedRowIndex].name;
selectedTeachersDepartment.innerHTML=teachersCollection[teachersGridSelectedRowIndex].department;
selectedTeachersGender.innerHTML=teachersCollection[teachersGridSelectedRowIndex].gender;
selectedTeachersDateOfBirth.innerHTML=teachersCollection[teachersGridSelectedRowIndex].dateOfBirth;
selectedTeachersDateOfJoining.innerHTML=teachersCollection[teachersGridSelectedRowIndex].dateOfJoining;
if(userRoleSpan.innerHTML.localeCompare("admin")==0)
{
selectedTeachersSalary.innerHTML=teachersCollection[teachersGridSelectedRowIndex].salary;
}
selectedTeachersDesignation.innerHTML=teachersCollection[teachersGridSelectedRowIndex].designation;
selectedTeachersContactNumber.innerHTML=teachersCollection[teachersGridSelectedRowIndex].contactNumber;
selectedTeachersCollege.innerHTML=teachersCollection[teachersGridSelectedRowIndex].collegeName;
selectedTeachersAddress.innerHTML=teachersCollection[teachersGridSelectedRowIndex].address;
}

function showAddTeacherWindow()
{
var teachersAddWindowMask=document.getElementById("teachersAddWindowMask");
teachersAddWindowMask.style.visibility="visible";
hideErrorIcons();
}

function hideErrorIcons()
{
var userIdErrorIcon=document.getElementById("userIDErrorIcon");
var usernameErrorIcon=document.getElementById("usernameErrorIcon");
var departmentErrorIcon=document.getElementById("departmentErrorIcon");
var genderErrorIcon=document.getElementById("genderErrorIcon");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIcon");
var dateOfJoiningErrorIcon=document.getElementById("dateOfJoiningErrorIcon");
var salaryErrorIcon=document.getElementById("salaryErrorIcon");
var designationErrorIcon=document.getElementById("designationErrorIcon");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIcon");
var collegeErrorIcon=document.getElementById("collegeErrorIcon");
var addressErrorIcon=document.getElementById("addressErrorIcon");
var roleErrorIcon=document.getElementById("roleErrorIcon");
var passwordErrorIcon=document.getElementById("passwordErrorIcon");
userIdErrorIcon.style.display="none";
usernameErrorIcon.style.display="none";
departmentErrorIcon.style.display="none";
genderErrorIcon.style.display="none";
dateOfBirthErrorIcon.style.display="none";
dateOfJoiningErrorIcon.style.display="none";
salaryErrorIcon.style.display="none";
designationErrorIcon.style.display="none";
contactNumberErrorIcon.style.display="none";
collegeErrorIcon.style.display="none";
addressErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
passwordErrorIcon.style.display="none";
}

function hideEditErrorIcons()
{
var usernameErrorIcon=document.getElementById("usernameErrorIconEdit");
var departmentErrorIcon=document.getElementById("departmentErrorIconEdit");
var genderErrorIcon=document.getElementById("genderErrorIconEdit");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIconEdit");
var dateOfJoiningErrorIcon=document.getElementById("dateOfJoiningErrorIconEdit");
var salaryErrorIcon=document.getElementById("salaryErrorIconEdit");
var designationErrorIcon=document.getElementById("designationErrorIconEdit");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIconEdit");
var collegeErrorIcon=document.getElementById("collegeErrorIconEdit");
var addressErrorIcon=document.getElementById("addressErrorIconEdit");
var roleErrorIcon=document.getElementById("roleErrorIconEdit");
var passwordErrorIcon=document.getElementById("passwordErrorIconEdit");
usernameErrorIcon.style.display="none";
departmentErrorIcon.style.display="none";
genderErrorIcon.style.display="none";
dateOfBirthErrorIcon.style.display="none";
dateOfJoiningErrorIcon.style.display="none";
salaryErrorIcon.style.display="none";
designationErrorIcon.style.display="none";
contactNumberErrorIcon.style.display="none";
collegeErrorIcon.style.display="none";
addressErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
passwordErrorIcon.style.display="none";
}

function initComponents()
{
getTeachers();
}

function closeAddTeacherWindow()
{
var teachersAddWindowMask=document.getElementById("teachersAddWindowMask");
teachersAddWindowMask.style.visibility="hidden";
var userId=document.getElementById("userID");
var username=document.getElementById("username");
var department=document.getElementById("department");
var male=document.getElementById("male");
var female=document.getElementById("female");
var dateOfBirth=document.getElementById("dateOfBirth");
var dateOfJoining=document.getElementById("dateOfJoining");
var college=document.getElementById("college");
var contactNumber=document.getElementById("contactNumber");
var designation=document.getElementById("designation");
var salary=document.getElementById("salary");
var address=document.getElementById("address");
var admin=document.getElementById("admin");
var nonAdmin=document.getElementById("nonAdmin");
var password=document.getElementById("password");
userId.value=null;
username.value=null;
department.selectedIndex=0;
male.checked=false;
female.checked=false;
dateOfBirth.value=null;
dateOfJoining.value=null;
college.value=null;
contactNumber.value=null;
designation.value=null;
salary.value=null;
address.value=null;
admin.checked=false;
nonAdmin.checked=false;
password.value=null;
}

function showEditTeacherWindow()
{
if(teachersGridSelectedRowIndex==-1)
{
alert("Please select the record to be Edited");
}
else
{
var teachersEditWindowMask=document.getElementById("teachersEditWindowMask");
teachersEditWindowMask.style.visibility="visible";
var userId=document.getElementById("userIDSpan");
var username=document.getElementById("usernameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var dateOfJoining=document.getElementById("dateOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var designation=document.getElementById("designationEdit");
var salary=document.getElementById("salaryEdit");
var address=document.getElementById("addressEdit");
var admin=document.getElementById("adminEdit");
var nonAdmin=document.getElementById("nonAdminEdit");
var password=document.getElementById("passwordEdit");
hideEditErrorIcons();

userId.innerHTML=teachersCollection[teachersGridSelectedRowIndex].id;
username.value=teachersCollection[teachersGridSelectedRowIndex].name;
department.value=teachersCollection[teachersGridSelectedRowIndex].department;
if(teachersCollection[teachersGridSelectedRowIndex].gender.localeCompare("M")==0)
{
male.checked=true;
}
else
{
female.checked=true;
}
dateOfBirth.value=teachersCollection[teachersGridSelectedRowIndex].dateOfBirth;
dateOfJoining.value=teachersCollection[teachersGridSelectedRowIndex].dateOfJoining;
salary.value=teachersCollection[teachersGridSelectedRowIndex].salary;
designation.value=teachersCollection[teachersGridSelectedRowIndex].designation;
contactNumber.value=teachersCollection[teachersGridSelectedRowIndex].contactNumber;
college.value=teachersCollection[teachersGridSelectedRowIndex].collegeName;
address.value=teachersCollection[teachersGridSelectedRowIndex].address;
if(teachersCollection[teachersGridSelectedRowIndex].role.localeCompare("A")==0)
{
admin.checked=true;
}
else
{
nonAdmin.checked=true;
}
password.value=teachersCollection[teachersGridSelectedRowIndex].password;
}
}



function closeEditTeacherWindow()
{
var teachersEditWindowMask=document.getElementById("teachersEditWindowMask");
teachersEditWindowMask.style.visibility="hidden";
var userId=document.getElementById("userIDSpan");
var username=document.getElementById("usernameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var dateOfJoining=document.getElementById("dateOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var designation=document.getElementById("designationEdit");
var salary=document.getElementById("salaryEdit");
var address=document.getElementById("addressEdit");
var admin=document.getElementById("adminEdit");
var nonAdmin=document.getElementById("nonAdminEdit");
var password=document.getElementById("passwordEdit");
userId.innerHTML=" ";
username.value=null;
department.selectedIndex=0;
male.checked=false;
female.checked=false;
dateOfBirth.value=null;
dateOfJoining.value=null;
college.value=null;
contactNumber.value=null;
designation.value=null;
salary.value=null;
address.value=null;
admin.checked=false;
nonAdmin.checked=false;
password.value=null;
}

function addTeacher()
{
var x=0;
var userIdErrorIcon=document.getElementById("userIDErrorIcon");
var usernameErrorIcon=document.getElementById("usernameErrorIcon");
var departmentErrorIcon=document.getElementById("departmentErrorIcon");
var genderErrorIcon=document.getElementById("genderErrorIcon");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIcon");
var dateOfJoiningErrorIcon=document.getElementById("dateOfJoiningErrorIcon");
var salaryErrorIcon=document.getElementById("salaryErrorIcon");
var designationErrorIcon=document.getElementById("designationErrorIcon");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIcon");
var collegeErrorIcon=document.getElementById("collegeErrorIcon");
var addressErrorIcon=document.getElementById("addressErrorIcon");
var roleErrorIcon=document.getElementById("roleErrorIcon");
var passwordErrorIcon=document.getElementById("passwordErrorIcon");

var userId=document.getElementById("userID");
var username=document.getElementById("username");
var department=document.getElementById("department");
var male=document.getElementById("male");
var female=document.getElementById("female");
var dateOfBirth=document.getElementById("dateOfBirth");
var dateOfJoining=document.getElementById("dateOfJoining");
var college=document.getElementById("college");
var contactNumber=document.getElementById("contactNumber");
var designation=document.getElementById("designation");
var salary=document.getElementById("salary");
var address=document.getElementById("address");
var admin=document.getElementById("admin");
var nonAdmin=document.getElementById("nonAdmin");
var password=document.getElementById("password");
userIdErrorIcon.style.display="none";
usernameErrorIcon.style.display="none";
departmentErrorIcon.style.display="none";
genderErrorIcon.style.display="none";
dateOfBirthErrorIcon.style.display="none";
dateOfJoiningErrorIcon.style.display="none";
salaryErrorIcon.style.display="none";
designationErrorIcon.style.display="none";
contactNumberErrorIcon.style.display="none";
collegeErrorIcon.style.display="none";
addressErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
passwordErrorIcon.style.display="none";

if(userId.value.length==0)
{
userIdErrorIcon.style.display="inline";
userIdErrorIcon.title="Professor Id required";
x++;
}
if(username.value.length==0)
{
usernameErrorIcon.style.display="inline";
usernameErrorIcon.title="Professor Name required";
x++;
}
if(department.selectedIndex==0)
{
departmentErrorIcon.style.display="inline";
departmentErrorIcon.title="Select a Department";
x++;
}
if(male.checked==false && female.checked==false)
{
genderErrorIcon.style.display="inline";
genderErrorIcon.title="Gender required";
x++;
}
if(dateOfBirth.value.length==0)
{
dateOfBirthErrorIcon.style.display="inline";
dateOfBirthErrorIcon.title="Date Of Birth required";
x++;
}
if(dateOfJoining.value.length==0)
{
dateOfJoiningErrorIcon.style.display="inline";
dateOfJoiningErrorIcon.title="Joining Date required";
x++;
}
if(college.value.length==0)
{
collegeErrorIcon.style.display="inline";
collegeErrorIcon.title="College Name required";
x++;
}
if(contactNumber.value.length==0)
{
contactNumberErrorIcon.style.display="inline";
contactNumberErrorIcon.title="Contact number required";
x++;
}
if(designation.value.length==0)
{
designationErrorIcon.style.display="inline";
designationErrorIcon.title="Designation required";
x++;
}
if(salary.value.length==0)
{
salaryErrorIcon.style.display="inline";
salaryErrorIcon.title="Enter salary";
x++;
}
if(salary.validity && !salary.validity.valid)
{
salaryErrorIcon.style.display="inline";
salaryErrorIcon.title="Enter proper salary Format";
x++;
}
if(address.value.length==0)
{
addressErrorIcon.style.display="inline";
addressErrorIcon.title="Address required";
x++;
}
if(admin.checked==false && nonAdmin.checked==false)
{
roleErrorIcon.style.display="inline";
roleErrorIcon.title="Select a Role";
x++;
}
if(password.value.length==0)
{
passwordErrorIcon.style.display="inline";
passwordErrorIcon.title="Set password";
x++;
}

if(x==0)
{
var gender='M';
var role='N';
if(female.checked==true)
{
gender='F';
}
if(admin.checked==true)
{
role='A';
}
var url='AddTeacher.php?id='+userId.value+'&name='+username.value+'&department='+department.options[department.selectedIndex].text+'&gender='+gender+'&dateOfBirth='+dateOfBirth.value+'&dateOfJoining='+dateOfJoining.value+'&college='+college.value+'&contactNumber='+contactNumber.value+'&designation='+designation.value+'&salary='+salary.value+'&address='+address.value+'&role='+role+'&password='+password.value+'';
var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0)
{
alert("Record Added");
closeAddTeacherWindow();
document.getElementById("refreshPageForm").submit();
}
else
{
userIdErrorIcon.style.display="inline";
userIdErrorIcon.title="Professor Id already Exists";
}
}
};
ax.send();
}
}



function updateTeacher()
{
var x=0;
var usernameErrorIcon=document.getElementById("usernameErrorIconEdit");
var departmentErrorIcon=document.getElementById("departmentErrorIconEdit");
var genderErrorIcon=document.getElementById("genderErrorIconEdit");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIconEdit");
var dateOfJoiningErrorIcon=document.getElementById("dateOfJoiningErrorIconEdit");
var salaryErrorIcon=document.getElementById("salaryErrorIconEdit");
var designationErrorIcon=document.getElementById("designationErrorIconEdit");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIconEdit");
var collegeErrorIcon=document.getElementById("collegeErrorIconEdit");
var addressErrorIcon=document.getElementById("addressErrorIconEdit");
var roleErrorIcon=document.getElementById("roleErrorIconEdit");
var passwordErrorIcon=document.getElementById("passwordErrorIconEdit");

var userIdSpan=document.getElementById("userIDSpan");
var userId=userIdSpan.innerHTML;
var username=document.getElementById("usernameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var dateOfJoining=document.getElementById("dateOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var designation=document.getElementById("designationEdit");
var salary=document.getElementById("salaryEdit");
var address=document.getElementById("addressEdit");
var admin=document.getElementById("adminEdit");
var nonAdmin=document.getElementById("nonAdminEdit");
var password=document.getElementById("passwordEdit");
usernameErrorIcon.style.display="none";
departmentErrorIcon.style.display="none";
genderErrorIcon.style.display="none";
dateOfBirthErrorIcon.style.display="none";
dateOfJoiningErrorIcon.style.display="none";
salaryErrorIcon.style.display="none";
designationErrorIcon.style.display="none";
contactNumberErrorIcon.style.display="none";
collegeErrorIcon.style.display="none";
addressErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
roleErrorIcon.style.display="none";
passwordErrorIcon.style.display="none";


if(username.value.length==0)
{
usernameErrorIcon.style.display="inline";
usernameErrorIcon.title="Professor Name required";
x++;
}
if(department.selectedIndex==0)
{
departmentErrorIcon.style.display="inline";
departmentErrorIcon.title="Select a Department";
x++;
}
if(male.checked==false && female.checked==false)
{
genderErrorIcon.style.display="inline";
genderErrorIcon.title="Gender required";
x++;
}
if(dateOfBirth.value.length==0)
{
dateOfBirthErrorIcon.style.display="inline";
dateOfBirthErrorIcon.title="Date Of Birth required";
x++;
}
if(dateOfJoining.value.length==0)
{
dateOfJoiningErrorIcon.style.display="inline";
dateOfJoiningErrorIcon.title="Joining Date required";
x++;
}
if(college.value.length==0)
{
collegeErrorIcon.style.display="inline";
collegeErrorIcon.title="College Name required";
x++;
}
if(contactNumber.value.length==0)
{
contactNumberErrorIcon.style.display="inline";
contactNumberErrorIcon.title="Contact number required";
x++;
}
if(designation.value.length==0)
{
designationErrorIcon.style.display="inline";
designationErrorIcon.title="Designation required";
x++;
}
if(salary.value.length==0)
{
salaryErrorIcon.style.display="inline";
salaryErrorIcon.title="Enter salary";
x++;
}
if(salary.validity && !salary.validity.valid)
{
salaryErrorIcon.style.display="inline";
salaryErrorIcon.title="Enter proper salary Format";
x++;
}
if(address.value.length==0)
{
addressErrorIcon.style.display="inline";
addressErrorIcon.title="Address required";
x++;
}
if(admin.checked==false && nonAdmin.checked==false)
{
roleErrorIcon.style.display="inline";
roleErrorIcon.title="Select a Role";
x++;
}
if(password.value.length==0)
{
passwordErrorIcon.style.display="inline";
passwordErrorIcon.title="Set password";
x++;
}

if(x==0)
{
var gender='M';
var role='N';
if(female.checked==true)
{
gender='F';
}
if(admin.checked==true)
{
role='A';
}
var url='UpdateTeacher.php?id='+userId+'&name='+username.value+'&department='+department.options[department.selectedIndex].text+'&gender='+gender+'&dateOfBirth='+dateOfBirth.value+'&dateOfJoining='+dateOfJoining.value+'&college='+college.value+'&contactNumber='+contactNumber.value+'&designation='+designation.value+'&salary='+salary.value+'&address='+address.value+'&role='+role+'&password='+password.value+'';
var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0)
{
alert("Record Updated");
closeEditTeacherWindow();
document.getElementById("refreshPageForm").submit();
}
}
};
ax.send();
}
}




function deleteTeacher()
{
if(teachersGridSelectedRowIndex==-1)
{
alert("Please select the record to be deleted");
}
else
{
var m='Delete record, ID : '+teachersCollection[teachersGridSelectedRowIndex].id+' || Name : '+teachersCollection[teachersGridSelectedRowIndex].name+' ? ';
var r=confirm(m);
if(r==true)
{
var id=teachersCollection[teachersGridSelectedRowIndex].id;
var ax=new XMLHttpRequest();
var url='DeleteTeacher.php?id='+id+'';
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0) 
{
alert("Record Deleted"); 
document.getElementById("refreshPageForm").submit();
}
}
};
ax.send();
}
}
}



