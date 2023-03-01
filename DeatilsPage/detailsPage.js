
var obj ={

    episodes:[

        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1385/1471385-h-cabfad63ce98",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1385/1471385-h-cabfad63ce98",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        },
        {
            imgSrc:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1574/1471574-h-b2da94061a0a",
            episodeNo:"S1 E764",
            episodeDate:"17 Feb"
        }



    ]




}


var episodesObjArr =obj.episodes;


// displayData(episodesObjArr);

// function displayData(arr){



//     arr.map((e,i)=>{

//         var div =document.createElement("div");

//         div.setAttribute("class","card");

//         var img =document.createElement("img");
//         img.setAttribute("class","card-img")
//         img.src =e.imgSrc;

//         var cardBody =document.createElement("div");
//         cardBody.setAttribute("class","card-body");


//         var actionContent =document.createElement("div");
//         actionContent.setAttribute("class","action-content");

//         var playIcon =document.createElement("span");
//         playIcon.setAttribute("class","play-btn");
//         playIcon.innerHTML =`<i class="fa-solid fa-play"></i>`;

//         var episodeNo =document.createElement("span");
//         episodeNo.setAttribute("class","episode-no");

//         episodeNo.textContent = e.episodeNo;

//         var episodeDate =document.createElement("span");
//         episodeDate.setAttribute("class","episode-date");

//         episodeDate.textContent =e.episodeDate;


//         var hoverTxt =document.createElement("div");
//         hoverTxt.setAttribute("class","hover-txt");

//         var watchListBtn =document.createElement("button");
//         watchListBtn.setAttribute("class","hover-btn")
//         // watchListBtn.textContent ="Add to watchList";
//         watchListBtn.innerHTML =`<i class="fa-solid fa-plus"></i>Add to Watchlist`

//         hoverTxt.append(watchListBtn);

//         actionContent.append(playIcon,episodeNo,episodeDate,hoverTxt);

//         cardBody.append(actionContent);


//         div.append(img,cardBody);


//        var cardContainer = document.querySelector(".episodes-container > .card-container");

//         cardContainer.append(div);



//     })


// }




    










// card slider

var videoDetailsObj =JSON.parse(localStorage.getItem("view-det")) || {};

var moreLikeArr =videoDetailsObj.arr;
var video =videoDetailsObj.ele;

displayData(moreLikeArr);
function displayData(arr){

    arr.map(function(ele,index){


        let cdiv = document.createElement("div")
        let cdiv1 = document.createElement("div")
        // cdiv1.setAttribute("id","card-body")
        let cimg = document.createElement("img")
        cimg.src = ele.image
        let ch2 = document.createElement("h2")
        ch2.textContent=ele.h2
        let ch6 = document.createElement("h6")
        ch6.textContent = ele.h6
        let cbtnp = document.createElement("button")
        cbtnp.textContent="WATCH MOVIE"
         let cbtn = document.createElement("button")
         cbtn.textContent="add to watchlist"
        cdiv1.append(ch2,ch6,cbtn)
        cdiv.append(cimg,cdiv1)
        document.querySelector(".card-container-1").append(cdiv)
    
          cdiv.className="card-1"
          cdiv.addEventListener("click",function(){
            redirectToMovie(index);
          })
          cdiv1.className="card-body-1"
          cimg.className="card-img-1"
          ch2.className = "name-1"
          ch6.className="des-1"
          cbtn.className="watchlist-btn-1"



        document.querySelector("#img-container > img").src =video.image;
        document.querySelector(".title > h1").textContent =video.h2;
        document.querySelector(".content-description").textContent =video.h6;

        var hr =Math.round((Math.random() * 1)+1);
        var min =Math.round(Math.random() * 60);

        document.getElementById("timestamp").textContent =`${hr} hrs ${min} mins`


    })



}


function redirectToMovie(index){
    var obj =videoDetailsObj.arr[index];
   videoDetailsObj.ele =obj;
   console.log(videoDetailsObj)
   localStorage.setItem("view-det",JSON.stringify(videoDetailsObj));
   window.location.href ="detailsPage.html"
}













let carContainer =[ ...document.querySelectorAll(".card-container-1")];
let prevBtn =[...document.querySelectorAll(".prev-btn")];
let nextBtn =[...document.querySelectorAll(".next-btn")];


carContainer.forEach((e,i)=>{
    let containerDimension =e.getBoundingClientRect();
    let containerWidth =containerDimension.width;

    nextBtn[i].addEventListener("click",()=>{
        e.scrollLeft +=containerWidth - 200;
    })
    prevBtn[i].addEventListener("click",()=>{
        e.scrollLeft -=containerWidth + 200;
    })

})



// share animation

document.getElementById("share-btn").addEventListener("mouseover",()=>{
   
    let shareContainer =document.getElementById("social-container");
    let classNames =shareContainer.classList;
  
    classNames.add("share-animate")
   
})

document.getElementById("share-btn").addEventListener("mouseleave",()=>{
    let shareContainer =document.getElementById("social-container");
    let classNames =shareContainer.classList;
    
    classNames.toggle("share-animate")

})