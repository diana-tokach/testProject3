'use strict';

document.addEventListener('DOMContentLoaded' , () => {

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
        moviesListBlock = document.querySelector('.promo__interactive-list'),
        addFilmForm = document.querySelector('.add');

    promoImgs.forEach(item => {
        item.remove();
    });

    genre.textContent = 'Драма';

    poster.style.background = 'url("../img/bg.jpg") top center/cover no-repeat';

    const sortArray = (arr) => {
        arr.sort();
    };

    const showAllMovies = (films, parent) => {
        parent.innerHTML = '';

        sortArray(movieDB.movies);
        films.forEach((item, i) => {
            parent.insertAdjacentHTML('beforeend', 
                `<li class="promo__interactive-item">
                    ${i + 1}. ${item}
                    <div class="delete"></div>
                </li>`);
        });

        // 3) При клике на мусорную корзину - элемент будет удаляться из списка
            
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                showAllMovies(movieDB.movies, moviesListBlock);
            });
        });
    };

    showAllMovies(movieDB.movies, moviesListBlock);

    // Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.

    const submitAddingFilm = (e) => {
        e.preventDefault();
        let film = addFilmForm.querySelector('.adding__input').value,
            isFavorite = addFilmForm.querySelector('input[type="checkbox"]').checked;

        if (film.trim() !== '') {
            // Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if (film.length > 21) {
                film = `${film.slice(0, 21)}...`;
            }
            movieDB.movies = [...movieDB.movies, film];

            // 4) Фильмы должны быть отсортированы алфавиту
            showAllMovies(movieDB.movies, moviesListBlock);

            // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
            // "Добавляем любимый фильм"
            if (isFavorite) {
                console.log('Добавляем любимый фильм');
            }
        }

        e.target.reset();
    };

    addFilmForm.addEventListener('submit', submitAddingFilm);

});