const contactForm=document.getElementById("contactForm");

contactForm.addEventListener("submit",function(e){
    e.preventDefault();
    let isValid=true;

    const nameInput =document.getElementById("name");
    const emailInput =document.getElementById("email");
    const messageInput=document.getElementById("message");

    // Name prob 
    if(nameInput.value.trim() ===""){
document.getElementById("nameError").style.display="block";
isValid=false;
}else{
    document.getElementById("nameError").style.display="none";
}

// email 
const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!emailInput.value.match(emailPattern)){
    document.getElementById("emailError").style.display="block";
    isValid=false;
}else{document.getElementById("emailError").style.display="none";}

// message prob 
if(messageInput.value.trim()===""){
    getElementById("messageError").style.display="block";
    isValid=false;
}else{document.getElementById("messageError").style.display="none";}


if(isValid){
    alert("Your message has been sent successfullu!");
    contactForm.submit();
}

});