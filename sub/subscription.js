function ShowPopup(){
    event.preventDefault();
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
    document.querySelector(".h4tag").classList.add("showh4");
}


function closepopUp(){
    document.querySelector(".overlay").classList.remove("overlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopup(){
    document.querySelector(".success").classList.remove("showSuccess");
var otp=JSON.parse(localStorage.getItem("otp"));
var no =JSON.parse(localStorage.getItem("user-number"));
    if(otp==val){
        let num =JSON.parse(localStorage.getItem("login-data")) || ""
           
    }
}


var userNum=JSON.parse(localStorage.getItem("user-number"));
document.getElementById("numbers").textContent="+91 "+ userNum;


