<?php
session_start();
if($_SESSION)
{
?>

<!doctype html>
<html>
<head>
<title>Students List View</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="styles/StudentsListView.css">
<script type="text/javascript" src="js/StudentsListView.js"></script>
</head>
<body>
<div id='container'>

<div id='softwareTitleDivision'><h1>Campus Vue</h1></div>

<div id='studentsGridContainer'>
<span class='moduleTitle'>Students</span>

<div id='backButtonDivision'><a href='HomePage.php'><img src='images/backButtonIcon.png' onclick='backButton()' class='moduleIcon'></a></div>
<div id='moduleIconsToolStrip'>
<img src='images/addIcon.png's onclick='showAddStudentWindow()' class='moduleIcon'/>
<img src='images/editIcon.png' onclick='showEditStudentWindow()' class='moduleIcon'/>
<img src='images/deleteIcon.png' onclick='deleteStudent()' class='moduleIcon'/>
</div>


<table id='studentsGrid'>
<thead>
<tr>
<th>S.No.</th>
<th>Enroll No.</th>  
<th>Name</th>
<th>Department</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>


<div id='detailsSpan'><span>Details</span></div>
<div id='studentDetailsPanel'>
<table id='studentDetailsPanelTable'>
<tbody>
<tr><td>Enrollment No. :</td><td><span id='selectedStudentsEnrollmentNumber'></span></td>
<td>College Id :</td><td><span id='selectedStudentsCollegeID'></span></td>
<td>Department :</td><td><span id='selectedStudentsDepartment'></span></td></tr>
<tr><td>Name :</td><td><span id='selectedStudentsName'></span></td>
<td>Date of birth :</td><td><span id='selectedStudentsDateOfBirth'></span></td>
<td>Year of Joining :</td><td><span id='selectedStudentsYearOfJoining'></span></td></tr>
<tr><td>Gender :</td><td><span id='selectedStudentsGender'></span></td>
<td>Contact No. :</td><td><span id='selectedStudentsContactNumber'></span></td>
<td>Year of passing :</td><td><span id='selectedStudentsYearOfPassing'></span></td></tr>
<tr><td>Semester :</td><td><span id='selectedStudentsSemester'></span></td>
<td>Current Year :</td><td><span id='selectedStudentsCurrentYear'></span></td></tr>
<tr><td>College :</td><td colspan ='7'><span id='selectedStudentsCollege'></span></td></tr>
<tr><td>Address :</td><td colspan='7'><span id='selectedStudentsAddress'></span></td></tr>
</tbody>
</table>
</div>

<div id='studentsAddWindowMask'>
<div id='studentsAddWindow'>
<label id='windowTitleLabel'>Add</label>
<span id='windowCloseButtonSpan'><img id='windowCloseButton' src='images/closeWindowIcon.png' class='moduleIcon' onClick='closeAddStudentWindow()'/></span>
<div id='windowClientDivision'>

<div id='enrollmentNumberLabelDivision'>Enrollment No.</div><div id='enrollmentNumberInputDivision'><input type='text' name='enrollmentNumber' id='enrollmentNumber' size=15></div><div id='enrollmentNumberErrorIconDivision'><img src='images/errorIcon.png' id='enrollmentNumberErrorIcon'/></div>

<div id='nameLabelDivision'>Name : </div><div id='nameInputDivision'><input type='text' name='name' id='name' maxlength=25 size=20></div><div id='nameErrorIconDivision'><img src='images/errorIcon.png' id='nameErrorIcon'/></div>

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

<div id='yearOfJoiningLabelDivision'>Joining Year : </div><div id='yearOfJoiningInputDivision'><input type="text" name='yearOfJoining' id='yearOfJoining' size=12></div><div id='yearOfJoiningErrorIconDivision'><img src='images/errorIcon.png' id='yearOfJoiningErrorIcon'/></div>

<div id='collegeLabelDivision'>College : </div><div id='collegeInputDivision'><input type='text' name='college' id='college' size='62'></div><div id='collegeErrorIconDivision'><img src='images/errorIcon.png' id='collegeErrorIcon'/></div>

<div id='contactNumberLabelDivision'>Contact No. : </div><div id='contactNumberInputDivision'><input type='text' name='contactNumber' id='contactNumber' size=12></div><div id='contactNumberErrorIconDivision'><img src='images/errorIcon.png' id='contactNumberErrorIcon'/></div>

<div id='currentYearLabelDivision'>Current Year: </div><div id='currentYearInputDivision'><input type='text' name='currentYear' id='currentYear' size=12></div><div id='currentYearErrorIconDivision'><img src='images/errorIcon.png' id='currentYearErrorIcon'/></div>

<div id='semesterLabelDivision'>Semester : </div><div id='semesterInputDivision'><input type='text' name='semester' id='semester'></div><div id='semesterErrorIconDivision'><img src='images/errorIcon.png' id='semesterErrorIcon'/></div>

<div id='yearOfPassingLabelDivision'>Passing Year : </div><div id='yearOfPassingInputDivision'><input type='text' name='yearOfPassing' id='yearOfPassing' size='12'></div><div id='yearOfPassingErrorIconDivision'><img src='images/errorIcon.png' id='yearOfPassingErrorIcon'/></div>

<div id='addressLabelDivision'>Address : </div><div id='addressInputDivision'><input type='text' name='address' id='address' size=62></div><div id='addressErrorIconDivision'><img src='images/errorIcon.png' id='addressErrorIcon'/></div>

<div id='collegeIDLabelDivision'>College ID : </div><div id='collegeIDInputDivision'><input type='text' name='collegeID' id='collegeID' size=12></div><div id='collegeIDErrorIconDivision'><img src='images/errorIcon.png' id='collegeIDErrorIcon'/></div>

<div id='addStudentButtonDivision'><button type='button' onclick='addStudent()'>Add</button></div>

</div>
</div>
</div>

<div id='studentsEditWindowMask'>
<div id='studentsEditWindow'>
<label id='windowTitleLabel'>Edit</label>
<span id='windowCloseButtonSpan'><img id='windowCloseButton' src='images/closeWindowIcon.png' class='moduleIcon' onClick='closeEditStudentWindow()'/></span>
<div id='windowClientDivision'>

<div id='enrollmentNumberLabelDivision'>Enrollment No.</div><div id='enrollmentNumberSpanDivision'><span id='enrollmentNumberSpan'></span></div><div id='enrollmentNumberErrorIconDivision'></div>

<div id='nameLabelDivision'>Name : </div><div id='nameInputDivision'><input type='text' name='nameEdit' id='nameEdit' maxlength=25 size=20></div><div id='nameErrorIconDivision'><img src='images/errorIcon.png' id='nameErrorIconEdit'/></div>

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

<div id='yearOfJoiningLabelDivision'>Joining Year : </div><div id='yearOfJoiningInputDivision'><input type="text" name='yearOfJoiningEdit' id='yearOfJoiningEdit' size=12></div><div id='yearOfJoiningErrorIconDivision'><img src='images/errorIcon.png' id='yearOfJoiningErrorIconEdit'/></div>

<div id='collegeLabelDivision'>College : </div><div id='collegeInputDivision'><input type='text' name='collegeEdit' id='collegeEdit' size='62'></div><div id='collegeErrorIconDivision'><img src='images/errorIcon.png' id='collegeErrorIconEdit'/></div>

<div id='contactNumberLabelDivision'>Contact No. : </div><div id='contactNumberInputDivision'><input type='text' name='contactNumberEdit' id='contactNumberEdit' size=12></div><div id='contactNumberErrorIconDivision'><img src='images/errorIcon.png' id='contactNumberErrorIconEdit'/></div>

<div id='currentYearLabelDivision'>Current Year: </div><div id='currentYearInputDivision'><input type='text' name='currentYearEdit' id='currentYearEdit' size=12></div><div id='currentYearErrorIconDivision'><img src='images/errorIcon.png' id='currentYearErrorIconEdit'/></div>

<div id='semesterLabelDivision'>Semester : </div><div id='semesterInputDivision'><input type='text' name='semesterEdit' id='semesterEdit'></div><div id='semesterErrorIconDivision'><img src='images/errorIcon.png' id='semesterErrorIconEdit'/></div>

<div id='yearOfPassingLabelDivision'>Passing Year : </div><div id='yearOfPassingInputDivision'><input type='text' name='yearOfPassingEdit' id='yearOfPassingEdit' size='12'></div><div id='yearOfPassingErrorIconDivision'><img src='images/errorIcon.png' id='yearOfPassingErrorIconEdit'/></div>

<div id='addressLabelDivision'>Address : </div><div id='addressInputDivision'><input type='text' name='addressEdit' id='addressEdit' size=62></div><div id='addressErrorIconDivision'><img src='images/errorIcon.png' id='addressErrorIconEdit'/></div>

<div id='collegeIDLabelDivision'>College ID : </div><div id='collegeIDInputDivision'><input type='text' name='collegeIDEdit' id='collegeIDEdit' size=12></div><div id='collegeIDErrorIconDivision'><img src='images/errorIcon.png' id='collegeIDErrorIconEdit'/></div>

<div id='addStudentButtonDivision'><button type='button' onclick='updateStudent()'>Update</button></div>

</div>
</div>
</div>
<form id='refreshPageForm'><input type='hidden' id='refreshPageSpan' value='StudentsListView.php'/></form>

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