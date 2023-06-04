import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const submitButton = document.querySelector('button');
const pageLink = document.querySelector('a');
const iconElement = document.createElement('div');
const { email: emailInput, message: messageInput } = form.elements;
const feedbackKey = 'feedback-form-state';
const savedFeedback = JSON.parse(localStorage.getItem(feedbackKey));

// Initialize saved feedback if exists
if (savedFeedback) {
    const { email, message } = savedFeedback;
    emailInput.value = email;
    messageInput.value = message;
    submitButton.disabled = !(email && message);
}

// Form input event listener
form.addEventListener('input', throttle(() => {
    localStorage.setItem(feedbackKey, JSON.stringify({
        email: emailInput.value,
        message: messageInput.value
    }));

    submitButton.disabled = !(emailInput.value && messageInput.value);
}, 500));

// Form submit event listener
form.addEventListener('submit', event => {
    event.preventDefault();

    console.log({
        email: emailInput.value,
        message: messageInput.value
    });

    form.reset();
    localStorage.removeItem(feedbackKey);
    submitButton.disabled = true;
});

// Configure page link
Object.assign(pageLink.style, {
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'end',
    color: 'salmon',
    textDecoration: 'none',
    position: 'fixed',
    right: '5%',
    top: '10px'
});
pageLink.textContent = 'CLICK HERE FOR EXIT';
pageLink.href = 'https://dorneawhale.files.wordpress.com/2015/02/thank-you2.gif';

form.style.margin = 'auto';

// Configure icon
iconElement.innerHTML = `
<a href="02-video.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>
    </svg>
    <span style="margin-left: 5px;">Back</span>
</a>`;

document.body.prepend(iconElement);

const icon = document.querySelector('svg');
icon.style.fill = 'orange';

const span = document.querySelector('span');
Object.assign(span.style, {
    color: 'orange',
    fontSize: '18px',
    fontWeight: '500'
});
