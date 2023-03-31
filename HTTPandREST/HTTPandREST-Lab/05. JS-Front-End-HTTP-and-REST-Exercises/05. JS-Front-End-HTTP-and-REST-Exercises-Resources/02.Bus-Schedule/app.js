function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  let id = "depot";
  const info = document.querySelector("#info > span");
  const departButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");
  let stop = "";
  let stopName = "";

  function depart() {
    fetch(`${BASE_URL}${id}`)
      .then((res) => res.json())
      .then((stops) => {
        if (id === "depot") {
          stop = "Depot";
        } else {
          stop = id;
        }
        stopName = stops.name;
        id = stops.next;
        info.textContent = `Next stop ${stopName}`;

        departButton.disabled = true;
        arriveButton.disabled = false;
      })
      .catch((err) => {
        info.textContent = "Error";
        departButton.disabled = true;
        arriveButton.disabled = true;
      });
  }

  async function arrive() {
    departButton.disabled = false;
    arriveButton.disabled = true;
    info.textContent = `Arriving at ${stopName}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
