const asideMenu = document.querySelector(".aside-menu-player")
const mainPlayer = document.querySelector(".main-player")

document.querySelector('#library').addEventListener('click', () => {
    mainPlayer.classList.toggle('aside-hidden-main')
    asideMenu.classList.toggle('aside-hidden')
})

/*
<article class="aside-music">
<img class="aside-music-photo" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/06/16/14975872992361.jpg" alt="">
<div class="aside-music-info">
    <strong class="aside-music-title">Cancion</strong>
    <p class="aside-music-artist">Artista</p>
</div>
</article>
*/

const songs = [
    {
        id: 1,
        artist: 'radiohead',
        title: '15 steps',
        album: 'https://m.media-amazon.com/images/I/A1MwaIeBpwL._UF1000,1000_QL80_.jpg'
    },
    {
        id: 2,
        artist: 'deftones',
        title: 'MX',
        album: 'https://i.scdn.co/image/ab67616d0000b2730b1129853982ea17845d4eb6'
    },
]

const asideSongContainer = document.querySelector('.aside-menu-player')

songs.forEach((song) => {
    const {id, artist, title, album} = song

    let asideSong = ''
    asideSong =+ `
    <article class="aside-music">
        <img class="aside-music-photo" src="${album}" alt="">
        <div class="aside-music-info">
            <strong class="aside-music-title">${title}</strong>
            <p class="aside-music-artist">${artist}</p>
        </div>
    </article>
    `

    console.log(asideSong)

    asideSongContainer.innerHTML = asideSong

})