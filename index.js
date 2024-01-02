// Write your code here!

// Remove the existing 'main#main' element
const mainElement = document.querySelector('main');
mainElement.remove();

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Michelle is the champion";

// Append the new <h1> element to the body
document.body.appendChild(newHeader);
