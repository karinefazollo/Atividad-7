function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationNpost = document.forms["register"]["npost"].value;
  let validationNaPost = document.forms["register"]["napost"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationCity = document.forms["register"]["city"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationNpost == "") {
    alert("O nome do postulante 1 deve ser preenchido");
    return false;
  }
  if (validationNaPost == "") {
    alert("O nome do postulante 2 deve ser preenchido");
    return false;
  }

  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }
  if (validationCity == "") {
    alert("O Nome da cidades deve ser preenchido");
    return false;
  }
  if (validationRadio == "") {
    alert("A região deve ser preenchida");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let npost = document.forms["register"]["npost"].value;
  let napost = document.forms["register"]["napost"].value;
  let date = document.forms["register"]["date"].value;
  let city = document.forms["register"]["city"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = ` 
    <th scope="row">${cod}</th>
    <td>${npost}</td>
    <td>${napost}</td>
    <td>${date}</td>
    <td>${city}</td>
    <td>${radio}</td>
    `;
}
function scrollToTop() {
  window.scrollTo(0, 0);
}
