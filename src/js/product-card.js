// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//         refs.modal.classList.toggle("is-hidden");
//     }
// })();


// document.querySelector(".move").addEventListener("click", function () {
//     document.querySelector('.products-card-inner').classList.add('isShown');
// });
// document.querySelector(".isClosed").addEventListener("click", function () {
//     document.querySelector('.products-card-inner').classList.remove('isShown');
// });

$('.roll').click(function () {
    $(this).closest('.products-card-inner').addClass('isShown')
})

$('.rollBack').click(function () {
    $(this).closest('.products-card-inner').removeClass('isShown')
})
