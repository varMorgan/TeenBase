
function addComment() {
  var table = document.getElementById("table");

  var row= document.createElement("tr");
  var td1 = document.createElement("td");


  td1.innerHTML = document.getElementById("comment").value;

  row.appendChild(td1);

  table.children[0].appendChild(row);

}

function saveFiletotxt() {
  
}
