import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const meowTimeCell = document.createElement('td');
    meowTimeCell.textContent = applicant.meowTime;
    tr.appendChild(meowTimeCell);

    const dieCell = document.createElement('td');
    dieCell.textContent = applicant.die;
    tr.appendChild(dieCell);

    const livesCell = document.createElement('td');
    livesCell.textContent = applicant.lives;
    tr.appendChild(livesCell);

    tbody.appendChild(tr);
    
}
