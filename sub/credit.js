function showpopUp(){
    document.querySelector(".success").classList.add("showSuccess");
    document.querySelector(".overlay").classList.add("showoverlay");
}
function closepopUp(){
    document.querySelector(".success").classList.remove("showSuccess");
    document.querySelector(".overlay").classList.remove("showoverlay");
    window.location.href="index.html" ;
}

document.querySelector("form").addEventListener("submit",cardDetail);

function cardDetail(){
    event.preventDefault();

        var names=document.getElementById("name").value;
        var numbers=document.getElementById("number").value;
        var dates=document.getElementById("date").value;
        var cvvs=document.getElementById("cvv").value;


    if(number==8){
        alert("card number should be 8 character")
    }

    var name="kamal verma";
    var num=12345678;
    var date="24/23";
    var cvv=123;

    if(name==names&&num==numbers&&date==dates&&cvv==cvvs){
        showpopUp();         
    }else{
        alert("worng card detal!")
    }
    document.querySelector("form").reset();
}