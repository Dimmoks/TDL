function backgroundOneClickFunction() {
    document.body.style.backgroundImage = "url('background/background1.jpg')";
}

function backgroundTwoClickFunction() {
    document.body.style.backgroundImage = "url('background/background2.jpg')";
}

function backgroundThreeClickFunction() {
    document.body.style.backgroundImage = "url('background/background3.jpg')"
}

function taskOperation() {
    const inputTask = document.getElementById('addTaskInput');

    const textTask = inputTask.value;

    if (!textTask) {
        alert('Entered text not found...');
        return;
    }

    const cardTask = document.createElement('div');
    cardTask.className = 'taskCard';

    const content = document.createElement('div');
    content.className = 'taskCardContent';
    cardTask.appendChild(content);

    const nameTask = document.createElement('div');
    nameTask.innerText = textTask;
    nameTask.className = 'taskCardText';
    content.appendChild(nameTask);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '✖';
    deleteButton.className = 'taskCardButton';
    deleteButton.addEventListener('click', () => {
        const contentCard = document.getElementById('taskBlock');

        contentCard.removeChild(cardTask);
    });
    content.appendChild(deleteButton);

    const contentCard = document.getElementById('taskBlock');
    contentCard.appendChild(cardTask);

    inputTask.value = '';
    inputTask.focus();
}