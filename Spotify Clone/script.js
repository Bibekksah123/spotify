
let countplay=0;
 let audioement=new Audio('songs/1.mp3');

let masterplay=document.getElementById('master');
let progressbar=document.getElementById('progressbar');
let gift=document.querySelector('#giftbar');
let song=[
    {
        songname:'salame isque',
        Filepath:'songs/1.mp3',
        cover:'covers/1.jpg'
    },
    {
        songname:'salame isque',
        Filepath:'songs/2.mp3',
        cover:'covers/2.jpg'
    },
    {
        songname:'salame isque',
        Filepath:'songs/3.mp3',
        cover:'covers/3.jpg'
    },
    {
        songname:'salame isque',
        Filepath:'songs/4.mp3',
        cover:'covers/4.jpg'
    },
    {
        songname:'salame isque',
        Filepath:'songs/5.mp3',
        cover:'covers/5.jpg'
    },
    {
        songname:'salame isque',
        Filepath:'songs/6.mp3',
        cover:'covers/6.jpg'
    },
]
masterplay.addEventListener("click",()=>{
    if(audioement.paused || audioement.currentTime<0){
        audioement.play();
        gift.style.opacity=1;
     
    }else{
        audioement.pause();
        gift.style.opacity=0;
    }
})
audioement.addEventListener("timeupdate",()=>{
  
 progress=parseInt((audioement.currentTime/audioement.duration)*100);

progressbar.value=progress;
})
progressbar.addEventListener("change",()=>{
    audioement.currentTime=progressbar.value*audioement.duration/100;
})


