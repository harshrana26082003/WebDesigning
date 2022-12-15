function form_valid(){

let mobile = document.form1.nmo.value;
if (mobile == ""){
 document.getElementById("msg_mno").innerHTML="enter your mobile no";
 return false
}
else if (isNaN (mobile)){
 document.getElementById("msg_mno").innerHTML=" you enter alaphabets";
 return false;
}
else if(mobile.length<10){
 document.getElementById("msg_mno").innerHTML=" mobile no is less then 10 digites";
 return false;
}
}