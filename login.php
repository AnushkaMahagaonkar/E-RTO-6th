
<?php 

include('configuration.php');
session_start();
$name=$_POST['name'];
$pass=$_POST['password'];
echo $name;
echo $pass;
$sql="SELECT * FROM user where U_FName='$name' and U_Password='$pass'";

	$result=mysqli_query($conn,$sql);
   // echo $result;
    echo $sql;
		if(mysqli_num_rows($result)==1)
		{
            echo"hi";
			while ($row=mysqli_fetch_array($result))
			{
				/*$_SESSION['name1']=$row['U_FName'];
				$_SESSION['pass1']=$row['U_Password'];
				echo"Welcome";
                //alert("hello");
			//	echo "<script>window.location='index.php'</script>";

			*/
            //echo "Welcome";
			}
		}
		else
		{
			echo "<script>window.location='login.php'</script>";

		}
		
?>