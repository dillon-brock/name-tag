// grab DOM elements

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

const pronounInput = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('pronoun-display');

nameInput.addEventListener('input', () => {
    let name = nameInput.value;
    nameDisplay.textContent = name;
});

pronounInput.addEventListener('input', () => {
    let pronouns = pronounInput.value;
    if (pronouns) {
        pronounDisplay.style.display = 'block';
        pronounDisplay.textContent = pronouns;
        nameDisplay.style.paddingBottom = '15px';
    } else {
        pronounDisplay.style.display = 'none';
        nameDisplay.style.paddingBottom = '25px';
    }
});

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state