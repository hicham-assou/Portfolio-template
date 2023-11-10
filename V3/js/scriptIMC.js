var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = "Tous les champs sont requis";
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

  var result = "";
  var commentClass = "";

  if (bmi < 18.5) {
    result = "Vous êtes sous le seuil de votre forme physique";
    commentClass = "comment-blue";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Votre BMI est normal";
    commentClass = "comment-green";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Votre BMI est élevé";
    commentClass = "comment-yellow";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Votre BMI est très élevé";
    commentClass = "comment-orange";
  } else if (35 <= bmi) {
    result = "Votre BMI est extrêmement élevé";
    commentClass = "comment-red";
  }

  resultArea.style.display = "block";
  resultArea.innerHTML = `<span class="${commentClass} fadeIn">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

// Quand les utilisateurs cliquent sur <span> (x), on ferme le modèle
span.onclick = function () {
  modal.style.display = "none";
};

// Quand l'utilisateur clique n'importe où en dehors du modèle, fermez-le
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
