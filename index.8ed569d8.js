var correctAnswer="closure";function checkAnswer(){document.getElementById("userAnswer").value.trim().toLowerCase()===correctAnswer.toLowerCase()?(localStorage.setItem("solved","true"),document.getElementById("jsChallenge").style.display="none",document.getElementById("siteContent").style.display="block"):alert("Wrong answer, try again.")}localStorage.getItem("solved")&&(document.getElementById("jsChallenge").style.display="none",document.getElementById("siteContent").style.display="block"),document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/3347901.jpg')",aElements=document.getElementsByTagName("a"),aArray=Array.from(aElements),aArray.forEach((function(e){e.style.listStyle="none",e.style.color="yellow",e.style.marginLeft="20px",e.style.fontWeight="500"})),ulElement=document.getElementsByTagName("ul")[0],ulElement.style.display="flex",ulElement.style.justifyContent="center",ulElement.style.alignItems="center",h1Elements=document.getElementsByTagName("h1"),h1Array=Array.from(h1Elements),h1Array.forEach((function(e){e.style.color="yellow",e.style.textAlign="center",e.style.fontWeight="600"}));
//# sourceMappingURL=index.8ed569d8.js.map
