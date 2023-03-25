function solve() {
  const [generateTextArea, buyTextArea] = Array.from(
    document.getElementsByTagName("textarea")
  );
  const [generateButton, buyButton] = Array.from(
    document.getElementsByTagName("button")
  );
  const tbody = document.querySelector(".table > tbody");

  generateButton.addEventListener("click", generateHandler);
  buyButton.addEventListener("click", buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = addElement("tr", "", tbody);
      const firstColumnId = addElement("td", "", tableRow);
      addElement("img", "", firstColumnId, "", "", { src: img });
      const secondColumnId = addElement("td", "", tableRow);
      addElement("p", name, secondColumnId);
      const thirdColumnId = addElement("td", "", tableRow);
      addElement("p", price, thirdColumnId);
      const forthColumnId = addElement("td", "", tableRow);
      addElement("p", decFactor, forthColumnId);
      const fifthColumnId = addElement("td", "", tableRow);
      addElement("input", "", fifthColumnId, "", "", { type: "checkbox" });
    }
  }
  function buyHandler() {
    const allCheckedInputs = Array.from(
      document.querySelectorAll("tbody tr input:checked")
    );
    let boughtItems = [];
    let totalPrice = 0;
    let totalDeckFactor = 0;
    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [_firstColumn, secondColumn, thirdColumn, forthColumn] = Array.from(
        tableRow.children
      );
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDeckFactor = Number(forthColumn.children[0].textContent);
      totalDeckFactor += currentDeckFactor
    }
    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
    buyTextArea.value += `Average decoration factor: ${totalDeckFactor / allCheckedInputs.length}`
   

  }

  function addElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}
