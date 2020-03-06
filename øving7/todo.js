//deklarerer variabler som skal bli brukt i koden
const tasks = [];
const list = document.getElementById('tasks');
const input = document.getElementById('task');
const form = document.getElementById('control');
const completed = document.getElementById('completed');

form.addEventListener('submit', addTask); //legger til eventlistener til submit slik at input blir lagt til i listen
function addTask(event) { //addtask blir kalt når submit trykkes. legger til input i listen
  event.preventDefault(); //stopper klient i å legge til tom input som liste
  if (input.value != '') {
    const task = {
      text: input.value,
      checked: false,
      timestamp: Date()
    }; //legger til element i starten av lista
    tasks.unshift(task);
    console.log(tasks);
    redrawList();
  } else {
    input.placeholder = "Gi oppgaven et navn:"; //hvis man submitter tom input, får man beskjed om å gi oppgaven et navn
  }
  input.value = ''; //tømmer input-feltet med tekst som var skrevet
}

function todoWasChecked(event) { //finner id til checkbox som blir klikket
  const index = event.target.id;
  tasks[index].checked = !tasks[index].checked; //gjør om checkbox til invers av det den var (checked blir unchecked og motsatt)
  redrawList();
}

function redrawList() {
  list.innerHTML = '';
  var antallCompleted = 0;

  for (let task of tasks) { //lager liste, checkbox og navn til oppgaven
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');


    span.innerText = task.text; //legger til tekst, id-en og add event listener
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked);

    if (task.checked) { //hvis oppgaven er checked, får teksten en linje gjennom
      checkbox.setAttribute('checked', true);
      span.style.textDecoration = 'line-through';
      antallCompleted++;
    }
    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);
  } //legger til <li> i <ul>
  completed.innerText = antallCompleted + ' / ' + tasks.length + ' completed'; //viser hvor mange oppgaver som er gjort og som ikke er gjort
}
redrawList();
