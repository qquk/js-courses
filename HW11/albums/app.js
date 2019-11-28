// Практика
// Сделать запрос к альбомам, получить их список, вывести на экран (в левой колонке на странице)
// При клике на альбом делать запрос к фотографиям (которые в относятся к текущему альбому),
// получать их список, вывести на экран (в правой колонке)

const albumCount = document.getElementById('album-count');
const photoCount = document.getElementById('photos-count');
const albumTitle = document.getElementById('album-tile');

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get("https://jsonplaceholder.typicode.com/albums", (res) => {
    const albums = JSON.parse(res);
    const albumForRendering = new Album();
    albums.forEach((album) => {
        albumForRendering.render(album);
    });
    albumCount.innerHTML = albums.length || 0;
});

class Album {
    constructor() {
        this.wrapper = document.querySelector('#albums');
    }
    handleClick(event) {
        event.preventDefault();
        document.querySelector('#photos').innerHTML = '';
        albumTitle.innerHTML = event.target.dataset.title;
        http.get(event.target.href, (res) => {
            const photos = JSON.parse(res);
            const photoForRendering = new Photo();
            photos.forEach((photo) => {
                photoForRendering.render(photo);
            })
            photoCount.innerHTML = photos.length || 0;
        })

    }
    render(album) {
        const albumRow = document.createElement('li');
        albumRow.classList.add('list-group-item');
        const albumLink = document.createElement('a');
        albumLink.textContent = album.title;
        albumLink.href = `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`;
        albumLink.dataset.title = album.title;
        albumLink.addEventListener('click', this.handleClick);
        albumRow.append(albumLink);
        this.wrapper.append(albumRow);
    }
}

class Photo {
    constructor() {
        this.wrapper = document.querySelector("#photos");
    }
    render(photo) {
        const photoRow = document.createElement('li');
        photoRow.classList.add('list-group-item');
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        img.title = photo.title;
        photoRow.append(img);
        this.wrapper.append(photoRow);
    }
}