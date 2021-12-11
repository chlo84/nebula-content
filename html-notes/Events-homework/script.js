const body = document.querySelector("body");
body.setAttribute('style', 'background-color: royalblue');
const h1 = document.createElement("H1");
body.appendChild(h1);
h1.innerText = "Hello World"
h1.setAttribute('style', 'background-color: pink')
h1.style.border = '3px solid purple';
h1.style.fontSize ='50px';
h1.innerText ='0';
const incButton = document.createElement('button');
body.appendChild(incButton);
incButton.innerText = 'ADD';
incButton.setAttribute('class', 'boxButton');
const decButton = document.createElement('button');
body.appendChild(decButton);
decButton.innerText = 'DELETE';
decButton.setAttribute('class', 'boxButton');

incButton.addEventListener('click', () =>{
   h1.innerText = parseInt(h1.innerText) + 1
})
decButton.addEventListener('click', () =>{
    h1.innerText = parseInt(h1.innerText) -1
})
const resetButton = document.createElement('button');
body.appendChild(resetButton);
resetButton.innerText = 'RESET';
resetButton.setAttribute('class', 'boxbutton');
resetButton.addEventListener('click', () =>{
    h1.innerText = '0'
})