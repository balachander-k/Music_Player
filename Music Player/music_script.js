let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration');
let photo = document.querySelector('#singer_image');

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let all_song= [
    {
        name:"FIRST SONG",
        path:"audio/a.mp3",
        img:"Images/GV.jpg",
        artist:"GV PRAKASH KUMAR",
    },
    {
        name:"SECOND SONG",
        path:"audio/Arakkiyae.mp3",
        img:"Images/YUVAN.jpg",
        artist:"YUVAN SHANKAR RAJA",
    },
    {
        name:"THIRD SONG",
        path:"audio/Maattrraan.mp3",
        img:"Images/HARRI.jpg",
        artist:"HARRIS JAYARAJ",
    },
    {
        name:"FOURTH SONG",
        path:"audio/Meesaya.mp3",
        img:"Images/hip.jfif",
        artist:"HIP HOP TAMIZHA",
    }

];

function load_track(index_no)
{
    clearInterval(timer);
    reset_slider();

    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    photo.src =  all_song[index_no].img;
    artist.innerHTML = all_song[index_no].artist;

    timer = setInterval(range_slider,1000);
    total.innerHTML = all_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

function play_song()
{
    if (playing_song==false)
    {
        playsong();
    }
    else{
        pausesong();
    }
}

function reset_slider()
{
    slider.value = 0;
}

function playsong()
{
    track.play();
    playing_song = true;
    play.innerHTML= '<i class="fa fa-pause"></i>'

}
function pausesong()
{
    track.pause();
    playing_song = false;
    play.innerHTML= '<i class="fa fa-play"></i>'

}
function next_song()
{
    if(index_no<all_song.length -1)
    {
        index_no +=1;
        load_track(index_no);
        playsong();
    }
    else
    {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
function previous_song()
{
    
    if(index_no>0)
    {
        index_no -=1;
        load_track(index_no);
        playsong();
    }
    else
    {
        index_no = all_song.length;
        load_track(index_no);
        playsong();
    }
}
function change_duration()
{
    slider_position = track.duration * (slider.value /100);
    track.currentTime = slider_position;
}