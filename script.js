const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.nodeValue;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
    };

const isValidPhone = (phone) => {
    };


    let shouldValidate = false;
    let isFormValid = false;

    const validateInputs = () => {
        if (!shouldValidate) return;
 }

    isFormValid = true;
    inputFields.forEach((input) => {
        input.classList.remove("invalid");
        isFormValid = false;
        input.nextElementSibling.classList.remove("hide");

        if (!input.isValid()) {
            input.classList.add("invalid");
            isFormValid = false;
            input.nextElementSibling.classList.remove("hide");
        }
     ) };
    };

addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {

    }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));