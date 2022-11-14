const changeOne = document.querySelector(".change-one");
const changeTwo = document.querySelector(".change-two");
const changeThree = document.querySelector(".change-three");
const autoScroll = document.querySelector(".auto-scroll");
const rightBtn = document.querySelector(".right-btn");
const trendMovies = document.querySelector(".trending-movies");
const leftBtn = document.querySelector(".left-btn");
const lateMovies=document.querySelector('.movies')
const rightBtnm=document.querySelector('.right-btnm')
const leftBtnm=document.querySelector('.left-btnm')
const lateSeries=document.querySelector('.series')
const rightSeries=document.querySelector('.right-series')
const leftSeries=document.querySelector('.left-series')
const lateAnime=document.querySelector('.Anime')
const rightAnime=document.querySelector('.right-anime')
const leftAnime=document.querySelector('.left-anime')
const menuBtn=document.querySelector('.menu-btn')
const mobileMenu=document.querySelector('.moblie-menu')
const closeBtn=document.querySelector('.close')
const smovies=document.querySelector('.s-movies')
const filter=document.querySelector('.filter')
const searchIcon=document.querySelector('.sm')
const deadBtn=document.querySelector('.video-btn')
const videoImg=document.querySelector('.video-img')
const deadVideo=document.querySelector('.deadman-vid')
const eptwoBtn=document.querySelector('.video-btntwo')
const videoImgtwo=document.querySelector('.video-imgtwo')
const deadVideotwo=document.querySelector('.deadman-vidtwo')
const depisodeOne=document.querySelector('.depisode-one')
const depisodeTwo=document.querySelector('.depisode-two')
const butOne=document.querySelector('.but-one')
const butTwo=document.querySelector('.but-two')
const butThree=document.querySelector('.but-three')
const depisodeThree=document.querySelector('.depisode-three')
const epthreeBtn=document.querySelector('.video-btnthree')
const videoImgthree=document.querySelector('.video-imgthree')
const deadVideothree=document.querySelector('.deadman-vidthree')
const depisodeFour=document.querySelector('.depisode-four')
const epfourBtn=document.querySelector('.video-btnfour')
const videoImgfour=document.querySelector('.video-imgfour')
const deadVideofour=document.querySelector('.deadman-vidfour')
const butFour=document.querySelector('.but-four')







function episodeone(){
  if (depisodeOne.style.display==='block') {
    
  } else {depisodeOne.style.display='block'
  depisodeTwo.style.display='none'
  depisodeThree.style.display='none'
  depisodeFour.style.display='none'
  deadVideotwo.pause()
  deadVideothree.pause()
  
  butTwo.style.background="yellow"
  butThree.style.background="yellow"
  butFour.style.background='yellow'
  }
}






function episodetwo(){
  if ( depisodeTwo.style.display==='block') {
    
  } else { depisodeTwo.style.display='block'
       depisodeOne.style.display='none'
       depisodeThree.style.display='none'
       depisodeFour.style.display='none'
       deadVideo.pause()
       deadVideothree.pause()
       butOne.style.background="lightyellow"
       butTwo.style.background="lightyellow"
       butThree.style.background="yellow"
       butFour.style.background="yellow"
      }
  }


function episodethree(){
  if ( depisodeThree.style.display==='block') {
    
  } else { depisodeThree.style.display='block'
           depisodeTwo.style.display='none'  
           depisodeOne.style.display='none'
           depisodeFour.style.display='none'
           deadVideo.pause()
           deadVideotwo.pause()
           deadVideofour.pause()
           butOne.style.background="lightyellow"
           butTwo.style.background="lightyellow"
           butFour.style.background="yellow"
           butThree.style.background='lightyellow'
  }
}

function episodefour(){
  if ( depisodeFour.style.display==='block') {
    
  } else { depisodeFour.style.display='block'
           depisodeThree.style.display='none'
           depisodeTwo.style.display='none'  
           depisodeOne.style.display='none'
           deadVideo.pause()
           deadVideotwo.pause()
           deadVideothree.pause()
           butOne.style.background="lightyellow"
           butTwo.style.background="lightyellow"
           butThree.style.background='lightyellow'
           butFour.style.background='lightyellow'
  }
}




function playpause(){
  if (deadBtn.style.display==='none') {
    
    
  } else {deadBtn.style.display='none';
  deadVideo.style.display="block";
  videoImg.style.display="none";
  deadBtn.style.display='none';
  deadVideo.play()

  
  }
  
}


