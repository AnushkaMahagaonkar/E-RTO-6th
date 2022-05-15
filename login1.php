
<?php 
include('configuration.php');
session_start();
$name=$_POST['name'];
$pass=$_POST['password'];
//echo $name;
//echo $pass;
$sql="SELECT * FROM user where U_FName='$name' and U_Password='$pass'";

	$result=mysqli_query($conn,$sql);
  
    //echo $result;
    $rowcount=mysqli_num_rows($result);
   // printf("Result set has %d rows.\n",$rowcount);
		if($rowcount>=1)
		{
          // echo $sql;
            //echo"hi";
			while ($row=mysqli_fetch_array($result))
			{
				$_SESSION['name1']=$row['U_FName'];
				$_SESSION['pass1']=$row['U_Password'];
				//echo'<script>alert ("Welcome")</script>';
                //alert("hello");
				echo "<script>window.location='index.php'</script>";
			}
		}
		else
		{
			echo '<script>alert("First register yourself")</script>';
            echo "<script>window.location='Ulogin.php'</script>";

		}
		
?>