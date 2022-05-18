let openModalBtn = document.getElementById("modalOpen");
let openModalBtn1 = document.querySelector(".modalOpen1");
let modal = document.querySelector(".modal");
let modalRed = document.querySelector(".modal-red");
let closeModalBtn = document.querySelector(".close-btn");
let closeModalBtn1 = document.querySelector(".close-btn1");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});
openModalBtn1.addEventListener("click", function () {
  modalRed.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
closeModalBtn1.addEventListener("click", function () {
  modalRed.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === modalRed) {
    modalRed.style.display = "none";
  }
});
