document.body.onload = function() {
  const prospects = ["Andy S. (JS)", "Rob K. (JS)"];

  const addButton = document.getElementById("add-btn");
  addButton.onclick = function(e) {
    const nameInputEl = document.getElementById("name-input");
    prospects.push(nameInputEl.value);

    recreateTable(prospects);
  };

  recreateTable(prospects);
};

function recreateTable(prospects) {
  const theadElement = document.getElementById("table-header");

  removeHeaderColumns(theadElement);
  createTableHeader(theadElement);
  removeTableRows();
  createTableRows(prospects);
}

function removeHeaderColumns(tableHeaderEl) {
  while (tableHeaderEl.children.length > 0) {
    tableHeaderEl.removeChild(tableHeaderEl.firstChild);
  }
}

function createTableHeader(tableHeaderEl) {
  const headerRow = document.createElement("TR");
  const headerCell = document.createElement("TH");
  const headerCellText = document.createTextNode("Name");
  headerCell.appendChild(headerCellText);

  headerRow.appendChild(headerCell);

  tableHeaderEl.appendChild(headerRow);
}

function removeTableRows() {
  const tbodyEl = document.getElementById("table-body");

  while (tbodyEl.childNodes.length !== 0) {
    tbodyEl.removeChild(tbodyEl.firstChild);
  }
}

function createTableRows(pizza) {
  pizza.forEach(function(prospect) {
    // create table row
    const tableRow = document.createElement("TR");
    // create table data cell
    const tableDataCell = document.createElement("TD");
    // create text node inside data cell
    const tableDataCellText = document.createTextNode(prospect);

    tableDataCell.appendChild(tableDataCellText);
    tableRow.appendChild(tableDataCell);

    // add row to tbody
    const tableBodyEl = document.getElementById("table-body");
    tableBodyEl.appendChild(tableRow);
  });
}
