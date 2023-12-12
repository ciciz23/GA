document.querySelector("#about-button").addEventListener("click", function () {
  document.querySelector("#about-menu").classList.toggle("show");
});

document
  .querySelector("#inspiration-button")
  .addEventListener("click", function () {
    document.querySelector("#inspiration-menu").classList.toggle("show");
  });

document.querySelector("#okay-button").addEventListener("click", function () {
  document.querySelector("#modal-box").classList.toggle("disappear");
});
