const formInput = document.querySelector('#formInput')

formInput.addEventListener('submit', function (event) {
    event.preventDefault()

    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const mediaUploadInput = document.querySelector('#mediaUploadInput');
    const selectPositionInput = document.querySelector('#selectPositionInput');  //selectPositionInput
    const experienceInput = document.querySelector('input[name="experience"]:checked');
    const additionalInfoInput = document.querySelector('#additionalInfo');
    const showApplicationStatus = document.querySelector('#showApplicationStatus')
    const skillsInput = document.querySelectorAll('input[name="skills"]:checked');
    let selectedSkills = [];
    for (let i = 0; i < skillsInput.length; i++) {
        if (skillsInput) {
            selectedSkills.push(skillsInput[i].value)
        }
    }

    const card = document.createElement('card');
    card.className = 'card my-2';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Application Submitted';

    cardBody.appendChild(cardTitle);

    const showName = document.createElement('p');
    showName.className = 'card-text';
    showName.innerHTML = `<strong>Name: </strong>${nameInput.value}`;

    const showEmail = document.createElement('p');
    showEmail.className = 'card-text';
    showEmail.innerHTML = `<strong>Email: </strong>${emailInput.value}`;

    const showResumePath = document.createElement('p');
    showResumePath.className = 'card-text';
    if (mediaUploadInput) {
        showResumePath.innerHTML = `<strong>Resume Path</strong> C:\\LoveLetters\\heartfelt_messages\\moonlit_nights\\romantic_notes.doc`
    }

    const showAppliedPosition = document.createElement('p');
    showApplicationStatus.className = 'card-text';
    showAppliedPosition.innerHTML = `<strong>Position Applied For: </strong>${selectPositionInput.value}`;

    const showYOE = document.createElement('p');
    showYOE.className = 'card-text';
    showYOE.innerHTML = `<strong>Years of Experience: </strong>${experienceInput.value}`;

    const showSkills = document.createElement('p');
    showSkills.className = 'card-text';
    showSkills.innerHTML = `<strong>Skills: </strong> ${selectedSkills.join(', ')}`;

    const showAdditionalInfo = document.createElement('p');
    showAdditionalInfo.className = 'card-text';
    showAdditionalInfo.innerHTML = `<strong>Additional Information: </strong>${additionalInfoInput.value}`;


    cardBody.appendChild(showName);
    cardBody.appendChild(showEmail);
    cardBody.appendChild(showResumePath);
    cardBody.appendChild(showAppliedPosition);
    cardBody.appendChild(showYOE);
    cardBody.appendChild(showSkills);
    cardBody.appendChild(showAdditionalInfo);
    card.appendChild(cardBody);
    showApplicationStatus.appendChild(card)
})