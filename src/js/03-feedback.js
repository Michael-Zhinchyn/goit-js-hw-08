// Імпорт функції "throttle" з бібліотеки lodash. Функція "throttle" забезпечує обмеження
// виконання функції не більше ніж раз в заданий проміжок часу.
import throttle from 'lodash.throttle';

// Знаходимо на сторінці форму, її елементи та кнопку відправки за допомогою селекторів
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const submitButton = document.querySelector('button');

// Зчитуємо збережений стан форми з localStorage та перетворюємо його з JSON формату в об'єкт
const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));

// Якщо в localStorage було збережено стан форми, то заповнюємо поля форми збереженими даними
if (savedFeedback) {
  emailInput.value = savedFeedback.email;
  messageInput.value = savedFeedback.message;
  // Якщо обидва поля форми заповнені, то кнопка відправки стане активною
  submitButton.disabled = !(emailInput.value && messageInput.value);
}

// Прослуховуємо зміни в полях форми
form.addEventListener(
  'input',
  // Використовуємо "throttle", щоб зменшити кількість запитів до localStorage.
  // Зберігаємо в localStorage поточний стан форми щоразу коли користувач вносить зміни в поля форми.
  // Якщо хоч одне поле порожнє, кнопка відправки форми буде відключена.
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
      })
    );

    submitButton.disabled = !(emailInput.value && messageInput.value);
  }, 500)
);

// Прослуховуємо подію "submit" форми
form.addEventListener('submit', event => {
  // Попереджаємо перезавантаження сторінки
  event.preventDefault();

  // Виводимо в консоль дані форми
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  // Очищаємо форму
  form.reset();
  // Видаляємо стан форми з localStorage
  localStorage.removeItem('feedback-form-state');
  // Відключаємо кнопку відправки
  submitButton.disabled = true;
});

// Задаємо стилі для посилання на наступну сторінку
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
pageLink.textContent = 'CLICK HERE FOR EXIT';
pageLink.href =
  'https://dorneawhale.files.wordpress.com/2015/02/thank-you2.gif';
form.style.margin = 'auto';

// Створюємо новий елемент "div", в який додаємо посилання з іконкою та текстом для повернення на попередню сторінку
const iconElement = document.createElement('div');
iconElement.innerHTML = `
<a href="02-video.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>
    </svg>
    <span style="margin-left: 5px;">Back</span>
</a>`;
// Додаємо створений елемент на початок body
document.body.prepend(iconElement);

// Змінюємо колір іконки та тексту
const icon = document.querySelector('svg');
icon.style.fill = 'orange';

const span = document.querySelector('span');
span.style.color = 'orange';
span.style.fontSize = '18px';
span.style.fontWeight = '500';
