
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


displayData(episodesObjArr);

function displayData(arr){



    arr.map((e,i)=>{

        var div =document.createElement("div");

        div.setAttribute("class","card");

        var img =document.createElement("img");
        img.setAttribute("class","card-img")
        img.src =e.imgSrc;

        var cardBody =document.createElement("div");
        cardBody.setAttribute("class","card-body");


        var actionContent =document.createElement("div");
        actionContent.setAttribute("class","action-content");

        var playIcon =document.createElement("span");
        playIcon.setAttribute("class","play-btn");
        playIcon.innerHTML =`<i class="fa-solid fa-play"></i>`;

        var episodeNo =document.createElement("span");
        episodeNo.setAttribute("class","episode-no");

        episodeNo.textContent = e.episodeNo;

        var episodeDate =document.createElement("span");
        episodeDate.setAttribute("class","episode-date");

        episodeDate.textContent =e.episodeDate;


        var hoverTxt =document.createElement("div");
        hoverTxt.setAttribute("class","hover-txt");

        var watchListBtn =document.createElement("button");
        watchListBtn.setAttribute("class","hover-btn")
        // watchListBtn.textContent ="Add to watchList";
        watchListBtn.innerHTML =`<i class="fa-solid fa-plus"></i>Add to Watchlist`

        hoverTxt.append(watchListBtn);

        actionContent.append(playIcon,episodeNo,episodeDate,hoverTxt);

        cardBody.append(actionContent);


        div.append(img,cardBody);


       var cardContainer = document.querySelector(".episodes-container > .card-container");

        cardContainer.append(div);



    })


}




    










// card slider

let carContainer =[ ...document.querySelectorAll(".card-container")];
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