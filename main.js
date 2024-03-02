import { songs } from './songs.js'


const showLibrary = () => {
    const asideMenu = document.querySelector(".aside-menu-player")
    const mainPlayer = document.querySelector(".main-player-container")

    mainPlayer.classList.toggle('main-hidden')
    asideMenu.classList.toggle('aside-hidden')
}

document.querySelector('#library').addEventListener('click', showLibrary)


const addSongsAside = () => {
    const asideSongContainer = document.querySelector('.aside-menu-player')

    let asideSongs = ''

    songs.forEach((song) => {
        const { id, artist, title, album } = song

        asideSongs += `
        <article class="aside-music" id="${id}">
            <img class="aside-music-photo" src="${album}" alt="">
            <div class="aside-music-info">
                <strong class="aside-music-title">${title}</strong>
                <p class="aside-music-artist">${artist}</p>
            </div>
        </article>
        `
    })

    asideSongContainer.innerHTML = asideSongs
}

addSongsAside()


const addCurrentSong = (album, artist, title, mp3, id) => {
    const songCurrently = document.querySelector('.song-container')

    let songCurrentlyContainer = `
    <article class="player-music-info">
        <img class="player-music-photo"
        src="${album}"
        alt="">
            <p>${artist}</p>
            <h1>${title}</h1>
            <audio src="${mp3}" id=${id}>
    </audio>
    </article>
    `
    songCurrently.innerHTML = songCurrentlyContainer
}


document.querySelectorAll('.aside-music').forEach((songSelected) => {
    songSelected.addEventListener('click', () => {
        const idArticle = songSelected.id
        const selectedSong = songs.find((song) => song.id === idArticle)

        const { id, artist, title, album, mp3 } = selectedSong

        addCurrentSong(album, artist, title, mp3, id)
    })

})

const currentAudio = document.querySelector('audio');
let currentSongIndex = -1;

const next = () => {
    if (currentSongIndex === -1) {
        currentSongIndex = 0;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }

    const { album, artist, title, mp3, id } = songs[currentSongIndex];

    addCurrentSong(album, artist, title, mp3, id);

    currentAudio.id = id;
    currentAudio.src = mp3

    console.log({ currentSongIndex });
};

const prev = () => {
    
    if (currentSongIndex === -1 || currentSongIndex === 'undefined') {
        currentSongIndex = songs.length - 1;
    } else {
        currentSongIndex = (currentSongIndex - 1) % songs.length;
    }

    const { album, artist, title, mp3, id } = songs[currentSongIndex];

    addCurrentSong(album, artist, title, mp3, id);

    currentAudio.id = id;
    currentAudio.src = mp3

    console.log({ currentSongIndex });
}

document.querySelector('#next').addEventListener('click', () => next())
document.querySelector('#prev').addEventListener('click', () => prev())
document.querySelector('#play').addEventListener('click', () => currentAudio.play())
document.querySelector('#pause').addEventListener('click', () => currentAudio.pause())








/*


const controllersAudio = () => {
    let songAudio = document.querySelector('audio')
    //console.log(songAudio)
    const playButton = document.querySelector('#play')
    //const nextButton = document.querySelector('#next')

    let songState = true
    playButton.addEventListener('click', () => {
        if (songState) {
            songAudio.pause()
            songState = false
        } else {
            songAudio.play()
            songState = true
        }

    
    })

    nextButton.addEventListener('click', () => {
        const actual = songs.find((songCurrently) => songCurrently.artist === 'Deftones')
        console.log(songs.indexOf(actual))
    })


}


const asideSong = document.querySelectorAll('.aside-music')
const songCurrently = document.querySelector('.song-container')

let songSelected = ''
asideSong.forEach((songPlay) => {
    songPlay.addEventListener('click', () => {
        const idSong = songPlay.id
        const songInfo = songs.find((song) => song.id === idSong)

        songSelected = `
        <article class="player-music-info">
            <img class="player-music-photo"
            src="${songInfo.album}"
            alt="">
                <p>${songInfo.artist}</p>
                <h1>${songInfo.title}</h1>
                <audio autoplay src="${songInfo.mp3}">
        </audio>
        </article>
        `


        songCurrently.innerHTML = songSelected
        controllersAudio()
    })
})
*/







