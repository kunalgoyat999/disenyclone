const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

      // attaching all elements
      imgElement.appendChild(document.createTextNode(''));
      h1.appendChild(document.createTextNode(movies[slideIndex].name));
      p.appendChild(document.createTextNode(movies[slideIndex].des));
      content.appendChild(h1);
      content.appendChild(p);
      slide.appendChild(content);
      slide.appendChild(imgElement);
      carousel.appendChild(slide);

        // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
    
}

for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// /// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

displaycards()

function displaycards(){
// recommended 
    Rcard.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector(".card-container").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

// Thriller movies
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})


// Latest & Trending
Lcard.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t3-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

// Popular in Biopic
PopularBioPic.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t4-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

 // New Movies for You
 NewMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t5-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

  // Top Rated on IMDb
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t6-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

    // Disney Movies
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t7-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})
   // Best of Superheroes
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t8-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

    // Popular Movies
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t9-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})

  // Exclusive Indian Movies
ThrillerMovies.map(function(ele,index){
    let cdiv = document.createElement("div")
    let cdiv1 = document.createElement("div")
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
    document.querySelector("#t10-m").append(cdiv)

      cdiv.className="card"
      cdiv1.className="card-body"
      cimg.className="card-img"
      ch2.className = "name"
      ch6.className="des"
      cbtn.className="watchlist-btn"
})
}


// card sliders

let cardContainers =document.querySelectorAll('.card-container')
let preBtns = document.querySelectorAll('.pre-btn')
let nxtBtns = document.querySelectorAll('.nxt-btn')

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

// top-slider/main slider

let McardContainers =document.querySelectorAll('.carousel-container')
let MpreBtns = document.querySelectorAll('#carousel-pre-btn')
let MnxtBtns = document.querySelectorAll('#carousel-nxt-btn')

McardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    // let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        // item.scrollLeft += containerWidth - 200;
        slideIndex++;
    })

    preBtns[i].addEventListener('click', () => {
        // item.scrollLeft -= containerWidth + 200;
        slideIndex--;
    })
})

