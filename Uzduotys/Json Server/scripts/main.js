const addPetForm = document.querySelector('#addPetsForm');


const form = document.createElement('form');
form.setAttribute('id', 'addPetsForm');

const h1 = document.createElement('h1');
h1.textContent = 'You can add new patient here!';
form.appendChild(h1);

// Add form fields for the pet's name, classification, etc.
const fields = [
  { label: 'Pet Name', id: 'petname', type: 'text' },
  { label: 'Clasification', id: 'clasification', type: 'select', options: ['Cat', 'Dog', 'Exotic'] },
  { label: 'Scientific Name', id: 'scientificName', type: 'text' },
  { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female'] },
  { label: 'Age', id: 'age', type: 'number' },
  { label: 'Facts', id: 'facts', type: 'text' },
  { label: 'Medical History', id: 'medicalHistory', type: 'text' },
  { label: 'Image', id: 'image', type: 'text' }
];

for (const field of fields) {
  const div = document.createElement('div');
  div.classList.add('form');

  const label = document.createElement('label');
  label.setAttribute('for', field.id);
  label.textContent = field.label;
  div.appendChild(label);

  let input;
  if (field.type === 'select') {
    input = document.createElement('select');
    input.setAttribute('name', field.id);
    input.setAttribute('id', field.id);
    for (const option of field.options) {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', option.toLowerCase());
      optionElement.textContent = option;
      input.appendChild(optionElement);
    }
  } else {
    input = document.createElement('input');
    input.setAttribute('type', field.type);
    input.setAttribute('name', field.id);
    input.setAttribute('id', field.id);
    input.classList.add('form-control');
  }
  input.setAttribute('required', true);
  div.appendChild(input);

  form.appendChild(div);
}

// Add the submit button
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.classList.add('btnAddPatient');
button.textContent = 'Add Patient';
form.appendChild(button);

// Add the form to the document
document.body.appendChild(form);

// Add the div element to display the list of pets
const patientsDiv = document.createElement('div');
patientsDiv.setAttribute('id', 'patients');
document.body.appendChild(patientsDiv);

// Set up the form submission event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from
}
)

const url = 'http://localhost:3000/pets';

const addPetsForm = document.querySelector('#addPetsForm');

const getPets = () => {
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      // Remove all existing pets from the patients div
      while (patientsDiv.firstChild) {
        patientsDiv.removeChild(patientsDiv.firstChild);
      }

      // Add each pet to the patients div
      data.forEach((pet) => {
        // Create the card wrapper element
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        // Create the card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create the animal card element
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');

        // Create the pet name heading
        const heading = document.createElement('h3');
        heading.textContent = pet.petname;

        // Create the image element
        const img = document.createElement('img');
        img.src = pet.image;

        // Create the facts paragraph
        const facts = document.createElement('p');
        facts.classList.add('italic');
        facts.textContent = `"${pet.facts}"`;

        // Create the list of attributes
        const list = document.createElement('ul');
        list.innerHTML = `
          <li><span class="bold">Scientific name</span>: ${pet.scientificName}</li>
          <li><span class="bold">Classification</span>: ${pet.clasification}</li>
          <li><span class="bold">Gender</span>: ${pet.gender}</li>
          <li><span class="bold">Age</span>: ${pet.age}</li>
        `;

        // Create the medical history paragraph
        const medicalHistory = document.createElement('p');
        medicalHistory.textContent = pet.medicalHistory;

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deletePatient(pet.id));

        // Create the edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-warning');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editPatient(pet.id));

        // Append all the elements to the animal card
        animalCard.appendChild(heading);
        animalCard.appendChild(img);
        animalCard.appendChild(facts);
        animalCard.appendChild(list);
        animalCard.appendChild(medicalHistory);
        animalCard.appendChild(deleteBtn);
        animalCard.appendChild(editBtn);

        // Append the animal card to the card
        card.appendChild(animalCard);

        // Append the card to the card wrapper
        cardWrapper.appendChild(card);
       
       // Append the card wrapper to the patients div
      patientsDiv.appendChild(cardWrapper);
    });
  });
};


