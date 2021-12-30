const subScribeButton = document.querySelector(".subScribeButton");
const modalBox = document.querySelector(".modalBox");
const modalBoxClose = document.querySelector(".modalCloseButton");
const blind = document.querySelector(".blind");


function openModal() {
    const emailAddress = document.querySelector(".sendEmail");
    const sendMessage = document.querySelector(".sendMessage"); 
    modalBox.style.display = "flex";
    blind.style.display = "block";
    if(sendMessage){
        sendMessage.innerHTML = `Send your Email : ${emailAddress.value}`;
    }
    else{
        alert("이메일을 적어주시기 바랍니다.");
    }
}
function closeModal() {
    modalBox.style.display = "none";
    blind.style.display = "none";
}

subScribeButton.addEventListener("click", openModal);
modalBoxClose.addEventListener("click", closeModal);

const introductionDownload = document.querySelector(".introductionDownload");

introductionDownload.addEventListener("click", ()=>{
    alert("다운로드는 준비중입니다!")
});

const learnMoreButton = document.querySelector(".learnMore");

learnMoreButton.addEventListener("click", ()=>{
    location.href = "learnmore.html"
})
