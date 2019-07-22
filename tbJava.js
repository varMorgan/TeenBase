
// function addComment() {
//   var table = document.getElementById("table");
//
//   var row= document.createElement("tr");
//   var td1 = document.createElement("td");
//
//
//   td1.innerHTML = document.getElementById("comment").value;
//
//   row.appendChild(td1);
//
//   table.children[0].appendChild(row);
//
// }

function saveForm() {
  var table = document.getElementById("table");

  var row = table.insertRow(0);

  var cell1 = row.inserCell(0);

  cell1.innerHTML = "tesr";

}

//https://www.w3schools.com/jsref/met_table_insertrow.asp
