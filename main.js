// const divFAQ = document.querySelector('.question');
// divFAQ.addEventListener('click', clickToShowMore);

// const showAnswers = document.querySelector('.answer');

// const arrowRotate = document.querySelector('.arrow');

// let counter = 1;

// function clickToShowMore() {
//   showAnswers.classList.toggle('show-more');
//   counter++;
//   if (counter % 2 === 0) {
//     arrowRotate.style.transform = 'rotate(180deg)';
//   } else {
//     arrowRotate.style.transform = 'rotate(-0deg)';
//   }
// }

const rowsFAQ = document.querySelectorAll('.question');
rowsFAQ.forEach((rowFAQ) => {
  rowFAQ.addEventListener('click', (clickToShowMore) => {
    rowFAQ.classList.toggle('show-more');
    console.log(rowFAQ);
  });
});
