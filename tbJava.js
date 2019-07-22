
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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbtn").style.display = "block";
  } else {
    document.getElementById("topbtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//https://www.w3schools.com/jsref/met_table_insertrow.asp
