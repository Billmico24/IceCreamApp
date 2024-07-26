//   ================ Старая версия скрипта ===================
// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleModal);
//   refs.closeMenuBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.menu.classList.toggle("is-open");
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuList: document.querySelector(".mobile-menu__nav"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  refs.menuList.addEventListener("click", removeModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
  function removeModal() {
    refs.menu.classList.remove("is-open");
  }

})();