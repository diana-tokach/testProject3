'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoBlocks = document.querySelector('.promo__adv'),
      promoImgs = promoBlocks.querySelectorAll('img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      moviesListBlock = document.querySelector('.promo__interactive-list');

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

promoImgs.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

genre.textContent = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

poster.style.background = 'url("../img/bg.jpg") top center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту

// 5) Добавить нумерацию выведенных фильмов

moviesListBlock.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    moviesListBlock.insertAdjacentHTML('beforeend', 
        `<li class="promo__interactive-item">
            ${i + 1}. ${item}
            <div class="delete"></div>
        </li>`);
});