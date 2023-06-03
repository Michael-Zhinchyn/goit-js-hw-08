 const correctAnswer = "closure"; // Correct answer to your JavaScript problem

        function checkAnswer() {
            const userAnswer = document.getElementById('userAnswer').value;
            if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                document.getElementById('jsChallenge').style.display = 'none';
                document.getElementById('siteContent').style.display = 'block';
            } else {
                alert('Wrong answer, try again.');
            }
        }

document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/3347901.jpg')";
let aElements = document.getElementsByTagName("a"); // Отримуємо всі елементи a
let aArray = Array.from(aElements); // Перетворюємо HTMLCollection в масив

aArray.forEach(a => {
  a.style.listStyle = "none"; // Видаляємо маркери
  a.style.color = "yellow"; // Змінюємо колір на жовтий
  a.style.marginLeft = "20px"; // Додаємо лівий марджин
  a.style.fontWeight = "500"; // Змінюємо жирність тексту
});

// Щоб розмістити елементи a по центру, ви можете стилізувати їх контейнер (наприклад, ul)
let ulElement = document.getElementsByTagName("ul")[0]; // Припустимо, що у вас є тільки один елемент ul

ulElement.style.display = "flex"; // Встановлюємо тип відображення на flex для центрування
ulElement.style.justifyContent = "center"; // Центруємо елементи по горизонталі
ulElement.style.alignItems = "center"; // Центруємо елементи по вертикалі

// Центруємо h1 і змінюємо колір на оранжевий
let h1Elements = document.getElementsByTagName("h1"); // Отримуємо всі елементи h1
let h1Array = Array.from(h1Elements); // Перетворюємо HTMLCollection в масив

h1Array.forEach(h1 => {
  h1.style.color = "yellow"; // Змінюємо колір на оранжевий
  h1.style.textAlign = "center"; // Центруємо текст
    h1.style.fontWeight = '600';
    
});


