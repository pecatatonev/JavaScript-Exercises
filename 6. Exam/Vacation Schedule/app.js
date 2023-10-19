const tasksURL = "http://localhost:3030/jsonstore/tasks/";

const loadVacationsButtonElement = document.getElementById('load-vacations');
const addVacationButtonElement = document.getElementById('add-vacation');
const editVacationButtonElement = document.getElementById('edit-vacation');

const confirmedVacationsElementList = document.getElementById('list');

const labelNameElement = document.getElementById('name');
const labelDaysElement = document.getElementById('num-days');
const labelDateElement = document.getElementById('from-date');

loadVacationsButtonElement.addEventListener("click", loadVacation);
addVacationButtonElement.addEventListener("click", addVacation);
editVacationButtonElement.addEventListener("click", editCourse);

let currentVacationID = '';
async function editCourse(e){
    e.preventDefault();

    const name = labelNameElement.value;
    const days = labelDaysElement.value;
    const date = labelDateElement.value;

    const vacation = {
        name,
        days,
        date,
    };

    await fetch(`${tasksURL}${currentVacationID}`, {
        method: 'PUT',
        body: JSON.stringify(vacation),
    });
    
    clearForm();

    editVacationButtonElement.disabled = true;
    addVacationButtonElement.disable = false;

    await loadVacation();
}

async function addVacation(e){
    e.preventDefault();

    const name = labelNameElement.value;
    const days = labelDaysElement.value;
    const date = labelDateElement.value;

    const vacation = {
        name,
        days,
        date,
    };

    await fetch(tasksURL, {
        method: 'POST',
        body: JSON.stringify(vacation),
    })

    clearForm();

    await loadVacation();
}

async function loadVacation(){
    const response = await fetch(tasksURL);
    const data = await response.json();
    console.log(confirmedVacationsElementList);
    
    confirmedVacationsElementList.innerHTML ="";

    const vacations = Object.values(data);

    for (const vacation of vacations) {
        const vacationElement = renderVacations(vacation);
        vacationElement.setAttribute('data-vacation-id', vacation._id);
        confirmedVacationsElementList.appendChild(vacationElement);
    }
}

function renderVacations(vacation){
    const nameElement = document.createElement('h2');
    nameElement.textContent = vacation.name;

    const dateElement = document.createElement('h3');
    dateElement.textContent = vacation.date;

    const daysElement = document.createElement('h3');
    daysElement.textContent = vacation.days;

    const buttonChangeElement = document.createElement('button');
    buttonChangeElement.className = 'change-btn';
    buttonChangeElement.textContent = 'Change';

    const buttonDoneElement = document.createElement('button');
    buttonDoneElement.className = 'done-btn';
    buttonDoneElement.textContent = 'Done';

    const vacationContainer = document.createElement('div');
    vacationContainer.className = 'container';

    vacationContainer.appendChild(nameElement);
    vacationContainer.appendChild(dateElement);
    vacationContainer.appendChild(daysElement);
    vacationContainer.appendChild(buttonChangeElement);
    vacationContainer.appendChild(buttonDoneElement);

    editVacationButtonElement.disabled = true;

    buttonChangeElement.addEventListener("click",() => {
        labelNameElement.value = vacation.name;
        labelDaysElement.value = vacation.days;
        labelDateElement.value = vacation.date;

        currentVacationID = vacationContainer.getAttribute('data-vacation-id');
        vacationContainer.remove();

        editVacationButtonElement.disabled = false;
        addVacationButtonElement.disable = true;
    });

    buttonDoneElement.addEventListener("click",async (e) => {
        await fetch(`${tasksURL}${vacation._id}`, {
            method:'DELETE',
            body: undefined,
        })

        await loadVacation();
    })

    return vacationContainer;
}

function clearForm(){
    labelNameElement.value = '';
    labelDaysElement.value = '';
    labelDateElement.value = '';
}