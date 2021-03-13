'use strict';
const modalBtn = document.querySelectorAll('[data-modal]');
// const body = document.body;
console.log(modalBtn);
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
console.log(modal);

const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page')
const body = document.body;



modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);

    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');

        closeModal(currentModal);
    });
});
modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style')

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}


burger.addEventListener('click', event => {
     if(body.classList.contains('show-sidebar')){
         closeSidebar();
     } else {
         showSidebar();
     }
});

function showSidebar(){
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);

    body.classList.add('show-sidebar');
}

function closeSidebar() {
    body.classList.remove('show-sidebar');
    body.classList.remove('no-scroll');
    document.querySelector('.page__mask').remove();
}




