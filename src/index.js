import getApplicant from './get-applicant.js';

// reference needed dom nodes
const form = document.getElementById('catpplication');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(getApplicant(formData));
});
