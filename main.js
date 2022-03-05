const rowsFAQ = document.querySelectorAll('.question');
rowsFAQ.forEach((rowFAQ) => {
  rowFAQ.addEventListener('click', (clickToShowMore) => {
    rowFAQ.classList.toggle('show-more');
  });
});
