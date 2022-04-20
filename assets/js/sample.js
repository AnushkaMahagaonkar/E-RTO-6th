/*function sample()
{
	alert("hii");
}*/
function check()
{
    q1Value = q2Value = q3Value = q4Value = q5Value = q6Value = q7Value = q8Value = q9Value = q10Value = "";
    var q1 = document.fm.q1;
	document.write(q1);
    length = q1.length;
}
   /* for(i=0; i<length; i++){
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
			console.log(q5Value);
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
/*function score(q1Value, q2Value, q3Value, q4Value, q5Value, q6Value, q7Value, q8Value, q9Value, q10Value){
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
    

    if(count <= 4)
    {
        countcolor="#e8160c";
        countText="Poor";

    }
    else if(count > 4 && count <= 6)
    {
        countcolor="#bbe418";
        countText="Average";

    }
    else if(count > 6 && count <= 9)
    {
        countcolor="#23cc0e";
        countText="Good";

    }
    else if(count === 10)
    {
        countcolor="#056f03";
        countText="Excellent";

    }


    var div3 = document.getElementById("disResult");
    div3.style.display = "block";
    /*document.getElementById("result").innerHTML = "Congratulations, <span>" + fullname + "</span><br><br>" 
                                                + "You scored : (<small style='color:"+countcolor+"'>" + count + "</small> / 10)<span style='color:"+countcolor+"'>"+countText +"</span>"
                                                + "<br><br><div><a href='index.html' class='successlink'>Go to home page.</a></div>";*/
	//alert("pass");
}