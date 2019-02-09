var slideIndex = 1;

window.onload = function() {
  showDivs(slideIndex);
}


function plusDivs(n) {
  showDivs(slideIndex += n);
  document.getElementById('number-text').innerHTML = slideIndex + "/4";
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slide-img');
  // makes sure that the given index is within range
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  // changes the display property of all slide images to none
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
