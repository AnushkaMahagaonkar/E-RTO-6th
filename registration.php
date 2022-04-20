<?php
include('configuration.php');
if(isset($_POST['submit']))
{ // Fetching variables of the form which travels in URL
	$fname = $_POST["fn"];
	$mname = $_POST['mn'];
	$lname = $_POST['ln'];
	$email = $_POST['email'];
	$address = $_POST['add'];
	$state = $_POST['state'];
	$city = $_POST['city'];
	$gender = $_POST['gender'];
	$blood = $_POST['blood'];
	$dob = $_POST['dob'];
	$pn = $_POST['pn'];
	$pass = $_POST['password'];
if($fname !=''||$email !='')
{
//Insert Query of SQL
$sql= "INSERT into user(U_FName,U_MName,U_LName,U_Gender,U_DOB,U_Address,U_State,U_City,U_BloodGroup,U_MobileNumber,U_Password) VALUES ('$fname', '$mname', '$lname','$gender','$dob','$address','$state','$city','$blood','$pn','$password')";
	if(mysqli_query($conn, $sql))
	{
		echo "Records inserted successfully.";
	} 
	else
	{
		echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
	}
}
}
mysqli_close($conn); // Closing Connection with Server
?>