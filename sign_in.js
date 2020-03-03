var buton = document.getElementById("submit");
var body = {};
buton.addEventListener("click", clickBtn);

function clickBtn(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
  body.email = mail;
  body.password = password;
  console.log(body);

  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(function tokenFunction(response) {
      sessionStorage.setItem("token", response.token);
      window.location.assign("products.html");
    })
    .catch(error => console.log("Error", error));
}