function solve() {
  const BASIC_URL = " http://localhost:3030/jsonstore/tasks/";

  const loadBtn = document.getElementById("load-vacations");
  let vacationData = {};
  let vacationId = null;
  loadBtn.addEventListener("click", loadVacations);
  const list = document.getElementById("list");
  const addBtn = document.getElementById("add-vacation");
  const inputName = document.getElementById("name");
  const inputDate = document.getElementById("from-date");
  const inputDays = document.getElementById("num-days");
  const editBtn = document.getElementById("edit-vacation");

  addBtn.addEventListener("click", addVacation);

  function addVacation(e) {
    let name = inputName.value;
    let date = inputDate.value;
    let days = inputDays.value;
    if (name == "" || date == "" || days == "") {
      return;
    }
    let vacation = {
      name,
      date,
      days,
    };
    let httpHeaders = {
      method: "POST",
      body: JSON.stringify(vacation),
    };
    fetch(BASIC_URL, httpHeaders)
      .then((res) => res.json())
      .then(loadVacations);
    inputName.value = "";
    inputDate.value = "";
    inputDays.value = "";
  }

  async function loadVacations() {
    list.innerHTML = "";
    try {
      const response = await fetch(BASIC_URL);
      const data = await response.json();

      for (const dataId in data) {
        const { name, date, days } = data[dataId];
        let container = document.createElement("div");
        container.classList.add("container");
        list.appendChild(container);
        let nameVacation = document.createElement("h2");
        nameVacation.textContent = name;
        container.appendChild(nameVacation);
        let dateVacation = document.createElement("h3");
        dateVacation.textContent = date;
        container.appendChild(dateVacation);
        let daysVacation = document.createElement("h3");
        daysVacation.textContent = days;
        container.appendChild(daysVacation);
        let btnChange = document.createElement("button");
        btnChange.textContent = "Change";
        btnChange.classList.add("change-btn");
        container.appendChild(btnChange);
        let btnDone = document.createElement("button");
        btnDone.textContent = "Done";
        btnDone.classList.add("done-btn");
        container.appendChild(btnDone);
        btnChange.addEventListener("click", () => {
          vacationId = dataId;
        

          inputName.value = nameVacation.textContent;
          inputDate.value = dateVacation.textContent;
          inputDays.value = daysVacation.textContent;
          editBtn.disabled = false;
          addBtn.disabled = true;

          editBtn.addEventListener("click", () => {
            let editVacation = {
              name: inputName.value,
              date: inputDate.value,
              days: inputDays.value,
    
            };

            let editHeaders = {
              method: "PUT",
              body: JSON.stringify(editVacation),
            };
            fetch(BASIC_URL + vacationId, editHeaders);

            editBtn.disabled = true;
            addBtn.disabled = false;
            inputName.value = "";
            inputDate.value = "";
            inputDate.value = "";
            inputDays.value = "";
            loadVacations();
            
          });
         
         
        });
        btnDone.addEventListener("click", () => {

            let deleteHeaders = {
              method: "DELETE",
            };
            fetch(BASIC_URL + vacationId, deleteHeaders);
            const container = document.querySelector(`.container`);
            container.remove();
            loadVacations();

          })
      }
    } catch (error) {
      console.log(error);
    }
  }
}

solve();
