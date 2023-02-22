console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"Lavender Haze", filePath:"songs/1.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Maroon", filePath:"songs/2.mp3", coverPath:"covers/Tay.jfif"}, 
    {songName:"Anti-Hero", filePath:"songs/3.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Snow On The Beach", filePath:"songs/4.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"You're On Your Own, Kid", filePath:"songs/5.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Midnight Rain", filePath:"songs/6.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Question...?", filePath:"songs/7.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Vigilante Shit", filePath:"songs/8.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Bejeweled", filePath:"songs/9.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Labyrinth", filePath:"songs/10.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Karma", filePath:"songs/11.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Sweet Nothing", filePath:"songs/12.mp3", coverPath:"covers/Tay.jfif"},
    {songName:"Mastermind", filePath:"songs/13.mp3", coverPath:"covers/Tay.jfif"},
   
]
songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();
//Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    MyProgressBar.value=progress;
})

MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
}) 

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=13){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})