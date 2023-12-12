// document.getElementById("menu-1-button").addEventListener("click", function(){
//     document.querySelector("#menu-1").classList.toggle("show");
//   })

document.querySelector("#about-button").addEventListener("click", function () {
  document.querySelector("#about-menu").classList.toggle("show");
});

document
  .querySelector("#inspiration-button")
  .addEventListener("click", function () {
    document.querySelector("#inspiration-menu").classList.toggle("show");
  });

const fullName = document.querySelector("#full-name");

//Form Validation://

fullName.addEventListener("input", (event) => {
  if (fullName.validity.typeMismatch) {
    fullName.setCustomValidity("I am expecting your name!");
  } else {
    fullName.setCustomValidity("");
  }
});
// How to make this wrok???

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
