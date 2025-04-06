document.addEventListener('DOMContentLoaded', () => {
    const textContent = document.getElementById('text-content');
    const changeTextButton = document.getElementById('change-text');
    const styleContent = document.getElementById('style-content');
    const changeStyleButton = document.getElementById('change-style');
    const addElementButton = document.getElementById('add-element');
    const removeElementButton = document.getElementById('remove-element');
    const elementsContainer = document.getElementById('elements-container');

    changeTextButton.addEventListener('click', () => {
        textContent.textContent = 'Text has been changed!';
    });

    changeStyleButton.addEventListener('click', () => {
        styleContent.style.color = 'red';
        styleContent.style.fontSize = '2rem';
        styleContent.style.fontWeight = 'bold';
    });

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'New element added!';
        newElement.style.marginTop = '1rem';
        elementsContainer.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        if (elementsContainer.children.length > 0) {
            elementsContainer.removeChild(elementsContainer.lastChild);
        }
    });
});