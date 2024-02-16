const asideMenu = document.querySelector(".aside-menu-player")
const mainPlayer = document.querySelector(".main-player-container")

document.querySelector('#library').addEventListener('click', () => {
    mainPlayer.classList.toggle('aside-hidden-main')
    asideMenu.classList.toggle('aside-hidden')
})


const songs = [
    {
        id: '1',
        artist: 'Radiohead',
        title: '15 steps',
        album: 'https://m.media-amazon.com/images/I/A1MwaIeBpwL._UF1000,1000_QL80_.jpg'
    },
    {
        id: '2',
        artist: 'Deftones',
        title: 'MX',
        album: 'https://i.scdn.co/image/ab67616d0000b2730b1129853982ea17845d4eb6'
    },
    {
        id: '3',
        artist: 'Panchiko',
        title: 'D>E>A>T>H>M>E>T>A>L',
        album: 'https://images.genius.com/1a3c3cb9ee5ad4deef217c11610f1a7d.999x999x1.png'
    },
    {
        id: '4',
        artist: 'Portishead',
        title: 'Cowboys',
        album: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Portishead_-_Portishead.png'
    },
]

const asideSongContainer = document.querySelector('.aside-menu-player')

let asideSongs = ''

songs.forEach((song) => {
    const {id, artist, title, album} = song

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

const asideSong = document.querySelectorAll('.aside-music')
const songCurrently = document.querySelector('.player-music-info')

let songSelected = ''
asideSong.forEach((songPlay) =>{
    songPlay.addEventListener('click', ()=>{
        const idSong = songPlay.id
        const songInfo = songs.find((song) => song.id === idSong)
        
        songSelected = `
        <img class="player-music-photo"
        src="${songInfo.album}"
        alt=""><p>${songInfo.artist}</p>
        <h1>${songInfo.title}</h1>
        ` 
        
        songCurrently.innerHTML = songSelected
    })
    
})





