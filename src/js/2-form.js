const formData = {
  email: '',
  message: '',
};

const localStorageformKey = 'feedback-form-state';

const form = document.querySelector('.js-feedback-form');

form.addEventListener('input', handlerInputData);
form.addEventListener('submit', handlerSubmitData);

// Проверяем на наличие пробелов и записываем в лок. хранилище
function handlerInputData(event) {
  formData[event.target.name] = event.target.value.trim();

  //   console.log(event.target.name);
  localStorage.setItem(localStorageformKey, JSON.stringify(formData));
}

// Вытягиваем из лок. хран. данные
function loadData() {
  const savedData = localStorage.getItem(localStorageformKey);
  if (savedData) {
    const getData = JSON.parse(savedData);
    for (let key in getData) {
      form.elements[key].value = getData[key];
      formData[key] = getData[key];
    }
  }
}

document.addEventListener('DOMContentLoaded', loadData);

// Проверяем заполненна ли форма, выводим в консоль объект, очищаем хран. и форму
function handlerSubmitData(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageformKey);
  form.reset();
  formData.email = '';
  formData.message = '';
}

loadData();
