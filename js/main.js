const form = document.getElementById("form");
const emailErrorMessage = document.getElementById("email-error");
const emailField = document.getElementById("email")
const subscribedContainer = document.getElementById("subscribed-container");
const dismissButton = document.getElementById("dismiss-button");
const signupContainer = document.getElementById("sign-up-container");
const displayEmailAddress = document.getElementById("conf-email-address");

function handleSubmit(e) {
    e.preventDefault();

    const emailData = e.target.querySelector("#email");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const emailInput = data["email"];
    

    if(validateEmail(emailInput)) {
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("visible");
        emailField.classList.remove("email-input-error");
        subscribedContainer.classList.add("visible");
        signupContainer.classList.add("hide");
        displayEmailAddress.textContent = emailInput + ".";
    } else {
        emailErrorMessage.textContent = "Valid email required";
        emailErrorMessage.classList.add("visible");
        emailField.classList.add('email-input-error');
        
    }
}

function validateEmail(email) {

    const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return emailRegex.test(email);

}

function dismissSuccessMessage() {
    subscribedContainer.classList.remove("visible");
    signupContainer.classList.remove("hide");
    emailField.value = "";
}


form.addEventListener('submit', handleSubmit);
dismissButton.addEventListener("click", dismissSuccessMessage);