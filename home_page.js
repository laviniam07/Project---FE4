// document.getElementById("button1").addEventListener("click", loadUser);
//         document.getElementById("button2").addEventListener("click", loadUsers);


//         function loadUsers(){
//             var xhr = new XMLHttpRequest();
//             xhr.open("GET", "user2.json", true); -> fisierul de unde am cardurile
//             xhr.onload = function (){
//                 if(this.status == 200){
//                     var users = JSON.parse(this.responseText);
//                     var output = " ";
//                     for(var i in users){
//                         output += "<ul>" +
//                         "<li> ID: " +users[i].id+"</li>" +
//                         "<li> Name: " +users[i].name+"</li>" +
//                         "<li> Email: " + '<img src ="'+users[i].image+'" width="70" height="70"' + "</li>" +
//                         "</ul>"
//                     }
//                     document.getElementById("users").innerHTML = output;
//                 }
//             }
//             xhr.send();
//         }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}