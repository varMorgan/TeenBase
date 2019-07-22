function addRow(){
  "use strict";

  var i ;
  var sumVal = 0;

  var table = document.getElementById("table");
  var row= document.createElement("tr");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td2.innerHTML = document.getElementById("userInput").value;
  td3.innerHTML = parsInt(document.getElementById("add").value);




  row.appendChild(td2);
  row.appendChild(td3);



  table.children[0].appendChild(row);
}
