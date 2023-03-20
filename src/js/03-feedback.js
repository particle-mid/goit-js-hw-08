import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormInput, 500));

const savedFormState = localStorage.getItem(STORAGE_KEY);
if (savedFormState) {
const { email, message } = JSON.parse(savedFormState);
emailInput.value = email;
messageInput.value = message;
}

function onFormInput() {
const formState = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

form.addEventListener('submit', onSubmit);


function onSubmit(e) {
e.preventDefault();
if (emailInput.value === '' || messageInput.value === '') {
alert('Будь ласка, заповніть форму');
return;
}
const formState = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.removeItem(STORAGE_KEY);
emailInput.value = '';
messageInput.value = '';
console.log(formState);
}