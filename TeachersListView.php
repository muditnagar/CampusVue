<?php
session_start();
if($_SESSION)
{
?>

<!doctype html>
<html>
<head>
<title>Teachers List View</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="styles/TeachersListView.css">
<script type="text/javascript" src="js/TeachersListView.js"></script>
</head>
<body>
<div id='container'>

<div id='softwareTitleDivision'><h1>Campus Vue</h1></div>

<div id='teachersGridContainer'>
<span class='moduleTitle'>Professors</span>
<?php
if(strcmp($_SESSION["role"],"admin")==0) print "<span id='userRoleSpan' hidden>admin</span>";
else print "<span id='userRoleSpan' hidden>nonAdmin</span>";
?>
<div id='backButtonDivision'><a href='HomePage.php'><img src='images/backButtonIcon.png' onclick='backButton()' class='moduleIcon'></a></div>
<?php
if(strcmp($_SESSION["role"],"admin")==0)
{
print " <div id='moduleIconsToolStrip'>";
print " <img src='images/addIcon.png's onclick='showAddTeacherWindow()' class='moduleIcon'/>";
print " <img src='images/editIcon.png' onclick='showEditTeacherWindow()' class='moduleIcon'/>";
print " <img src='images/deleteIcon.png' onclick='deleteTeacher()' class='moduleIcon'/>";
print " </div>";
}
?>

<table id='teachersGrid'>
<thead>
<tr>
<th>S.No.</th>
<th>Id.</th>  
<th>Name</th>
<th>Department</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>


<div id='detailsSpan'><span>Details</span></div>
<div id='teacherDetailsPanel'>
<table id='teacherDetailsPanelTable'>
<tbody>
<tr><td>ID :&nbsp;</td><td><span id='selectedTeachersId'></span></td>
<td>Name :&nbsp;</td><td><span id='selectedTeachersName'></span></td>
<td>Department :&nbsp;</td><td><span id='selectedTeachersDepartment'></span></td></tr>
<tr><td>Gender :&nbsp;</td><td><span id='selectedTeachersGender'></span></td>
<td>Date of birth :&nbsp;</td><td><span id='selectedTeachersDateOfBirth'></span></td>
<td>Date of Joining :&nbsp;</td><td><span id='selectedTeachersDateOfJoining'></span></td></tr>
<tr><?php if(strcmp($_SESSION["role"],"admin")==0) { print "<td>Salary :&nbsp;</td><td><span id='selectedTeachersSalary'></span></td>"; } ?>
<td>Designation :&nbsp;</td><td><span id='selectedTeachersDesignation'></span></td>
<td>Contact No. :&nbsp;</td><td><span id='selectedTeachersContactNumber'></span></td></tr>
<tr><td>College :</td><td colspan ='7'><span id='selectedTeachersCollege'></span></td></tr>
<tr><td>Address :</td><td colspan='7'><span id='selectedTeachersAddress'></span></td></tr>
</tbody>
</table>
</div>

<div id='teachersAddWindowMask'>
<div id='teachersAddWindow'>
<label id='windowTitleLabel'>Add</label>
<span id='windowCloseButtonSpan'><img id='windowCloseButton' src='images/closeWindowIcon.png' class='moduleIcon' onClick='closeAddTeacherWindow()'/></span>
<div id='windowClientDivision'>

<div id='userIDLabelDivision'>Professor ID : </div><div id='userIDInputDivision'><input type='text' name='userID' id='userID' size=15></div><div id='userIDErrorIconDivision'><img src='images/errorIcon.png' id='userIDErrorIcon'/></div>

<div id='usernameLabelDivision'>Name : </div><div id='usernameInputDivision'><input type='text' name='username' id='username' maxlength=25 size=20></div><div id='usernameErrorIconDivision'><img src='images/errorIcon.png' id='usernameErrorIcon'/></div>

<div id='departmentLabelDivision'>Department :</div><div id='departmentInputDivision'>
<select name='department' id='department'>
<option value='-1'>&lt;Select&gt;</option>
<option value='CSE'>CSE</option>
<option value='EC'>EC</option>
<option value='EE'>EE</option>
<option value='ME'>ME</option>
<option value='CE'>CE</option>
<option value='IT'>IT</option>
</select></div><div id='departmentErrorIconDivision'><img src='images/errorIcon.png' id='departmentErrorIcon'/></div>

<div id='genderLabelDivision'>Gender :</div><div id='genderInputDivision'>M<input type='radio' name='gender' id='male' value='M'>&nbsp;&nbsp;&nbsp;F<input type='radio' name='gender' id='female' value='F'></div><div id='genderErrorIconDivision'><img src='images/errorIcon.png' id='genderErrorIcon'/></div>

<div id='dateOfBirthLabelDivision'>Date Of Birth : </div><div id='dateOfBirthInputDivision'><input type="date" name='dateOfBirth' id='dateOfBirth'></div><div id='dateOfBirthErrorIconDivision'><img src='images/errorIcon.png' id='dateOfBirthErrorIcon'/></div>

<div id='dateOfJoiningLabelDivision'>Joining Date : </div><div id='dateOfJoiningInputDivision'><input type="date" name='dateOfJoining' id='dateOfJoining' size=12></div><div id='dateOfJoiningErrorIconDivision'><img src='images/errorIcon.png' id='dateOfJoiningErrorIcon'/></div>

<div id='collegeLabelDivision'>College : </div><div id='collegeInputDivision'><input type='text' name='college' id='college' size='62'></div><div id='collegeErrorIconDivision'><img src='images/errorIcon.png' id='collegeErrorIcon'/></div>

<div id='contactNumberLabelDivision'>Contact No. : </div><div id='contactNumberInputDivision'><input type='text' name='contactNumber' id='contactNumber' size=12></div><div id='contactNumberErrorIconDivision'><img src='images/errorIcon.png' id='contactNumberErrorIcon'/></div>

<div id='designationLabelDivision'>Designation : </div><div id='designationInputDivision'><input type='text' name='designation' id='designation' size=15></div><div id='designationErrorIconDivision'><img src='images/errorIcon.png' id='designationErrorIcon'/></div>


<div id='salaryLabelDivision'>Salary : </div><div id='salaryInputDivision'><input type='number' name='salary' id='salary'></div><div id='salaryErrorIconDivision'><img src='images/errorIcon.png' id='salaryErrorIcon'/></div>

<div id='addressLabelDivision'>Address : </div><div id='addressInputDivision'><input type='text' name='address' id='address' size=62></div><div id='addressErrorIconDivision'><img src='images/errorIcon.png' id='addressErrorIcon'/></div>

<div id='roleInputDivision'>Admin<input type='radio' name='role' id='admin' value='A'>&nbsp;&nbsp;&nbsp;Non Admin<input type='radio' name='role' id='nonAdmin' value='N'></div><div id='roleErrorIconDivision'><img src='images/errorIcon.png' id='roleErrorIcon'/></div>

<div id='addTeacherButtonDivision'><button type='button' onclick='addTeacher()'>Add</button></div>

<div id='passwordLabelDivision'>Password : </div><div id='passwordInputDivision'><input type='text' name='password' id='password' size=12></div><div id='passwordErrorIconDivision'><img src='images/errorIcon.png' id='passwordErrorIcon'/></div>
</div>
</div>
</div>

<div id='teachersEditWindowMask'>
<div id='teachersEditWindow'>
<label id='windowTitleLabel'>Edit</label>
<span id='windowCloseButtonSpan'><img id='windowCloseButton' src='images/closeWindowIcon.png' class='moduleIcon' onClick='closeEditTeacherWindow()'/></span>
<div id='windowClientDivision'>

<div id='userIDLabelDivision'>Professor ID : </div><div id='userIDSpanDivision'><span id='userIDSpan'></span></div>

<div id='usernameLabelDivision'>Name : </div><div id='usernameInputDivision'><input type='text' name='usernameEdit' id='usernameEdit' maxlength=25 size=20></div><div id='usernameErrorIconDivision'><img src='images/errorIcon.png' id='usernameErrorIconEdit'/></div>

<div id='departmentLabelDivision'>Department :</div><div id='departmentInputDivision'>
<select name='departmentEdit' id='departmentEdit'>
<option value='-1'>&lt;Select&gt;</option>
<option value='CSE'>CSE</option>
<option value='EC'>EC</option>
<option value='EE'>EE</option>
<option value='ME'>ME</option>
<option value='CE'>CE</option>
<option value='IT'>IT</option>
</select></div><div id='departmentErrorIconDivision'><img src='images/errorIcon.png' id='departmentErrorIconEdit'/></div>

<div id='genderLabelDivision'>Gender :</div><div id='genderInputDivision'>M<input type='radio' name='genderEdit' id='maleEdit' value='M'>&nbsp;&nbsp;&nbsp;F<input type='radio' name='genderEdit' id='femaleEdit' value='F'></div><div id='genderErrorIconDivision'><img src='images/errorIcon.png' id='genderErrorIconEdit'/></div>

<div id='dateOfBirthLabelDivision'>Date Of Birth : </div><div id='dateOfBirthInputDivision'><input type="date" name='dateOfBirthEdit' id='dateOfBirthEdit'></div><div id='dateOfBirthErrorIconDivision'><img src='images/errorIcon.png' id='dateOfBirthErrorIconEdit'/></div>

<div id='dateOfJoiningLabelDivision'>Joining Date : </div><div id='dateOfJoiningInputDivision'><input type="date" name='dateOfJoiningEdit' id='dateOfJoiningEdit' size=12></div><div id='dateOfJoiningErrorIconDivision'><img src='images/errorIcon.png' id='dateOfJoiningErrorIconEdit'/></div>

<div id='collegeLabelDivision'>College : </div><div id='collegeInputDivision'><input type='text' name='collegeEdit' id='collegeEdit' size='62'></div><div id='collegeErrorIconDivision'><img src='images/errorIcon.png' id='collegeErrorIconEdit'/></div>

<div id='contactNumberLabelDivision'>Contact No. : </div><div id='contactNumberInputDivision'><input type='text' name='contactNumberEdit' id='contactNumberEdit' size=12></div><div id='contactNumberErrorIconDivision'><img src='images/errorIcon.png' id='contactNumberErrorIconEdit'/></div>

<div id='designationLabelDivision'>Designation : </div><div id='designationInputDivision'><input type='text' name='designationEdit' id='designationEdit' size=15></div><div id='designationErrorIconDivision'><img src='images/errorIcon.png' id='designationErrorIconEdit'/></div>

<div id='salaryLabelDivision'>Salary : </div><div id='salaryInputDivision'><input type='number' name='salaryEdit' id='salaryEdit'> </div><div id='salaryErrorIconDivision'><img src='images/errorIcon.png' id='salaryErrorIconEdit'/></div>

<div id='addressLabelDivision'>Address : </div><div id='addressInputDivision'><input type='text' name='addressEdit' id='addressEdit' size=62></div><div id='addressErrorIconDivision'><img src='images/errorIcon.png' id='addressErrorIconEdit'/></div>

<div id='roleInputDivision'>Admin<input type='radio' name='roleEdit' id='adminEdit' value='A'>&nbsp;&nbsp;&nbsp;Non Admin<input type='radio' name='roleEdit' id='nonAdminEdit' value='N'></div><div id='roleErrorIconDivision'><img src='images/errorIcon.png' id='roleErrorIconEdit'/></div>

<div id='addTeacherButtonDivision'><button type='button' onclick='updateTeacher()'>Update</button></div>

<div id='passwordLabelDivision'>Password : </div><div id='passwordInputDivision'><input type='text' name='passwordEdit' id='passwordEdit' size=12></div><div id='passwordErrorIconDivision'><img src='images/errorIcon.png' id='passwordErrorIconEdit'/></div>

</div>
</div>
</div>
<form id='refreshPageForm'><input type='hidden' id='refreshPageSpan' value='TeachersListView.php'/></form>

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