const subScribeButton = document.querySelector(".subScribeButton");
const modalBox = document.querySelector(".modalBox");
const modalBoxClose = document.querySelector(".modalCloseButton");
const blind = document.querySelector(".blind");


function openModal() {
    const emailAddress = document.querySelector(".sendEmail");
    const sendMessage = document.querySelector(".sendMessage"); 
    modalBox.style.display = "flex";
    blind.style.display = "block";
    sendMessage.innerHTML = `Send your Email : ${emailAddress.value}`;
}
function closeModal() {
    modalBox.style.display = "none";
    blind.style.display = "none";
}

subScribeButton.addEventListener("click", openModal);
modalBoxClose.addEventListener("click", closeModal);