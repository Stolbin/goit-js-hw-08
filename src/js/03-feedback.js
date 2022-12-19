import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateTextarea();

function onInput(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
      return alert('Заповніть всі поля');
  }  
  event.currentTarget.reset();  
  console.log(formData);
  
  if (
      refs.input.value === refs.input.value ||
      refs.textarea.value === refs.textarea.value
    ) {
      return alert('Дякуємо');
  }
  
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedInput) {
    refs.input.value = savedInput.email || '';
    refs.textarea.value = savedInput.message || '';
  }
}