/*const addPetsForm = document.querySelector('#addPetsForm');

const getPets = () => {
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      patientsDiv.innerHTML = '';
      data.forEach((pet) => {
        patientsDiv.innerHTML += `
        <div class="card-wrapper">
          <div class="card">
            <div class="animal-card">
              <h3>${pet.petname}</h3>
              <div>
                <img src="${pet.image}">
                <p class="italic">"${pet.facts} " </p>
                <ul>
                  <li><span class="bold">Scientific name</span>: ${pet.scientificName}</li>
                  <li><span class="bold">Clasification</span>: ${pet.clasification}</li>
                  <li><span class="bold">Gender</span>: ${pet.gender}</li>
                  <li><span class="bold">Age</span>: ${pet.age}</li>
                </ul>
                <p>${pet.medicalHistory} </p>
                <button class="btn btn-danger" onclick="deletePatient(${pet.id})">Delete</button>
                <button class="btn btn-warning" onclick="editPatient(${pet.id})">Edit</button>
              </div>
            </div>
          </div>
        </div>
        `;
      });
    });
};*/

const addPet = (e) => {
  e.preventDefault();
  const pet = {
    petname: petname.value,
    clasification: clasification.value,
    scientificName: scientificName.value,
    gender: gender.value,
    age: age.value,
    facts: facts.value,
    medicalHistory: medicalHistory.value,
    image: image.value,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getPets();
    });
};

