const play = document.getElementById("play");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const music = document.querySelector("audio");
const img = document.querySelector("img");

const songs = [
    {
        name:"honest-1",
        title:"honest",
        artist:"Justine Beiber"
    },
    {
        name:"lover-3",
        title:"lover",
        artist:"taylor Swift"
    },
    {
        name:"lonely-2",
        title:"lonely",
        artist:"Akon"
    }
]

isPlaying = false;
const playMusic= ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anim")

}
const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anim")

}
play.addEventListener("click",()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() :playMusic();
})

//changing music
const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src = "image/"+songs.name+".jpg"
};




let songIndex = 0;
prev.addEventListener("click",()=>{
    songIndex = (songIndex+1)%songs.length;
    loadSong(songs[songIndex]);

})
next.addEventListener("click",()=>{
    songIndex = (songIndex+1+songs.length)%songs.length;
    loadSong(songs[songIndex]);

})