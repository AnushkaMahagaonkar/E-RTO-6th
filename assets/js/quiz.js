function info(){
    var name = document.infoForm.name.value;
    var phnum = document.infoForm.num.value;
    var email = document.infoForm.email.value;
    var patternEmail = "^[\\w-_\.]*[\\w-_\.]@[\\w]\.+[\\w]+[\\w]$";
    var patEmail = new RegExp(patternEmail);
    validEmail = patEmail.test(email);
    var patNumber = new RegExp("[0-9]");
    validNumber = patNumber.test(phnum);


    if(name == ""){
        document.getElementById("errName").innerHTML = "Please Enter your name.";
        booName = false;
    }
    else{
        document.getElementById("errName").innerHTML = "";
        booName = true;
    }

    if(phnum == ""){
        document.getElementById("errNum").innerHTML = "Please Enter your Phone Number.";
        booNum = false;
    }
    else{
        if(validNumber && phnum.length === 10){
            document.getElementById("errNum").innerHTML = "";
            booNum = true;
        }
        else{
            if(!validNumber)
                document.getElementById("errNum").innerHTML = "Invalid Phone number.";
            else
                document.getElementById("errNum").innerHTML = "Length of mobile number is invalid."; 
            booNum = false;
        }
    }

    if(email == ""){
        document.getElementById("errEmail").innerHTML = "Please Enter your Email..";
        booEmail = false;
    }
    else{
        if(validEmail){
            document.getElementById("errEmail").innerHTML = "";
            booEmail = true;
        }
        else{
            document.getElementById("errEmail").innerHTML = "Invalid email..";
            booEmail = false;
        }
    }

    if(booName == false || booEmail == false || booNum == false){
        return false;
    }
    infoclose(name);
}

function infoclose(name){
    var div = document.getElementById("info");
    div.style.display = "none";
    nav(name);
}

function nav(name){
    var div2 = document.getElementById("nav");
    div2.style.display = "block";
    document.getElementById("nav").innerHTML = "Hi, " + name;
    fullname = name;
}

function check(){
    q1Value = q2Value = q3Value = q4Value = q5Value = q6Value = q7Value = q8Value = q9Value = q10Value = "";
    var q1 = document.fm.q1;
    length = q1.length;

    for(i=0; i<length; i++){
        if(q1[i].checked){
            q1Value = q1[i].value; 
        }
    }

    var q2 = document.fm.q2;
    length = q2.length;

    for(i=0; i<length; i++){
        if(q2[i].checked){
            q2Value = q2[i].value; 
        }
    }

    var q3 = document.fm.q3;
    length = q3.length;

    for(i=0; i<length; i++){
        if(q3[i].checked){
            q3Value = q3[i].value; 
        }
    }

    var q4 = document.fm.q4;
    length = q4.length;

    for(i=0; i<length; i++){
        if(q4[i].checked){
            q4Value = q4[i].value; 
        }
    }

    var q5 = document.fm.q5;
    length = q5.length;

    for(i=0; i<length; i++){
        if(q5[i].checked){
            q5Value = q5[i].value; 
        }
    }

    var q6 = document.fm.q6;
    length = q6.length;

    for(i=0; i<length; i++){
        if(q6[i].checked){
            q6Value = q6[i].value; 
        }
    }
    var q7 = document.fm.q7;
    length = q7.length;

    for(i=0; i<length; i++){
        if(q7[i].checked){
            q7Value = q7[i].value; 
        }
    }
    var q8 = document.fm.q8;
    length = q8.length;

    for(i=0; i<length; i++){
        if(q8[i].checked){
            q8Value = q8[i].value; 
        }
    }

    var q9 = document.fm.q9;
    length = q9.length;

    for(i=0; i<length; i++){
        if(q9[i].checked){
            q9Value = q9[i].value; 
        }
    }

    var q10 = document.fm.q10;
    length = q10.length;

    for(i=0; i<length; i++){
        if(q10[i].checked){
            q10Value = q10[i].value; 
        }
    }

    score(q1Value, q2Value, q3Value, q4Value, q5Value, q6Value, q7Value, q8Value, q9Value, q10Value);
}

function score(q1Value, q2Value, q3Value, q4Value, q5Value, q6Value, q7Value, q8Value, q9Value, q10Value){
    var count = 0;
    var countcolor="";
    var countText="";
    
    if(q1Value == "false"){
        count++;    
    }

    if(q2Value == "Integer"){
        count++;    
    }
    
    if(q3Value == "break"){
        count++;    
    }

    if(q4Value == "a10"){
        count++;    
    }

    if(q5Value == "c3"){
        count++;    
    }

    if(q6Value == "cc3"){
        count++;    
    }

    if(q7Value == "catch"){
        count++;    
    }

    if(q8Value == "finally"){
        count++;    
    }

    if(q9Value == "hellow"){
        count++;    
    }

    if(q10Value == "tt"){
        count++;
    }
    

    if(count <= 6)
    {
       confirm("Fail");
    }
  else{
	  confirm("pass");
  }


   /* var div3 = document.getElementById("disResult");
    div3.style.display = "block";
    document.getElementById("result").innerHTML = "Congratulations, <span>" + fullname + "</span><br><br>" 
                                                + "You scored : (<small style='color:"+countcolor+"'>" + count + "</small> / 10)<span style='color:"+countcolor+"'>"+countText +"</span>"
                                                + "<br><br><div><a href='index.html' class='successlink'>Go to home page.</a></div>";*/
}