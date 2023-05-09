function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook";
  const nameInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const btnCreate = document.getElementById("btnCreate");
  const phonebook = document.getElementById("phonebook");
  const btnLoad = document.getElementById("btnLoad");

  btnLoad.addEventListener("click", loadPhoneBookHandler);

  btnCreate.addEventListener("click", createPhoneBookHandler);

  async function loadPhoneBookHandler() {
    
    const phoneBookRes = await fetch(BASE_URL);
    const phoneBookData = await phoneBookRes.json();
    const values = Object.values(phoneBookData);
    for (const { phone, person, _id } of values) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = "Delete";
      li.innerHTML = `${person}: ${phone}`;
      li.appendChild(button);
      phonebook.appendChild(li);


      
    }
  }

  function loadPhoneBookHandler() {
    const person = nameInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({person, phone})

    }

  }
}

attachEvents();
