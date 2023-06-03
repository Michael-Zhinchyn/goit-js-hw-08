document.body.innerHTML += `
<div id="jsChallenge">
    <h1>Solve this JavaScript problem to enter:</h1>
    <p>
        What is the concept called where a JavaScript function can access
        variables from its outer (parent) scope?
    </p>
    <input id="userAnswer" type="text" />
    <button onclick="checkAnswer()">Check</button>
</div>

<div id="siteContent">
    <h1>Welcome to the Homework # 8!</h1>
    <!-- Rest of the site content here -->
</div>
`;

 
 const correctAnswer = "closure"; // Correct answer to your JavaScript problem

if (localStorage.getItem('solved')) {
    document.getElementById('jsChallenge').style.display = 'none';
    document.getElementById('siteContent').style.display = 'block';
}

function checkAnswer() {
  const userAnswer = document.getElementById('userAnswer').value;

  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    // Якщо відповідь вірна, зберігаємо це в localStorage
    localStorage.setItem('solved', 'true');
    document.getElementById('jsChallenge').style.display = 'none';
    document.getElementById('siteContent').style.display = 'block';
  } else {
    alert('Wrong answer, try again.');
  }
}

document.body.style.backgroundImage = "linear-gradient(rgba(46, 47, 66, 0.1), rgba(46, 47, 66, 0.1)), url('https://wallpaperaccess.com/full/3347901.jpg')";
 aElements = document.getElementsByTagName("a"); // Отримуємо всі елементи a
 aArray = Array.from(aElements); // Перетворюємо HTMLCollection в масив

aArray.forEach(a => {
  a.style.listStyle = "none"; // Видаляємо маркери
  a.style.color = "yellow"; // Змінюємо колір на жовтий
  a.style.marginLeft = "20px"; // Додаємо лівий марджин
  a.style.fontWeight = "500"; // Змінюємо жирність тексту
});

// Щоб розмістити елементи a по центру, стилізуємо ul
 ulElement = document.getElementsByTagName("ul")[0]; // Припустимо, що є тільки один елемент ul

ulElement.style.display = "flex"; // Встановлюємо тип відображення на flex для центрування
ulElement.style.justifyContent = "center"; // Центруємо елементи по горизонталі
ulElement.style.alignItems = "center"; // Центруємо елементи по вертикалі
ulElement.style.paddingLeft = "0"; 



// Центруємо h1 і змінюємо колір на оранжевий
 h1Elements = document.getElementsByTagName("h1"); // Отримуємо всі елементи h1
 h1Array = Array.from(h1Elements); // Перетворюємо HTMLCollection в масив

h1Array.forEach(h1 => {
  h1.style.color = "yellow"; // Змінюємо колір на оранжевий
  h1.style.textAlign = "center"; // Центруємо текст
    h1.style.fontWeight = '600';
    
});