function playpausetwo(){
  if (eptwoBtn.style.display==='none') {
    
    
  } else {eptwoBtn.style.display='none';
  deadVideotwo.style.display="block";
  videoImgtwo.style.display="none";
  eptwoBtn.style.display='none';
 
   deadVideotwo.play()

  
  }
  
}

function playpausethree(){
  if (epthreeBtn.style.display==='none') {
    
  } else {epthreeBtn.style.display='none'
  deadVideothree.style.display="block";
  videoImgthree.style.display="none";
  epthreeBtn.style.display='none';
 
   deadVideothree.play()
  }
}

function playpausefour(){
  if (epfourBtn.style.display==='none') {
    
  } else {epfourBtn.style.display='none'
  deadVideofour.style.display="block";
  videoImgfour.style.display="none";
  epfourBtn.style.display='none';
 
   deadVideofour.play()
  }
}


const search=()=>{
const searchBox =document.getElementById("search-item").value.toUpperCase ();
const videos=document.getElementById(".search-movies")
const product=document.querySelectorAll(".products")
const vname=document.getElementsByTagName("h3")


for(var i=0;i < vname.length; i++){
  let match =product[i].getElementsByTagName('h3')[0];

  if (match) {
   let textvalue= match.textContent ||match.innerHTML
 
   if( searchBox.length < 1){
    smovies.style.display="none"
  }else{smovies.style.display="block"
  
  }

   if (textvalue.toUpperCase().indexOf(searchBox)>-1) {
    product[i] .style.display="";
    
   }else{
    product[i] .style.display="none";
    
   }
    

  }
}

}


searchIcon.addEventListener("click",fill)

function fill(){
  if (filter.style.display==="block") {
      filter.style.display="none"
  } else {filter.style.display="block"
    
  }
}



menuBtn.addEventListener("click",menu)

function menu() {
  if (mobileMenu.style.left==="50%") {
      mobileMenu.style.left="100%"
    
  } else {mobileMenu.style.left="50%"
    
  }
}

closeBtn.addEventListener("click",close)
function close(){
  if (mobileMenu.style.left==="100%") {
    
  } else {mobileMenu.style.left="100%"
    
  }
  
}

 






function move() {
  if (trendMovies.style.left === "-99%") {
    trendMovies.style.left = "-159%";
    rightBtn.style.display = "none";
  } else {
    trendMovies.style.left = "-99%";
    leftBtn.style.display = "block";
  }
}

rightBtn.addEventListener("click", move);

leftBtn.addEventListener("click", left);

function left() {
  if (trendMovies.style.left === "-99%") {
    trendMovies.style.left = "1%";
    leftBtn.style.display = "none";
    rightBtn.style.display = "block";
  } else {
    trendMovies.style.left = "-99%";
    rightBtn.style.display = "block";
  }
}

rightBtnm.addEventListener("click", moveright);
function moveright() {
  if (lateMovies.style.left === "-99%") {
    lateMovies.style.left = "-159%";
    rightBtnm.style.display = "none";
  } else {
    lateMovies.style.left = "-99%";
    leftBtnm.style.display = "block";
  }
}

leftBtnm.addEventListener("click", moveleft);

function moveleft() {
  if (lateMovies.style.left === "-99%") {
    lateMovies.style.left = "1%";
    leftBtnm.style.display = "none";
    rightBtnm.style.display = "block";
  } else {
    lateMovies.style.left = "-99%";
    rightBtnm.style.display = "block";
  }
}


rightSeries.addEventListener("click",seriesright);

function seriesright() {
  if (lateSeries.style.left === "-99%") {
     lateSeries.style.left = "-159%";
    rightSeries.style.display = "none";
  } else {
    lateSeries.style.left = "-99%";
    leftSeries.style.display = "block";
  }
}

leftSeries.addEventListener("click",seriesleft);
function seriesleft() {
  if (lateSeries.style.left === "-99%") {
    lateSeries.style.left = "1%";
    leftSeries.style.display = "none";
    rightSeries.style.display = "block";
  } else {
    lateSeries.style.left = "-99%";
    rightSeries.style.display = "block";
  }
}



rightAnime.addEventListener("click",animeright);

function animeright() {
  if (lateAnime.style.left === "-99%") {
     lateAnime.style.left = "-159%";
    rightAnime.style.display = "none";
  } else {
    lateAnime.style.left = "-99%";
    leftAnime.style.display = "block";
  }
}

leftAnime.addEventListener("click",animeleft);
function animeleft() {
  if (lateAnime.style.left === "-99%") {
    lateAnime.style.left = "1%";
    leftAnime.style.display = "none";
    rightAnime.style.display = "block";
  } else {
    lateAnime.style.left = "-99%";
    rightAnime.style.display = "block";
  }
}