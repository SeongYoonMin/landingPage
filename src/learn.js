const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", ()=>{
    location.href = "index.html";
});

const imgModals = document.querySelectorAll(".photoZone img");
const modalWindow = document.querySelector(".modalWindow");
const imageBox = modalWindow.querySelector(".imageBox");

for (const imgModal of imgModals) {
    imgModal.addEventListener("click", ()=>{
        modalWindow.style.display = "block";
        modalOpen(imgModal);
    })
}

function modalOpen(image) {
    const imageSrc = image.src;
    imageBox.innerHTML = `<img src = "${imageSrc}" alt>`
}

const closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", modalClose);

function modalClose() {
    modalWindow.style.display = "none";
    imageBox.innerHTML = "";
}