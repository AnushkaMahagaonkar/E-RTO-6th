
<?php

include('configuration.php');
//error_reporting(0);
if(isset($_POST['submit']))
{ // Fetching variables of the form which travels in URL
	$fname = $_POST['fn'];
	$email = $_POST['email'];
	//$address = $_POST['add'];
	$pass = $_POST['password'];
if($fname !=''||$email !='')
{
//Insert Query of SQL
$sql= "INSERT into user(U_FName,U_Password,U_email) VALUES ('$fname','$pass','$email')";
	if(mysqli_query($conn, $sql))
	{
		echo'<script>alert("Welcome")</script>';
		header("refresh:2,url=index.php");
	} 
	else
	{
		header("refresh:2,url=Ulogin.php");
		echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
	}
}
}
//mysqli_close($conn); // Closing Connection with Server
//<html><body> <script>alert("HII")</script></body></html>
?>
