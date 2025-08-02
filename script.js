


function Validate()
{
const name=document.getElementById("Name").value;
const email=document.getElementById("Email").value;
const pwd=document.getElementById("PWD").value;
const cpwd=document.getElementById("CPWD").value;
const agree = document.getElementById("agree").checked;

const nameError=document.getElementById("name-error");
const emailError=document.getElementById("email-error");
const pwdError=document.getElementById("pwd-error");
const cpwdError=document.getElementById("cpwd-error");
const agreeError= document.getElementById("agree-error");

nameError.textContent="";
emailError.textContent="";
pwdError.textContent="";
cpwdError.textContent="";
agreeError.textContent = "";

let isValid = true;


if(name==null || name=="")
{
nameError.textContent='Enter the name';
isValid = false;
}
if (email == "" || !email.includes("@") || !email.includes(".")) {
emailError.textContent = "Enter a valid email address.";
isValid = false;
}

if (pwd == "" || !pwd.length >= 6  ) {
pwdError.textContent = "Enter a valid password.";
isValid = false;
}
else if (pwd.match(/[A-Z]/g) && pwd .match(/[a-z]/g) && pwd.match(
                    /[0-9]/g) ){
 pwdError.textContent=" Its correct";
    isValid = true;
}
else {
 cpwdError.textContent=" Passwords Match";
    isValid = true;
}

 if(cpwd == ""){
cpwdError.textContent = "Enter a valid password.";
isValid = false;
 } 
 else if(cpwd!=pwd) {
 cpwdError.textContent=" Passwords not Match";
 isValid = false;
}
else {
 cpwdError.textContent=" Passwords Match";
    isValid = true;
}

if (!agree) {
agreeError.textContent = "Please agree to the above information.";
isValid = false;
}

if (isValid) {
alert("Form submitted successfully!");
return true;
}
else 
{
return false;
}
}



   