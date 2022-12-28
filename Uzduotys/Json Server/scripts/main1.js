class PetForm {
    constructor() {
      this.form = document.createElement('form');
      this.form.setAttribute('id', 'addPetsForm');
  
      this.h1 = document.createElement('h1');
      this.h1.textContent = 'You can add new patient here!';
      this.form.appendChild(this.h1);
  
      this.fields = [
        { label: 'Pet Name', id: 'petname', type: 'text' },
        { label: 'Clasification', id: 'clasification', type: 'select', options: ['Cat', 'Dog', 'Exotic'] },
        { label: 'Scientific Name', id: 'scientificName', type: 'text' },
        { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female'] },
        { label: 'Age', id: 'age', type: 'number' },
        { label: 'Facts', id: 'facts', type: 'text' },
        { label: 'Medical History', id: 'medicalHistory', type: 'text' },
        { label: 'Image', id: 'image', type: 'text' }
      ];
    }
  
    createFormFields() {
      for (const field of this.fields) {
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
  
        this.form.appendChild(div);
      }
    }
  
    createSubmitButton() {
      this.button = document.createElement('button');
      this.button.setAttribute('type', 'submit');
      this.button.classList.add('btnAddPatient');
      this.button.textContent = 'Add Patient';
      this.form.appendChild(this.button);
    }
    render() {
        document.body.appendChild(this.form);
    
        this.patientsDiv = document.createElement('div');
        this.patientsDiv.setAttribute('id', 'patients');
        document.body.appendChild(this.patientsDiv);
      }
    
      addSubmitEventListener(handler) {
        this.form.addEventListener('submit', (event) => {
          event.preventDefault();
          handler();
        });
      }
    }
    
    const petForm = new PetForm();
    petForm.createFormFields();
    petForm.createSubmitButton();
    petForm.render();
    
    petForm.addSubmitEventListener(() => {
      // Add code here to handle the form submission and add the new pet to the list
    });

    class PetList {
        constructor(url) {
          this.url = url;
          this.patientsDiv = document.querySelector('#patients');
        }
      
        async getPets() {
          const response = await fetch(this.url, { method: 'GET' });
          return response.json();
        }
      
        renderPets(pets) {
          // Remove all existing pets from the patients div
          while (this.patientsDiv.firstChild) {
            this.patientsDiv.removeChild(this.patientsDiv.firstChild);
          }
      
          // Add each pet to the patients div
          pets.forEach((pet) => {
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
            deleteBtn.addEventListener('click', () => this.deletePatient(pet.id));
      
            // Create the edit button
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-warning');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => this.editPatient(pet.id));

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
    this.patientsDiv.appendChild(cardWrapper);
  });
}

deletePatient(id) {
  // Add code here to delete the pet with the specified ID
}

editPatient(id) {
  // Add code here to edit the pet with the specified ID
}
}

const petList = new PetList('http://localhost:3000/pets');
petList.getPets().then((pets) => petList.renderPets(pets));

class Pet {
    constructor(petname, clasification, scientificName, gender, age, facts, medicalHistory, image) {
      this.petname = petname;
      this.clasification = clasification;
      this.scientificName = scientificName;
      this.gender = gender;
      this.age = age;
      this.facts = facts;
      this.medicalHistory = medicalHistory;
      this.image = image;
    }
  
    add() {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getPets();
        });
    }
  
    delete(id) {
      fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getPets();
        });
    }
  
    edit(id) {
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
        constclassificationFormGroup.classList.add('form');

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
        genderInput.setAttribute('type', 'text');
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
        ageInput.setAttribute('type', 'text');
        ageInput.setAttribute('name', 'age');
        ageInput.setAttribute('id', 'age');
        ageInput.classList.add('form-control')
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

// Append the label and input to the form group
imageFormGroup.appendChild(imageLabel);
imageFormGroup.appendChild(imageInput);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.classList.add('btn', 'btn-primary');
submitButton.textContent = 'Update Pet';

 // Append all of the form groups and the submit button to the form
addPetsForm.appendChild(petNameFormGroup);
addPetsForm.appendChild(classificationFormGroup);
addPetsForm.appendChild(scientificNameFormGroup);
addPetsForm.appendChild(genderFormGroup);
addPetsForm.appendChild(ageFormGroup);
addPetsForm.appendChild(factsFormGroup);
addPetsForm.appendChild(medicalHistoryFormGroup);
addPetsForm.appendChild(imageFormGroup);
addPetsForm.appendChild(submitButton);

// Add the submit event listener to the form
addPetsForm.addEventListener('submit', updatePet);

// Define the updatePet function
const updatePet = (e) => {
  e.preventDefault();
  const updatedPet = {
    petname: petname.value,
    clasification: clasification.value,
    scientificName: scientificName.value,
    gender: gender.value,
    age: age.value,
    facts: facts.value,
    medicalHistory: medicalHistory.value,
    image: image.value,
  };