const deletePatient = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getPets();
    });
};
const editPatient = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Update the values of the form elements
      petname.value = data.petname;
      clasification.value = data.clasification;
      scientificName.value = data.scientificName;
      gender.value = data.gender;
      facts.value = data.facts;
      age.value = data.age;
      medicalHistory.value = data.medicalHistory;
      image.value = data.image;

      // Remove all existing elements from the add pets form
      while (addPetsForm.firstChild) {
        addPetsForm.removeChild(addPetsForm.firstChild);
      }

      // Create the pet name form group
      const petNameFormGroup = document.createElement('div');
      petNameFormGroup.classList.add('form');

      // Create the pet name label
      const petNameLabel = document.createElement('label');
      petNameLabel.setAttribute('for', 'petname');
      petNameLabel.textContent = 'Pet Name';

      // Create the pet name input
      const petNameInput = document.createElement('input');
      petNameInput.setAttribute('type', 'text');
      petNameInput.setAttribute('name', 'petname');
      petNameInput.setAttribute('id', 'petname');
      petNameInput.classList.add('form-control');
      petNameInput.setAttribute('value', data.petname);
      petNameInput.setAttribute('required', '');

      // Append the label and input to the form group
      petNameFormGroup.appendChild(petNameLabel);
      petNameFormGroup.appendChild(petNameInput);

      // Create the classification form group
      const classificationFormGroup = document.createElement('div');
      classificationFormGroup.classList.add('form');

      // Create the classification label
      const classificationLabel = document.createElement('label');
      classificationLabel.setAttribute('for', 'clasification');
      classificationLabel.textContent = 'Classification';

      // Create the classification input
      const classificationInput = document.createElement('input');
      classificationInput.setAttribute('type', 'text');
      classificationInput.setAttribute('name', 'clasification');
      classificationInput.setAttribute('id', 'clasification');
      classificationInput.classList.add('form-control');
      classificationInput.setAttribute('value', data.clasification);
      classificationInput.setAttribute('required', '');

      // Append the label and input to the form group
      classificationFormGroup.appendChild(classificationLabel);
      classificationFormGroup.appendChild(classificationInput);
      

       // Create the scientific name form group
       const scientificNameFormGroup = document.createElement('div');
       scientificNameFormGroup.classList.add('form');
 
       // Create the scientific name label
       const scientificNameLabel = document.createElement('label');
       scientificNameLabel.setAttribute('for', 'scientificName');
       scientificNameLabel.textContent = 'Scientific Name';
 
       // Create the scientific name input
       const scientificNameInput = document.createElement('input');
       scientificNameInput.setAttribute('type', 'text');
       scientificNameInput.setAttribute('name', 'scientificName');
       scientificNameInput.setAttribute('id', 'scientificName');
       scientificNameInput.classList.add('form-control');
       scientificNameInput.setAttribute('value', data.scientificName);
       scientificNameInput.setAttribute('required', '');
 
       // Append the label and input to the form group
       scientificNameFormGroup.appendChild(scientificNameLabel);
       scientificNameFormGroup.appendChild(scientificNameInput);
 
       // Create the gender form group
       const genderFormGroup = document.createElement('div');
       genderFormGroup.classList.add('form');
 
       // Create the gender label
       const genderLabel = document.createElement('label');
       genderLabel.setAttribute('for', 'gender');
       genderLabel.textContent = 'Gender';
 
       // Create the gender input
       const genderInput = document.createElement('input');
       genderInput.setAttribute('type', 'select');
       genderInput.setAttribute('name', 'gender');
       genderInput.setAttribute('id', 'gender');
       genderInput.classList.add('form-control');
       genderInput.setAttribute('value', data.gender);
       genderInput.setAttribute('required', '');
 
       // Append the label and input to the form group
       genderFormGroup.appendChild(genderLabel);
       genderFormGroup.appendChild(genderInput);
 
       // Create the age form group
       const ageFormGroup = document.createElement('div');
       ageFormGroup.classList.add('form');
 
       // Create the age label
       const ageLabel = document.createElement('label');
       ageLabel.setAttribute('for', 'age');
       ageLabel.textContent = 'Age';

       // Create the age input
      const ageInput = document.createElement('input');
      ageInput.setAttribute('type', 'number');
      ageInput.setAttribute('name', 'age');
      ageInput.setAttribute('id', 'age');
      ageInput.classList.add('form-control');
      ageInput.setAttribute('value', data.age);
      ageInput.setAttribute('required', '');

      // Append the label and input to the form group
      ageFormGroup.appendChild(ageLabel);
      ageFormGroup.appendChild(ageInput);

      // Create the facts form group
      const factsFormGroup = document.createElement('div');
      factsFormGroup.classList.add('form');

      // Create the facts label
      const factsLabel = document.createElement('label');
      factsLabel.setAttribute('for', 'facts');
      factsLabel.textContent = 'Facts';

      // Create the facts input
      const factsInput = document.createElement('input');
      factsInput.setAttribute('type', 'text');
      factsInput.setAttribute('name', 'facts');
      factsInput.setAttribute('id', 'facts');
      factsInput.classList.add('form-control');
      factsInput.setAttribute('value', data.facts);
      factsInput.setAttribute('required', '');

      // Append the label and input to the form group
      factsFormGroup.appendChild(factsLabel);
      factsFormGroup.appendChild(factsInput);

      // Create the medical history form group
      const medicalHistoryFormGroup = document.createElement('div');
      medicalHistoryFormGroup.classList.add('form');

      // Create the medical history label
      const medicalHistoryLabel = document.createElement('label');
      medicalHistoryLabel.setAttribute('for', 'medicalHistory');
      medicalHistoryLabel.textContent = 'Medical History';

      // Create the medical history input
      const medicalHistoryInput = document.createElement('input');
      medicalHistoryInput.setAttribute('type', 'text');
      medicalHistoryInput.setAttribute('name', 'medicalHistory');
      medicalHistoryInput.setAttribute('id', 'medicalHistory');
      medicalHistoryInput.classList.add('form-control');
      medicalHistoryInput.setAttribute('value', data.medicalHistory);
      medicalHistoryInput.setAttribute('required', '');

      // Append the label and input to the form group
      medicalHistoryFormGroup.appendChild(medicalHistoryLabel);
      medicalHistoryFormGroup.appendChild(medicalHistoryInput);

       // Create the image form group
       const imageFormGroup = document.createElement('div');
       imageFormGroup.classList.add('form');
 
       // Create the image label
       const imageLabel = document.createElement('label');
       imageLabel.setAttribute('for', 'image');
       imageLabel.textContent = 'Image';
 
       // Create the image input
       const imageInput = document.createElement('input');
       imageInput.setAttribute('type', 'text');
       imageInput.setAttribute('name', 'image');
       imageInput.setAttribute('id', 'image');
       imageInput.classList.add('form-control');
       imageInput.setAttribute('value', data.image);
       imageInput.setAttribute('required', '');
 
       // Append the label and input to the form group
       imageFormGroup.appendChild(imageLabel);
       imageFormGroup.appendChild(imageInput);


      // Create the submit button
      const submitBtn = document.createElement('button');
      submitBtn.setAttribute('type', 'submit');
      submitBtn.classList.add('btnAddPet');
      submitBtn.textContent = 'Update Pet';
      submitBtn.addEventListener('click', () => updatePet(data.id));

       // Append all the form groups and the submit button to the add pets form
       addPetsForm.appendChild(petNameFormGroup);
       addPetsForm.appendChild(classificationFormGroup);
       addPetsForm.appendChild(scientificNameFormGroup);
       addPetsForm.appendChild(genderFormGroup);
       addPetsForm.appendChild(ageFormGroup);
       addPetsForm.appendChild(factsFormGroup);
       addPetsForm.appendChild(medicalHistoryFormGroup);
       addPetsForm.appendChild(imageFormGroup);
       addPetsForm.appendChild(submitBtn);
     });
 };

