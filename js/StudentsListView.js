var studentsCollection=null;
var studentsGridSelectedRow=null;
var studentsGridSelectedRowIndex=-1;
window.addEventListener("load",initComponents);


function getStudents()
{
var ax=new XMLHttpRequest();
ax.open('GET','GetStudents.php',true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
studentsCollection=eval("("+ax.responseText+")");
populateStudentsGrid();
}
};
ax.send();
}



function populateStudentsGrid()
{
var studentsGrid=document.getElementById("studentsGrid");
var studentsGridBody=studentsGrid.getElementsByTagName("tbody")[0];
var x=0;
var row,cell;
while(x<studentsCollection.length)
{
row=studentsGridBody.insertRow(x);
(function(rr,ii){
row.addEventListener("click",function(){
studentsGridRowClicked(rr,ii);
})})(row,x);
cell=row.insertCell(0);
cell.innerHTML=(x+1);
cell=row.insertCell(1);
cell.innerHTML=studentsCollection[x].enrollmentNumber;
cell=row.insertCell(2);
cell.innerHTML=studentsCollection[x].name;
cell=row.insertCell(3);
cell.innerHTML=studentsCollection[x].department;
x++;
}
}

function studentsGridRowClicked(row,rowIndex)
{
if(row==studentsGridSelectedRow) return;
if(studentsGridSelectedRow!=null)
{
studentsGridSelectedRow.className="notSelectedRow";
}
row.className="selectedRow";
studentsGridSelectedRow=row;
studentsGridSelectedRowIndex=rowIndex;
updateDetailsPanel();
}

function updateDetailsPanel()
{
var enrollmentNumber=document.getElementById("selectedStudentsEnrollmentNumber");
var collegeID=document.getElementById("selectedStudentsCollegeID");
var department=document.getElementById("selectedStudentsDepartment");
var name=document.getElementById("selectedStudentsName");
var dateOfBirth=document.getElementById("selectedStudentsDateOfBirth");
var yearOfJoining=document.getElementById("selectedStudentsYearOfJoining");
var gender=document.getElementById("selectedStudentsGender");
var contactNumber=document.getElementById("selectedStudentsContactNumber");
var yearOfPassing=document.getElementById("selectedStudentsYearOfPassing");
var semester=document.getElementById("selectedStudentsSemester");
var currentYear=document.getElementById("selectedStudentsCurrentYear");
var college=document.getElementById("selectedStudentsCollege");
var address=document.getElementById("selectedStudentsAddress");

 enrollmentNumber.innerHTML=studentsCollection[studentsGridSelectedRowIndex].enrollmentNumber;
 collegeID.innerHTML=studentsCollection[studentsGridSelectedRowIndex].collegeID;
 department.innerHTML=studentsCollection[studentsGridSelectedRowIndex].department;
 name.innerHTML=studentsCollection[studentsGridSelectedRowIndex].name;
 dateOfBirth.innerHTML=studentsCollection[studentsGridSelectedRowIndex].dateOfBirth;
 yearOfJoining.innerHTML=studentsCollection[studentsGridSelectedRowIndex].yearOfJoining;
 gender.innerHTML=studentsCollection[studentsGridSelectedRowIndex].gender;
 contactNumber.innerHTML=studentsCollection[studentsGridSelectedRowIndex].contactNumber;
 yearOfPassing.innerHTML=studentsCollection[studentsGridSelectedRowIndex].yearOfPassing;
 semester.innerHTML=studentsCollection[studentsGridSelectedRowIndex].semester;
 currentYear.innerHTML=studentsCollection[studentsGridSelectedRowIndex].currentYear;
 college.innerHTML=studentsCollection[studentsGridSelectedRowIndex].college;
 address.innerHTML=studentsCollection[studentsGridSelectedRowIndex].address;
}


function showAddStudentWindow()
{
var studentsAddWindowMask=document.getElementById("studentsAddWindowMask");
studentsAddWindowMask.style.visibility="visible";
hideErrorIcons();
}

