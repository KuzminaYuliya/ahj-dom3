/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

const filmList = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];
const films = document.getElementById('films');
const headers = document.getElementsByClassName('headers');

const sortedByIdLow = [...filmList.sort((a, b) => (a.id > b.id ? 1 : -1))];
const sortedByIdHigh = [...filmList.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()];
const sortedByTitleLow = [...filmList.sort((a, b) => (a.title > b.title ? 1 : -1))];
const sortedByTitleHigh = [...filmList.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse()];
const sortedByYearLow = [...filmList.sort((a, b) => (a.year > b.year ? 1 : -1))];
const sortedByYearHigh = [...filmList.sort((a, b) => (a.year > b.year ? 1 : -1)).reverse()];
const sortedByImdbLow = [...filmList.sort((a, b) => (a.imdb > b.imdb ? 1 : -1))];
const sortedByImdbHigh = [...filmList.sort((a, b) => (a.imdb > b.imdb ? 1 : -1)).reverse()];

function createList(data) {
  films.innerHTML = '';
  data.forEach((item) => {
    films.insertAdjacentHTML('beforeend', `<tr><td>${item.id}</td><td>${item.title}</td><td>(${item.year})</td><td>imdb: ${item.imdb.toFixed(2)}</td></tr>`);
  });
}

function changeArrow(item, direction) {
  headers.forEach((el) => {
    if (el.classList.contains('sorting-up') || el.classList.contains('sorting-down')) {
      el.className = 'headers';
    }
  });
  if (direction === 'up') {
    headers[item].classList.add('sorting-up');
  }
  if (direction === 'low') {
    headers[item].classList.add('sorting-down');
  }
}

createList(filmList);
let i = 1;
setInterval(() => {
  switch (i) {
    case 1:
      createList(sortedByIdLow);
      changeArrow(0, 'low');
      break;
    case 2:
      createList(sortedByIdHigh);
      changeArrow(0, 'up');
      break;
    case 3:
      createList(sortedByTitleLow);
      changeArrow(1, 'low');
      break;
    case 4:
      createList(sortedByTitleHigh);
      changeArrow(1, 'up');
      break;
    case 5:
      createList(sortedByYearLow);
      changeArrow(2, 'low');
      break;
    case 6:
      createList(sortedByYearHigh);
      changeArrow(2, 'up');
      break;
    case 7:
      createList(sortedByImdbLow);
      changeArrow(3, 'low');
      break;
    case 8:
      createList(sortedByImdbHigh);
      changeArrow(3, 'up');
      break;
    default:
      i = 0;
      break;
  }
  i += 1;
}, 2000);
