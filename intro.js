const claimForm = document.querySelector(".claim-form");
const claimPrice = document.querySelector(".claim-price");
const claimButton = document.querySelector(".claim-button");
const resetButton = document.querySelector(".reset-button");
const input = document.querySelectorAll(".input");
const hiddenBefore = document.querySelectorAll(".hidden-before");
const hiddenAfter = document.querySelector(".hidden-after");
const showAfter = document.querySelector(".show-after");

/* regex */
let fnameStr = /[a-zA-Z]{1,}/;
let lnameStr = /[a-zA-Z]{1,}/;
let emailStr = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;
let pswordStr = /^[A-Za-z0-9]\w{7,}$/;

claimButton.addEventListener("click", submit);
function submit() {
    if (fnameStr.test(input[0].value) == false) {
        claimForm.style.gap = "10px";
        hiddenBefore[0].style.display = "block";
        input[0].value = "";
        input[0].style.border = "2px solid var(--red)";
        input[0].style.backgroundSize = "6%";
        input[0].placeholder = "only letters";
        input[0].style.setProperty("--color", "var(--red)");
        claimButton.style.display = "none";
        resetButton.style.display = "block";
    } 
    if (lnameStr.test(input[1].value) == false) {
        claimForm.style.gap = "10px";
        hiddenBefore[1].style.display = "block";
        input[1].value = "";
        input[1].style.border = "2px solid var(--red)";
        input[1].style.backgroundSize = "6%";
        input[1].placeholder = "only letters";
        input[1].style.setProperty("--color", "var(--red)");
        claimButton.style.display = "none";
        resetButton.style.display = "block";
    } 
    if (emailStr.test(input[2].value) == false) {
        claimForm.style.gap = "10px";
        hiddenBefore[2].style.display = "block";
        input[2].value = "";
        input[2].style.border = "2px solid var(--red)";
        input[2].style.backgroundSize = "6%";
        input[2].placeholder = "email@example/com";
        input[2].style.setProperty("--color", "var(--red)");
        claimButton.style.display = "none";
        resetButton.style.display = "block";
    } 
   if (pswordStr.test(input[3].value) == false) {
        claimForm.style.gap = "10px";
        hiddenBefore[3].style.display = "block";
        input[3].value = "";
        input[3].style.border = "2px solid var(--red)";
        input[3].style.backgroundSize = "6%";
        input[3].placeholder = "at least 8 characters";
        input[3].style.setProperty("--color", "var(--red)");
        claimButton.style.display = "none";
        resetButton.style.display = "block";
    }
    if (fnameStr.test(input[0].value) == true && lnameStr.test(input[1].value) == true && emailStr.test(input[2].value) == true && pswordStr.test(input[3].value) == true) {
        hiddenAfter.style.display = "none";
        showAfter.style.display = "block";
        claimPrice.style.display = "none";
    }
    
}

resetButton.addEventListener("click", reset);
function reset() {
    location.reload();
}