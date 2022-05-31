// grab DOM elements

const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', () => {
    let name = nameInput.value;
    console.log(name);
});

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state