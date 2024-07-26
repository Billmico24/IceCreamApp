// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll('[data-modal-open-cont]'),
//     closeModalBtn: document.querySelector('[data-modal-close-cont]'),
//     modal: document.querySelector('[data-modal-cont]'),
//   };

//     refs.openModalBtn.forEach(e => {
//         e.addEventListener('click', toggleModal);
//     })

//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open-cont]'),
    closeModalBtn: document.querySelector('[data-modal-close-cont]'),
    modal: document.querySelector('[data-modal-cont]'),
    scrollBtn: document.querySelector('.scroll-up'),
  };

  refs.openModalBtn.forEach(e => {
    e.addEventListener('click', toggleModal);
  })

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.scrollBtn.classList.toggle('is-btn-hidden');
  }
})();