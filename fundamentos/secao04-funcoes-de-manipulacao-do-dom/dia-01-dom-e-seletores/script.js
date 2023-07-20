//1 Altere a cor de fundo do header para  ok
//2 Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132); ok
//3 Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243); ok
//4 Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94); ok
//5 Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37); ok
//6 Altere a cor de fundo do footer para rgb(0, 53, 51).

const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1){
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1){
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';


