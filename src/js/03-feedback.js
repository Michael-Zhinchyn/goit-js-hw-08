import throttle from "lodash.throttle"

// ініціалізуємо форму та поля
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// заповнюємо поля форми збереженими значеннями (якщо вони існують)
const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {
    emailInput.value = savedFeedback.email;
    messageInput.value = savedFeedback.message;
}

// відстежуємо зміни у формі та зберігаємо їх у локальному сховищі
form.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.value,
        message: messageInput.value
    }));
}, 500));

// при відправленні форми, виводимо дані у консоль, очищаємо форму та локальне сховище
form.addEventListener('submit', event => {
    event.preventDefault();
    
    console.log({
        email: emailInput.value,
        message: messageInput.value
    });
    
    form.reset();
    localStorage.removeItem('feedback-form-state');
});
