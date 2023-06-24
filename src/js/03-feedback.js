import throttle from 'lodash.throttle';

// Вибір елементів DOM
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const submitButton = document.querySelector('button');

// Отримання збереженого фідбеку з localStorage
const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {
  // Відновлення значень введення збереженого фідбеку
  emailInput.value = savedFeedback.email;
  messageInput.value = savedFeedback.message;
  // Вимкнення кнопки відправки, якщо електронна пошта або повідомлення порожні
  submitButton.disabled = !(emailInput.value && messageInput.value);
}

// Обмежений (throttled) обробник подій для змін вводу
form.addEventListener(
  'input',
  throttle(() => {
    // Збереження поточних значень введення у localStorage
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
      })
    );

    // Активація або вимкнення кнопки відправки на основі значень введення
    submitButton.disabled = !(emailInput.value && messageInput.value);
  }, 500)
);

// Обробник подій для надсилання форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Виведення електронної пошти та повідомлення у консоль
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  // Скидання форми та видалення збереженого фідбеку з localStorage
  form.reset();
  localStorage.removeItem('feedback-form-state');
  submitButton.disabled = true;
});

// Стилізація посилання сторінки для виходу
const pageLink = document.querySelector('a');
Object.assign(pageLink.style, {
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'end',
  color: 'salmon',
  textDecoration: 'none',
  position: 'fixed',
  right: '5%',
  top: '10px',
});

// Встановлення вмісту та href для посилання сторінки
pageLink.textContent = 'НАТИСНІТЬ ТУТ ДЛЯ ВИХОДУ';
pageLink.href =
  'https://dorneawhale.files.wordpress.com/2015/02/thank-you2.gif';

// Стилізація елемента форми
form.style.margin = 'auto';

// Створення та стилізація елемента з іконкою
const iconElement = document.createElement('div');
iconElement.innerHTML = `
<a href="02-video.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>
    </svg>
    <span style="margin-left: 5px;">Назад</span>
</a>`;
document.body.prepend(iconElement);

// Стилізація SVG іконки
const icon = document.querySelector('svg');
icon.style.fill = 'orange';

// Стилізація тексту іконки
const span = document.querySelector('span');
span.style.color = 'orange';
span.style.fontSize = '18px';
span.style.fontWeight = '500';
