// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'This is a paragraph tag!';
para.style["color"] = 'red';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'This is a blue h3!';
h3.style["color"] = 'blue';

const blackdiv = document.createElement('div');
blackdiv.classList.add('blackdiv');
blackdiv.style["background-color"] = 'pink';
blackdiv.style["border-style"] = 'solid';

const blackdivh1 = document.createElement('h1');
blackdivh1.classList.add('blackdivh1');
blackdivh1.textContent = 'This is an h1 inside the div!';

const blackdivP = document.createElement('p');
blackdivP.classList.add('blackdivP');
blackdivP.textContent = 'ME TOO!';


container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
blackdiv.appendChild(blackdivh1);
blackdiv.appendChild(blackdivP);
container.appendChild(blackdiv);