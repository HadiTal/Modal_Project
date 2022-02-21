//variable
const btnShowModal = document.querySelector(".btn-show-moadal");
const modal = document.querySelector(".container-modal");
const closeBtn = document.querySelector(".close");
const spaceContainer = document.querySelector(".main-container");
const BtnCopy = document.querySelector(".copy-btn");
const input = document.querySelector("input");

//event listner load browser

//event listner show modal
btnShowModal.addEventListener("click", ShowModal);

//event listner close modal
closeBtn.addEventListener("click", closeModal);

//event click space container
spaceContainer.addEventListener("click", clickSpaceContainer);

//event listner click copy text
BtnCopy.addEventListener("click", copyText);

//eventKeyDworn ESC

document.addEventListener("keydown", escFunction);

//function for show modal
function ShowModal(e) {
    btnShowModal.classList.add("hidden");

    modal.classList.remove("hidden");
}

//function for close modal
function closeModal() {
    modal.classList.add("hidden");
    btnShowModal.classList.remove("hidden");
}

//function for  click space container

function clickSpaceContainer(e) {
    if (e.target.classList.contains("main-container")) {
        modal.classList.add("hidden");
        btnShowModal.classList.remove("hidden");
    }
}

//function for copy text input
function copyText() {
    input.select();
    navigator.clipboard.writeText(input.value);
}

//function for keydown Esc
function escFunction(e) {
    if (e.key === "Escape") {
        closeModal();
    }
}