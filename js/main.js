import '../css/main.sass';
import { items } from './items.js';

const divItems = document.getElementById('items');

for (let i = 0; i < 4; i++) {
    divItems.innerHTML += `
        <div class='item'>
            <img src="${items[i].img}" alt="photo">
            <h2 class="img__title">${items[i].title}</h2>
        </div>
    `
}

for (let i = 4; i < 7; i++) {
    divItems.innerHTML += `
        <div class='item'>
            <audio controls src="${items[i].aud}"></audio>
            <h2 class="img__title">${items[i].title}</h2>
        </div>
    `
}

for (let i = 7; i < items.length; i++) {
    divItems.innerHTML += `
        <div class='item'>
            <video controls src="${items[i].video}"></video>
            <h2 class="img__title">${items[i].title}</h2>
        </div>
    `
}