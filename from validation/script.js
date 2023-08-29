// click event 
function checkFromValid() {
    let fn =  document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let male =  document.getElementById("male").checked;
    let female =  document.getElementById("female").checked;
    // let ar = document.getElementById("adr").value
    if(fn==""||fn==null){
        document.getElementById("msg1").innerHTML="Enter Frist Name"
        return false
    }else if(ln==""||ln==null){
        document.getElementById("msg2").innerHTML="Enter Last Name"
        return false
    }
    else if(male == false && female == false){
        document.getElementById("msg3").innerHTML="Select Gender"
        return false
    }
    // else if(adr==""|| ar== null){
    //     document.getElementById("msg4").innerHTML="Enter your adderss"
    // }
    
}

// blur event
// frist name and last name
function blnkCheck(balnk,msg) {
    if(balnk.value==""||balnk.value==null){
        document.getElementById(msg).innerHTML="invalid value"
        return false
    }
}
// check box and radio button
function checkradio(check,msg){
    if(check.checked == false){
        document.getElementById(msg).innerHTML="select value"
        return false
    }
    else{
        document.getElementById(msg).innerHTML=""
        return false
    }
}

// key board event
function nameValid(checkname,msg) {
    let regEx = /^[a-zA-z]*$/
    if(!(regEx.test(checkname.value))||checkname.value.length<2){
        document.getElementById(msg).innerHTML="Enter proper name"
        return false
    }
    else{
        document.getElementById(msg).innerHTML=""
    }
}