function hideErrorIcons()
{
var enrollmentNumberErrorIcon=document.getElementById("enrollmentNumberErrorIcon");
var nameErrorIcon=document.getElementById("nameErrorIcon");
var departmentErrorIcon=document.getElementById("departmentErrorIcon");
var genderErrorIcon=document.getElementById("genderErrorIcon");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIcon");
var yearOfJoiningErrorIcon=document.getElementById("yearOfJoiningErrorIcon");
var collegeErrorIcon=document.getElementById("collegeErrorIcon");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIcon");
var currentYearErrorIcon=document.getElementById("currentYearErrorIcon");
var semesterErrorIcon=document.getElementById("semesterErrorIcon");
var yearOfPassingErrorIcon=document.getElementById("yearOfPassingErrorIcon");
var addressErrorIcon=document.getElementById("addressErrorIcon");
var collegeIDErrorIcon=document.getElementById("collegeIDErrorIcon");

 enrollmentNumberErrorIcon.style.display="none";
 nameErrorIcon.style.display="none";
 departmentErrorIcon.style.display="none";
 genderErrorIcon.style.display="none";
 dateOfBirthErrorIcon.style.display="none";
 yearOfJoiningErrorIcon.style.display="none";
 collegeErrorIcon.style.display="none";
 contactNumberErrorIcon.style.display="none";
 currentYearErrorIcon.style.display="none";
 semesterErrorIcon.style.display="none";
 yearOfPassingErrorIcon.style.display="none";
 addressErrorIcon.style.display="none";
 collegeIDErrorIcon.style.display="none";
}

function hideEditErrorIcons()
{
var nameErrorIcon=document.getElementById("nameErrorIconEdit");
var departmentErrorIcon=document.getElementById("departmentErrorIconEdit");
var genderErrorIcon=document.getElementById("genderErrorIconEdit");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIconEdit");
var yearOfJoiningErrorIcon=document.getElementById("yearOfJoiningErrorIconEdit");
var collegeErrorIcon=document.getElementById("collegeErrorIconEdit");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIconEdit");
var currentYearErrorIcon=document.getElementById("currentYearErrorIconEdit");
var semesterErrorIcon=document.getElementById("semesterErrorIconEdit");
var yearOfPassingErrorIcon=document.getElementById("yearOfPassingErrorIconEdit");
var addressErrorIcon=document.getElementById("addressErrorIconEdit");
var collegeIDErrorIcon=document.getElementById("collegeIDErrorIconEdit");

 nameErrorIcon.style.display="none";
 departmentErrorIcon.style.display="none";
 genderErrorIcon.style.display="none";
 dateOfBirthErrorIcon.style.display="none";
 yearOfJoiningErrorIcon.style.display="none";
 collegeErrorIcon.style.display="none";
 contactNumberErrorIcon.style.display="none";
 currentYearErrorIcon.style.display="none";
 semesterErrorIcon.style.display="none";
 yearOfPassingErrorIcon.style.display="none";
 addressErrorIcon.style.display="none";
 collegeIDErrorIcon.style.display="none";
}

function initComponents()
{
getStudents();
}


function closeAddStudentWindow()
{
var studentsAddWindowMask=document.getElementById("studentsAddWindowMask");
studentsAddWindowMask.style.visibility="hidden";
var enrollmentNumber=document.getElementById("enrollmentNumber");
var name=document.getElementById("name");
var department=document.getElementById("department");
var male=document.getElementById("male");
var female=document.getElementById("female");
var dateOfBirth=document.getElementById("dateOfBirth");
var yearOfJoining=document.getElementById("yearOfJoining");
var college=document.getElementById("college");
var contactNumber=document.getElementById("contactNumber");
var currentYear=document.getElementById("currentYear");
var semester=document.getElementById("semester");
var yearOfPassing=document.getElementById("yearOfPassing");
var address=document.getElementById("address");
var collegeID=document.getElementById("collegeID");
enrollmentNumber.value=null;
name.value=null;
department.selectedIndex=0;
male.checked=false;
female.checked=false;
dateOfBirth.value=null;
yearOfJoining.value=null;
college.value=null;
contactNumber.value=null;
currentYear.value=null;
semester.value=null;
yearOfPassing.value=null;
address.value=null;
collegeID.value=null;
}

