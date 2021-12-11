console.log('Hello World')

const selectButton = document.querySelector('.newRow');
const inputBox = document.querySelector('.inputBox');


selectButton.addEventListener('click', (e) => {
    let newValue = document.createElement('p');
    newValue.innerText = inputBox.value;
    document.body.appendChild(newValue);
console.log(inputBox.value);
})

