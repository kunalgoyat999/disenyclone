function showpopUps(){
    // event.preventDefault();
    document.querySelector(".overlays").classList.add("showoverlays");
    document.querySelector(".logins").classList.add("showlogins");
}

function closepopUpss(){
    document.querySelector(".overlays").classList.remove("showoverlays");
    document.querySelector(".logins").classList.remove("showlogins");
}


document.querySelector("form").addEventListener("submit",submitForm);

function submitForm(event){
    event.preventDefault();
    console.log("hii")
    var num=document.getElementById("num").value;
    console.log(num)
    if(num.length==10){
        
        localStorage.setItem("login-data",num);
        window.location.href="./otp.html";
        
    }else{
        alert("Invalid numbers Enter 10 digit numbers plz...")
    }
    document.getElementById("number").value=""
  }
