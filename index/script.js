document.getElementById("an").innerHTML = (new Date().getFullYear()); 
/**************************************/


const slidingNewsLetters1 = document.querySelector('.title1')
const slidingNewsLetters2 = document.querySelector('.title2')
const slidingNewsLetters3 = document.querySelector('.title3')
const slidingNewsLetters4 = document.querySelector('.title4')


window.addEventListener('scroll',()=>{
  const {scrollTop,clientHeight} = document.documentElement;
  const topElementToTopViewport1 = slidingNewsLetters1.getBoundingClientRect().top;
  const topElementToTopViewport2 = slidingNewsLetters2.getBoundingClientRect().top;
  const topElementToTopViewport3 = slidingNewsLetters3.getBoundingClientRect().top;
  const topElementToTopViewport4 = slidingNewsLetters4.getBoundingClientRect().top;

  if(scrollTop > (scrollTop+topElementToTopViewport1).toFixed()-clientHeight*0.5){
    slidingNewsLetters1.classList.add('active1')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport2).toFixed()-clientHeight*0.5){
    slidingNewsLetters2.classList.add('active2')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport3).toFixed()-clientHeight*0.5){
    slidingNewsLetters3.classList.add('active3')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport4).toFixed()-clientHeight*0.5){
    slidingNewsLetters4.classList.add('active4')
  }
})

/*******************************/
const b = document.querySelector(".container-title");
const TL1 = new TimelineMax({pause : true});

TL1
.from(b,1, {x: -1000, opacity : 0})

TL1.play()

/**********************/
document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
   }
 })