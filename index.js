const div = document.querySelector("#imprimir");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
div.appendChild(table);

table.classList.add("table", "table-dark", "mt-4", "table-hover");

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "#";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Personage";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Personage";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Specie";
let heading_5 = document.createElement("th");
heading_5.innerHTML = "Origin";

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    const result = data.results;
    result.forEach((p) => {
      row_1.appendChild(heading_1);
      row_1.appendChild(heading_2);
      row_1.appendChild(heading_3);
      row_1.appendChild(heading_4);
      row_1.appendChild(heading_5);
      thead.appendChild(row_1);

      let row_2 = document.createElement("tr");
      let row_2_data_1 = document.createElement("td");
      row_2_data_1.innerHTML = `${p.id}`;
      let row_2_data_2 = document.createElement("td");
      row_2_data_2.innerHTML = `<img src="${p.image}" width="54px" class="img-fluid rounded-circle"</img>`;
      let row_2_data_3 = document.createElement("td");
      row_2_data_3.innerHTML = `${p.name}`;
      row_2_data_3.classList.add("text-uppercase");
      let row_2_data_4 = document.createElement("td");
      row_2_data_4.innerHTML = `${p.species}`;
      let row_2_data_5 = document.createElement("td");
      row_2_data_5.innerHTML = `${p.origin.name}`;

      row_2.appendChild(row_2_data_1);
      row_2.appendChild(row_2_data_2);
      row_2.appendChild(row_2_data_3);
      row_2.appendChild(row_2_data_4);
      row_2.appendChild(row_2_data_5);

      tbody.appendChild(row_2);
    });
  });
