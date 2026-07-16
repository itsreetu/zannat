const form = document.getElementById("appointmentForm");

let passwordAttempts = 0;

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.querySelectorAll(".error").forEach(function(item){
        item.innerHTML="";
    });

    document.getElementById("successMessage").innerHTML="";

    let valid=true;

    let fname=document.getElementById("fname").value.trim();

    if(fname==="" || !/^[A-Za-z]+$/.test(fname)){
        document.getElementById("fnameError").innerHTML="Only alphabets allowed";
        valid=false;
    }

    let lname=document.getElementById("lname").value.trim();

    if(lname==="" || !/^[A-Za-z]+$/.test(lname)){
        document.getElementById("lnameError").innerHTML="Only alphabets allowed";
        valid=false;
    }

    let email=document.getElementById("email").value.trim();

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email==="" || !emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="Enter valid email";
        valid=false;
    }

    let password=document.getElementById("password").value;

    if(password===""){
        passwordAttempts++;

        if(passwordAttempts<=3){
            document.getElementById("passwordError").innerHTML=
            "Password required. Attempt "+passwordAttempts+" of 3";
        }

        if(passwordAttempts>=3){
            document.getElementById("passwordError").innerHTML=
            "Maximum password attempts reached!";
        }

        valid=false;
    }
    else{
        passwordAttempts=0;
    }

    let gender=document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        document.getElementById("genderError").innerHTML="Select one gender";
        valid=false;
    }

    let services=document.querySelectorAll(".service");

    let checked=false;

    services.forEach(function(service){
        if(service.checked){
            checked=true;
        }
    });

    if(!checked){
        document.getElementById("serviceError").innerHTML="Select at least one service";
        valid=false;
    }

    let department=document.getElementById("department").value;

    if(department===""){
        document.getElementById("departmentError").innerHTML="Select department";
        valid=false;
    }

    let description=document.getElementById("description").value.trim();

    if(description.length<20){
        document.getElementById("descriptionError").innerHTML=
        "Minimum 20 characters required";
        valid=false;
    }

    if(valid){

        document.getElementById("successMessage").innerHTML=
        "Appointment Registration Completed Successfully!";

        form.reset();
    }

});