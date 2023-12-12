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
  if (fullName.validity.typeMismatch || fullName.value.trim() === "") {
    fullName.setCustomValidity("I am expecting your name!");
  } else {
    fullName.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.typeMismatch || fullName.value.trim() === "") {
    password.setCustomValidity("please type your password!");
  } else {
    password.setCustomValidity("");
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch || fullName.value.trim() === "") {
    email.setCustomValidity(
      "I am expecting an email address! E.g. email@gmail.com"
    );
  } else {
    email.setCustomValidity("");
  }
  // Need to change the type attribute. previously was "text", just need to change to "email".
});

document.querySelector("#okay-button").addEventListener("click", function () {
  document.querySelector("#modal-box").classList.toggle("disappear");
});
