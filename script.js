var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.documentElement.style.overflow = 'hidden';
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.documentElement.style.overflow = 'auto';
}