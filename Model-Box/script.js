'use strict';

const modelContent = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModel = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

// Open modal function
const openModal = function() {
    modelContent.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
// Close modal function
const closeModal = function() {
    modelContent.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openModal);
}
closeBtn.addEventListener('click', closeModal);

// close on overlay
overlay.addEventListener('click', closeModal);

// Close Modal on click of Esc
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modelContent.classList.contains('hidden')) {
        closeModal();
    }
});
