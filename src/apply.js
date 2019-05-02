import getApplicant from './make-applicant.js';
import applicantApi from './applicant-api.js';

// reference needed dom nodes
const form = document.getElementById('catpplication');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const applicant = getApplicant(formData);

    applicantApi.save(applicant);

    window.location = 'thank-you.html';
});
