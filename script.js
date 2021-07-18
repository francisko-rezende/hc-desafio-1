const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let data = {
    name,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("user", convertData);

  let content = document.getElementById("formContainer");

  content.innerHTML = `Seu cadastro tá feito!`;
});
