import { songs } from './songs.js'


const asideMenu = document.querySelector(".aside-menu-player")
const mainPlayer = document.querySelector(".main-player-container")

document.querySelector('#library').addEventListener('click', () => {
    mainPlayer.classList.toggle('aside-hidden-main')
    asideMenu.classList.toggle('aside-hidden')
})

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




const controllersAudio = () => {
    let songAudio = document.querySelector('audio')
    console.log(songAudio)
    const playButton = document.querySelector('#play')
    const nextButton = document.querySelector('#next')

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








