const title = document.querySelector('h2');

// #2-4
// title.innerHTML = 'Hi! from JS';
// title.style.color = 'red';
// console.log(title);
// document.title = 'I won toy now';
// console.dir(document);

// #2-5
function handleResize() {
  title.innerHTML = 'Im handleResize';
}

title.addEventListener('resize', handleResize);

//#2-6
// const BASE_COLOR = 'red';
// const OTHER_COLOR = 'blue';

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('click', handleClick);
}

init();
