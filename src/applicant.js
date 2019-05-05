//import our utility object for getting data
import applicantApi from './applicant-api.js';

//reference all the DOM elements we need to update
const name = document.getElementById('name');
const meowTime = document.getElementById('meow-time');
const die = document.getElementById('die');
const lives = document.getElementById('lives');

// get the applicant name
// const searchParams = new URLSearchParams(window.location.search);
// const id = searchParams.get('name');

//get our applicant from the api
const applicant = applicantApi.get();

// mediate data into the element
name.textContent = applicant.name;
meowTime.textContent = applicant.meowTime;
die.textContent = applicant.die;
lives.textContent = applicant.lives;
