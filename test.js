const openModel = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

const modal = document.querySelector("#modal");

openModel.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});
