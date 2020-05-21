const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');

// Show Input Error Message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check Email Is Correct

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listener

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (name.value === '') {
        showError(name, 'First Name Is Required');
    } else {
        showSuccess(name);
    }

    if (email.value === '') {
        showError(email, 'Your Email Is Required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email Is Not Valid');
    } else {
        showSuccess(email);
    }
});