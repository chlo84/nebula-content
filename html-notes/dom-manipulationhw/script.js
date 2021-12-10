let container= document.createElement('div');
const body = document.querySelector('body')
body.appendChild(container);

container.className = "color1"

for(let i = 0; i < 10; i++){
    const box = document.createElement('div');
    box.className = "color2"
    container.appendChild(box);
    
}
const arrayOfColors = ['yellow', 'orange', 'blue',]
const allBox = document.querySelectorAll('.color2')
allBox.forEach(div => {
    const randomNum = Math.floor(Math.random() * 3)
    div.style.backgroundColor = arrayOfColors[randomNum]
    div.innerText = arrayOfColors[randomNum]
     })