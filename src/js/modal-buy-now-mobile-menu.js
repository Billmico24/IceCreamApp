(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-buy-now-mobile-menu]'),
    closeModalBtn: document.querySelector('[modal-close-buy-now-mobile-menu]'),
    modal: document.querySelector('[modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-buy-now');
  }
})();