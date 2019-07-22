var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  picture.style.display = "none";
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


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
