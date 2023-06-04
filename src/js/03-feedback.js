import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const submitButton = document.querySelector('button');

const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {
    emailInput.value = savedFeedback.email;
    messageInput.value = savedFeedback.message;
    submitButton.disabled = !(emailInput.value && messageInput.value);
}

form.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.value,
        message: messageInput.value
    }));

    submitButton.disabled = !(emailInput.value && messageInput.value);
}, 500));

form.addEventListener('submit', event => {
    event.preventDefault();
    
    console.log({
        email: emailInput.value,
        message: messageInput.value
    });
    
    form.reset();
    localStorage.removeItem('feedback-form-state');
    submitButton.disabled = true;
});

const pageLink = document.querySelector('a')
pageLink.style.fontWeight = '600'
pageLink.style.display = 'flex'
pageLink.style.justifyContent = 'end'
pageLink.style.color = 'salmon'
pageLink.style.textDecoration = 'none'
pageLink.style.position = 'fixed'
pageLink.style.right = '5%'
pageLink.style.top = '10px'
pageLink.textContent = 'CLICK HERE FOR EXIT'
pageLink.href = 'https://dorneawhale.files.wordpress.com/2015/02/thank-you2.gif'
form.style.margin= 'auto';

const iconElement = document.createElement('div');
iconElement.innerHTML = `
<a href="02-video.html" style="text-decoration: none; color: inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">
        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>
    </svg>
    <span style="margin-left: 5px;">Back</span>
</a>`;
document.body.prepend(iconElement);

const icon = document.querySelector('svg')
icon.style.fill = 'orange'

const span = document.querySelector('span')
span.style.color = 'orange'
span.style.fontSize = '18px'
span.style.fontWeight = '500'


