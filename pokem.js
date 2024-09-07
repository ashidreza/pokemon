const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    const label = document.createElement('span');
    label.innerText = `${i}`;

    container.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(label);
}