function showEditStudentWindow()
{
if(studentsGridSelectedRowIndex==-1)
{
alert("Please select the record to be Edited");
}
else
{
var studentsEditWindowMask=document.getElementById("studentsEditWindowMask");
studentsEditWindowMask.style.visibility="visible";
var enrollmentNumberSpan=document.getElementById("enrollmentNumberSpan");
var name=document.getElementById("nameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var yearOfJoining=document.getElementById("yearOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var currentYear=document.getElementById("currentYearEdit");
var semester=document.getElementById("semesterEdit");
var yearOfPassing=document.getElementById("yearOfPassingEdit");
var address=document.getElementById("addressEdit");
var collegeID=document.getElementById("collegeIDEdit");
hideEditErrorIcons();

 enrollmentNumberSpan.innerHTML=studentsCollection[studentsGridSelectedRowIndex].enrollmentNumber;
 collegeID.value=studentsCollection[studentsGridSelectedRowIndex].collegeID;
 department.value=studentsCollection[studentsGridSelectedRowIndex].department;
 name.value=studentsCollection[studentsGridSelectedRowIndex].name;
 dateOfBirth.value=studentsCollection[studentsGridSelectedRowIndex].dateOfBirth;
 yearOfJoining.value=studentsCollection[studentsGridSelectedRowIndex].yearOfJoining;
 if(studentsCollection[studentsGridSelectedRowIndex].gender.localeCompare('M')==0)
 {  
 male.checked=true;
 }
 else
 {
 female.checked=true;
 }
 contactNumber.value=studentsCollection[studentsGridSelectedRowIndex].contactNumber;
 yearOfPassing.value=studentsCollection[studentsGridSelectedRowIndex].yearOfPassing;
 semester.value=studentsCollection[studentsGridSelectedRowIndex].semester;
 currentYear.value=studentsCollection[studentsGridSelectedRowIndex].currentYear;
 college.value=studentsCollection[studentsGridSelectedRowIndex].college;
 address.value=studentsCollection[studentsGridSelectedRowIndex].address;
}
}



function closeEditStudentWindow()
{
var studentsEditWindowMask=document.getElementById("studentsEditWindowMask");
studentsEditWindowMask.style.visibility="hidden";
var enrollemntNumber=document.getElementById("enrollmentNumberSpan");
var name=document.getElementById("nameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var yearOfJoining=document.getElementById("yearOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var currentYear=document.getElementById("currentYearEdit");
var semester=document.getElementById("semesterEdit");
var yearOfPassing=document.getElementById("yearOfPassingEdit");
var address=document.getElementById("addressEdit");
var collegeID=document.getElementById("collegeIDEdit");
enrollmentNumber.innerHTML=" ";
name.value=null;
department.selectedIndex=0;
male.checked=false;
female.checked=false;
dateOfBirth.value=null;
yearOfJoining.value=null;
college.value=null;
contactNumber.value=null;
currentYear.value=null;
semester.value=null;
yearOfPassing.value=null;
address.value=null;
collegeID.value=null;
}

function addStudent()
{
var x=0;
var enrollmentNumberErrorIcon=document.getElementById("enrollmentNumberErrorIcon");
var nameErrorIcon=document.getElementById("nameErrorIcon");
var departmentErrorIcon=document.getElementById("departmentErrorIcon");
var genderErrorIcon=document.getElementById("genderErrorIcon");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIcon");
var yearOfJoiningErrorIcon=document.getElementById("yearOfJoiningErrorIcon");
var collegeErrorIcon=document.getElementById("collegeErrorIcon");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIcon");
var currentYearErrorIcon=document.getElementById("currentYearErrorIcon");
var semesterErrorIcon=document.getElementById("semesterErrorIcon");
var yearOfPassingErrorIcon=document.getElementById("yearOfPassingErrorIcon");
var addressErrorIcon=document.getElementById("addressErrorIcon");
var collegeIDErrorIcon=document.getElementById("collegeIDErrorIcon");

var enrollmentNumber=document.getElementById("enrollmentNumber");
var name=document.getElementById("name");
var department=document.getElementById("department");
var male=document.getElementById("male");
var female=document.getElementById("female");
var dateOfBirth=document.getElementById("dateOfBirth");
var yearOfJoining=document.getElementById("yearOfJoining");
var college=document.getElementById("college");
var contactNumber=document.getElementById("contactNumber");
var currentYear=document.getElementById("currentYear");
var semester=document.getElementById("semester");
var yearOfPassing=document.getElementById("yearOfPassing");
var address=document.getElementById("address");
var collegeID=document.getElementById("collegeID");

 enrollmentNumberErrorIcon.style.display="none";
 nameErrorIcon.style.display="none";
 departmentErrorIcon.style.display="none";
 genderErrorIcon.style.display="none";
 dateOfBirthErrorIcon.style.display="none";
 yearOfJoiningErrorIcon.style.display="none";
 collegeErrorIcon.style.display="none";
 contactNumberErrorIcon.style.display="none";
 currentYearErrorIcon.style.display="none";
 semesterErrorIcon.style.display="none";
 yearOfPassingErrorIcon.style.display="none";
 addressErrorIcon.style.display="none";
 collegeIDErrorIcon.style.display="none";

if(enrollmentNumber.value.length==0)
{
enrollmentNumberErrorIcon.style.display="inline";
enrollmentNumberErrorIcon.title="Enrollment Number required";
x++;
}
if(name.value.length==0)
{
nameErrorIcon.style.display="inline";
nameErrorIcon.title="Name required";
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
if(yearOfJoining.value.length==0)
{
yearOfJoiningErrorIcon.style.display="inline";
yearOfJoiningErrorIcon.title="Joining Year required";
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
if(currentYear.value.length==0)
{
currentYearErrorIcon.style.display="inline";
currentYearErrorIcon.title="Designation required";
x++;
}
if(semester.value.length==0)
{
semesterErrorIcon.style.display="inline";
semesterErrorIcon.title="Enter salary";
x++;
}

if(address.value.length==0)
{
addressErrorIcon.style.display="inline";
addressErrorIcon.title="Address required";
x++;
}

if(yearOfPassing.value.length==0)
{
yearOfPassingErrorIcon.style.display="inline";
yearOfPassingErrorIcon.title="Set Year Of Passing";
x++;
}
if(collegeID.value.length==0)
{
collegeIDErrorIcon.style.display="inline";
collegeIDErrorIcon.title="Set college ID";
x++;
}

if(x==0)
{
var gender='M';
if(female.checked==true)
{
gender='F';
}
var url='AddStudent.php?enrollmentNumber='+enrollmentNumber.value+'&name='+name.value+'&department='+department.options[department.selectedIndex].text+'&gender='+gender+'&dateOfBirth='+dateOfBirth.value+'&yearOfJoining='+yearOfJoining.value+'&college='+college.value+'&contactNumber='+contactNumber.value+'&currentYear='+currentYear.value+'&semester='+semester.value+'&address='+address.value+'&yearOfPassing='+yearOfPassing.value+'&collegeID='+collegeID.value+'';

var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0)
{
alert("Record Added");
closeAddStudentWindow();
document.getElementById("refreshPageForm").submit();
}
else
{
enrollmentNumberErrorIcon.style.display="inline";
enrollmentNumberErrorIcon.title="Enrollment Number already Exists";
}
}
};
ax.send();
}
}



function updateStudent()
{
var x=0;
var nameErrorIcon=document.getElementById("nameErrorIconEdit");
var departmentErrorIcon=document.getElementById("departmentErrorIconEdit");
var genderErrorIcon=document.getElementById("genderErrorIconEdit");
var dateOfBirthErrorIcon=document.getElementById("dateOfBirthErrorIconEdit");
var yearOfJoiningErrorIcon=document.getElementById("yearOfJoiningErrorIconEdit");
var collegeErrorIcon=document.getElementById("collegeErrorIconEdit");
var contactNumberErrorIcon=document.getElementById("contactNumberErrorIconEdit");
var currentYearErrorIcon=document.getElementById("currentYearErrorIconEdit");
var semesterErrorIcon=document.getElementById("semesterErrorIconEdit");
var yearOfPassingErrorIcon=document.getElementById("yearOfPassingErrorIconEdit");
var addressErrorIcon=document.getElementById("addressErrorIconEdit");
var collegeIDErrorIcon=document.getElementById("collegeIDErrorIconEdit");


var enrollmentNumber=document.getElementById("enrollmentNumberSpan");
var name=document.getElementById("nameEdit");
var department=document.getElementById("departmentEdit");
var male=document.getElementById("maleEdit");
var female=document.getElementById("femaleEdit");
var dateOfBirth=document.getElementById("dateOfBirthEdit");
var yearOfJoining=document.getElementById("yearOfJoiningEdit");
var college=document.getElementById("collegeEdit");
var contactNumber=document.getElementById("contactNumberEdit");
var currentYear=document.getElementById("currentYearEdit");
var semester=document.getElementById("semesterEdit");
var yearOfPassing=document.getElementById("yearOfPassingEdit");
var address=document.getElementById("addressEdit");
var collegeID=document.getElementById("collegeIDEdit");

 nameErrorIcon.style.display="none";
 departmentErrorIcon.style.display="none";
 genderErrorIcon.style.display="none";
 dateOfBirthErrorIcon.style.display="none";
 yearOfJoiningErrorIcon.style.display="none";
 collegeErrorIcon.style.display="none";
 contactNumberErrorIcon.style.display="none";
 currentYearErrorIcon.style.display="none";
 semesterErrorIcon.style.display="none";
 yearOfPassingErrorIcon.style.display="none";
 addressErrorIcon.style.display="none";
 collegeIDErrorIcon.style.display="none";


if(name.value.length==0)
{
nameErrorIcon.style.display="inline";
nameErrorIcon.title="Name required";
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
if(yearOfJoining.value.length==0)
{
yearOfJoiningErrorIcon.style.display="inline";
yearOfJoiningErrorIcon.title="Joining Year required";
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
if(currentYear.value.length==0)
{
currentYearErrorIcon.style.display="inline";
currentYearErrorIcon.title="Designation required";
x++;
}
if(semester.value.length==0)
{
semesterErrorIcon.style.display="inline";
semesterErrorIcon.title="Enter salary";
x++;
}

if(address.value.length==0)
{
addressErrorIcon.style.display="inline";
addressErrorIcon.title="Address required";
x++;
}

if(yearOfPassing.value.length==0)
{
yearOfPassingErrorIcon.style.display="inline";
yearOfPassingErrorIcon.title="Set Year Of Passing";
x++;
}
if(collegeID.value.length==0)
{
collegeIDErrorIcon.style.display="inline";
collegeIDErrorIcon.title="Set college ID";
x++;
}

if(x==0)
{
var gender='M';
if(female.checked==true)
{
gender='F';
}
var url='UpdateStudent.php?enrollmentNumber='+enrollmentNumberSpan.innerHTML+'&name='+name.value+'&department='+department.options[department.selectedIndex].text+'&gender='+gender+'&dateOfBirth='+dateOfBirth.value+'&yearOfJoining='+yearOfJoining.value+'&college='+college.value+'&contactNumber='+contactNumber.value+'&currentYear='+currentYear.value+'&semester='+semester.value+'&address='+address.value+'&yearOfPassing='+yearOfPassing.value+'&collegeID='+collegeID.value+'';

var ax=new XMLHttpRequest();
ax.open('GET',url,true);
ax.onreadystatechange=function(){
if(ax.readyState===4 && ax.status===200)
{
var result=eval("("+ax.responseText+")");
if((result.success).localeCompare("true")==0)
{
alert("Record Updated");
closeEditStudentWindow();
document.getElementById("refreshPageForm").submit();
}
}
};
ax.send();
}
}




function deleteStudent()
{
if(studentsGridSelectedRowIndex==-1)
{
alert("Please select the record to be deleted");
}
else
{
var m='Delete record, Enrollment No. : '+studentsCollection[studentsGridSelectedRowIndex].enrollmentNumber+' || Name : '+studentsCollection[studentsGridSelectedRowIndex].name+' ? ';
var r=confirm(m);
if(r==true)
{
var enrollmentNumber=studentsCollection[studentsGridSelectedRowIndex].enrollmentNumber;
var ax=new XMLHttpRequest();
var url='DeleteStudent.php?enrollmentNumber='+enrollmentNumber+'';
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