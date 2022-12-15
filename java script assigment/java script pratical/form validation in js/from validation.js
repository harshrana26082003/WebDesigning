function form_valid(){
    let fname=document.form1.fname.value;
    if(fname ==""||fname ==null){
        document.getElementById("fname_msg").innerHTML="please enter your first name"
        return false;
    }else if(!isNaN(fname)){
        document.getElementById("fname_msg").innerHTML="please enter only alaphabet"
        return false;
    }

    let Mname=document.form1.Mname.value;
    if(Mname ==""||Mname ==null){
        document.getElementById("Mname_msg").innerHTML="please enter your Middle name"
        return false;
    }else if(!isNaN(Mname)){
        document.getElementById("Mname_msg").innerHTML="please enter only alaphabet"
        return false;
    }

    let Lname=document.form1.Lname.value;
    if(Lname ==""||Lname ==null){
        document.getElementById("Lname_msg").innerHTML="please enter your Last name"
        return false;
    }else if(!isNaN(Lname)){
        document.getElementById("Lname_msg").innerHTML="please enter only alaphabet"
        return false;
    }

    let Adders=document.form1.Adders.value;
    if(Adders ==""||Adders ==null){
        document.getElementById("Adders_msg").innerHTML="please enter your Adders"
        return false;
    }

  

    let date=document.form1.date.value;
    if(date ==""||date ==null){
        document.getElementById("date_msg").innerHTML="please enter your Date of birth"
        return false;
    }

    let male = document.form1.gen[0].checked;
    let female = document.form1.gen[1].checked;

    if(male == false && female == false){
        document.querySelector("gender_msg").innerHTML ="select gender";
        return false;
    }

   let Experiance = document.form1.Experiance.value;

   if(Experiance == -1){
    document.getElementById("drop_msg").innerHTML ="please select your Experiance"
    return false;
   }

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



   let mail=document.form1.mail.value
   if(mail==""){
    document.getElementById("msg_email").innerHTML ="Enter Your e-mail"
    return false
   }
   else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
    document.getElementById("msg_email").innerHTML =" Your e-mail is not valid"
    return false;
   }
   else{
   return true;
   }
}
   function check_pass(){

    let password=document.getElementById("pass");
            if(password.type =="password"){
                password.type ="text";
            }
            else{
                password.type = "password"
            }
            let pwd=document.from1.pass.value;
                 if(pwd == ""){
        document.getElementById("pass_msg").innerHTML="enter your password"
        return false
    }
   }
   
    



