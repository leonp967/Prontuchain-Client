const remote = require('electron').remote;
const { ipcRenderer } = require('electron');
const InstitutionController = require('../backend/controllers/institution_controller');

document.getElementById('create-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.getElementById('loading').style.display = "block";
    let cpf = document.getElementById('cpf').value;
    let patientEmail = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let type = document.getElementById('picker-type').value;
    let description = document.getElementById('description').value;
    InstitutionController.includeData(remote.getGlobal('userEmail'), patientEmail, cpf, type, date, description);
});

ipcRenderer.on('stop-loading', () => {
    document.getElementById('loading').style.display = "none";
});