/*const editPatient = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      petname.value = data.petname;
      clasification.value= data.clasification;
      scientificName.value=data.scientificName;
      gender.value=data.gender;
      facts.value=data.facts;
      age.value=data.age;
      medicalHistory.value=data.medicalHistory;
      image.value=data.image;
      
      addPetsForm.innerHTML = `
      <div class="form
                <label for="petname"> Pet Name</label>
                <input type="text" name="petname" id="petname" class="form-control" value="${data.petname}" required>
              </div>
      <div class="form
                <label for="clasification"> Clasification</label>
                <input type="text"  name="clasification" id="clasification" class="form-control" value="${data.clasification}" required>
              </div>
      <div class="form
                <label for="scientificName"> scientific Name</label>
                <input type="text" name="scientificName" id="scientificName" class="form-control" value="${data.scientificName}" required>
              </div>
      <div class="form
                <label for="gender"> gender</label>
                <input type="select" name="gender" id="gender" class="form-control" value="${data.gender}" required>
              </div>
             
              <div class="form
                <label for="age">Age</label>
                <input type="number" name="age" id="age" class="form-control" value="${data.age}" required>
              </div>
              <div class="form
                
                <label for="facts">Facts</label>
                <input type="text" name="facts" id="facts" class="form-control" value="${data.facts}" required>
              </div>
              <div class="form
                <label for="medicalHistory">Medical History</label>
                <input type="text" name="medicalHistory" id="medicalHistory" class="form-control" value="${data.medicalHistory}" required>
              </div>
              <div class="form
                <label for="image>Image</label>
                <input type="text" name="image" id="image" class="form-control" value="${data.image}" required>
              </div>
              <button type="submit" class="btnAddPet" onclick="updatePet(${data.id})">Update Pet</button>
            `;
    });
};*/

const updatePet = (id) => {
  const pet = {
      petname:petname.value,
      clasification:clasification.value,
      scientificName:scientificName.value,
      gender:gender.value,
      age :age.value,
      facts:facts.value,
      medicalHistory:medicalHistory.value,
      image:image.value,
  };
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateCard(data);
    });
};

const updateCard = (pet) => {
  const card = document.querySelector(`[data-id="${pet.id}"]`);
  if (card) {
    card.querySelector('h3').textContent = pet.petname;
    card.querySelector('img').src = pet.image;
    card.querySelector('.italic').textContent = `"${pet.facts}"`;
    card.querySelector('[data-label="scientificName"]').textContent = pet.scientificName;
    card.querySelector('[data-label="classification"]').textContent = pet.classification;
    card.querySelector('[data-label="gender"]').textContent = pet.gender;
    card.querySelector('[data-label="age"]').textContent = pet.age;
    card.querySelector('p:last-of-type').textContent = pet.medicalHistory;
  }
};

addPetsForm.addEventListener('submit', addPet);
getPets();












