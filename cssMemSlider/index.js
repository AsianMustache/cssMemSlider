const pagination = document.querySelector('.pagination');
const paginationButtons = Array.from(document.querySelectorAll('.pagination-button'));

pagination.addEventListener('click', function(event){
    const index = paginationButtons.indexOf(event.target);
    document.querySelector('.pagination-button.active').classList.remove('active');
    event.target.classList.add('active');
    document.querySelector('.mem-slide.active').classList.remove('active');
    document.querySelector(`.mem-slide:nth-child(${index + 1})`).classList.add('active');
})

