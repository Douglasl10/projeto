document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique e Juliano', image: './img/artista-henrique-juliano.jpg', },
        { name: 'Jorge e Matheus', image: './img/artista-jorge-mateus.jpg', },
        { name: 'Ze neto & Cristiano', image: './img/artista-ze-neto.jpg', },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg', },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg', },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg', },

    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxantion Sounds)', artist: 'Sleep John', image: './img/album-white-noise.jpg', },
        { name: 'O ceu Explica Tudo (Ao vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg', },
        { name: 'Nada como um dia apos o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg', },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg', },
        { name: 'Caju', artist: 'Liniker', image: './img/album-caju.jpg', },
        { name: 'Escandalo intimo', artist: 'Luisa Souza', image: './img/album-escandalo.jpg', },

    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `;
        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <div>
              <h3>${album.artist}</h3>
              <p>${album.name}</p>
            </div>
        `;
        albumGrid.appendChild(albumCard);
    });

});

