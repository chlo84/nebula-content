const createId = document.querySelector('.createId');
createId.addEventListener('click', () => {
    const first = document.querySelector('.firstName').value;
    const last = document.querySelector('.lastName').value;
    const city = document.querySelector('.city').value;
    const profession = document.querySelector('.profession').value;

    console.log(first, last, city, profession)
    
    const id = document.createElement('div');
    const fNameRow = document.createElement('p');
    const lNameRow = document.createElement('p');
    const cityRow = document.createElement('p');
    const professionRow = document.createElement('p');
    
    id.className = 'idCard';
    
    fNameRow.innerText = first;
    lNameRow.innerText = last;
    cityRow.innerText = city;
    professionRow.innerText = profession; 
    
    id.appendChild(fNameRow);
    id.appendChild(lNameRow);
    id.appendChild(cityRow);
    id.appendChild(professionRow);
    
    document.body.appendChild(id)
    
})

