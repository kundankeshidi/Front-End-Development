document.querySelector("#btn").onclick=function(){
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let user=document.getElementById("uname").value;
    let pwd=document.getElementById("pass").value;
    let cpwd=document.getElementById("cpass").value;
    let courseTiming=document.getElementById("ctime").value;
    let mobNo=document.getElementById("mob").value;
    let email=document.getElementById("mail").value;    
        
    if(fname==""){
        document.querySelector("#ferr").innerHTML="please enter firstname";
        return false;
    }
    else if(!fname.match(/^[a-zA-Z]+$/)){
        document.querySelector("#ferr").innerHTML="Invalid";
        return false;
    }
    else{
        document.querySelector("#ferr").innerHTML="";
    }
        
    if(lname==""){
            document.querySelector("#lerr").innerHTML="please enter lastname";
            return false;
        }
    else if(!lname.match(/^[a-zA-Z]+$/)){
        document.querySelector("#lerr").innerHTML="Invalid";
        return false;
    }
    else{
        document.querySelector("#lerr").innerHTML="";
        
    }
    
    if(user==""){
        document.querySelector("#uerr").innerHTML="please enter username";
        return false;
    }
    else if(!user.match(/^[a-zA-Z0-9_\-\.]+$/)){
        document.querySelector("#uerr").innerHTML="Invalid";
        return false;
    }
    else{
        document.querySelector("#uerr").innerHTML="";
    }
        
    if(pwd==""){
        document.querySelector("#perr").innerHTML="please enter password";
        return false;
    }
    
    else{
        document.querySelector("#perr").innerHTML="";
    }
        
        
    if(cpwd==""){
        document.querySelector("#cperr").innerHTML="please enter confirm password";
        return false;
    }
    
    else{
        document.querySelector("#cperr").innerHTML="";
    }
        
    if(cpwd!=pwd){
        document.querySelector("#cperr").innerHTML="Mismatch password";
        return false;
    }
    
    else{
        document.querySelector("#cperr").innerHTML="";
    }
        
        
    let gender="";
    for(let ele of document.getElementsByName("gender")){
        if(ele.checked){
            gender=ele.value;
        }
    }    
    if(gender==""){
        document.querySelector("#rerr").innerHTML="please select gender";
        
        return false;
    }
    
    else{
        document.querySelector("#rerr").innerHTML="";
        console.log(gender)
    }
        
    let courses=[];
    for(let ele of document.getElementsByName("courses")){
        if(ele.checked){
            courses.push(ele.value);
        }
    }    
    if(courses==""){
        document.querySelector("#chkerr").innerHTML="please select atleast one course";
        
        return false;
    }
    
    else{
        document.querySelector("#chkerr").innerHTML="";
        console.log(courses);
    }    
    
    if(courseTiming==""){
        document.querySelector("#cterr").innerHTML="please select course timing";
        return false;
    }
    
    else{
        document.querySelector("#cterr").innerHTML="";
    }
        
    if(mobNo==""){
        document.querySelector("#moberr").innerHTML="please enter MobileNo";
        return false;
    }
    else if(!mobNo.match(/^[0-9]{10}$/)){
        document.querySelector("#moberr").innerHTML="Invalid";
        return false;
    }
    else{
        document.querySelector("#moberr").innerHTML="";
    }
        
    if(email==""){
        document.querySelector("#merr").innerHTML="please enter MailId";
        return false;
    }
    else if(!email.match(/^(.+)@(.+)\.(.+)$/)){
        document.querySelector("#merr").innerHTML="Invalid";
        return false;
    }
    else{
        document.querySelector("#merr").innerHTML="";
    }    
        
    }