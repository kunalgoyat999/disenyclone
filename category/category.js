const crs=document.querySelector(".carousel");
let slider=[];
let slideIndex=0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex=0;
    }
    // creating DOM Element
    let slide=document.createElement("div");
    let img=document.createElement("img");
    let content=document.createElement("div");
    let h1=document.createElement("h1");
    let p=document.createElement('p');

    // attaching all element
    img.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(img);
    crs.appendChild(slide);

    // setting up image
    img.src=movies[slideIndex].image;
    slideIndex++;

    // setting element className
    slide.className='slider';
    content.className='slide-content';
    h1.className="movie-title";
    p.className="movie-des"
    slider.push(slide);

    // add sliding effect
    if(slider.length){
        slider[0].style.marginLeft=`calc(-${ 100 *(slider.length-2)}% - ${30*(slider.length-2)}px)`;

    }
}
for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);