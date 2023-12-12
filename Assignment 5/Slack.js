// Think about application structure a bit, very similar to traffic light exercise we did


/**
 * SIDE MENU
 * If somebody clicks on the menu icon, let the fireworks begin...
 * We're listening to the 'menu-trigger' ID for some action, then we fire 'sideMenuAppears'
 * Likewise, we're listening to the 'menu-close' ID for a click, then we fire 'sideMenuDisappears' when that happens
 * Make it happen!
 */

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened, make it happen! */


document.getElementById("menu-1-button").addEventListener("click", function(){
  document.querySelector("#menu-1").classList.toggle("show");
})


document.getElementById("menu-2-button").addEventListener("click", function(){
  document.querySelector("#menu-2").classList.toggle("show");
})


document.getElementById("menu-3-button").addEventListener("click", function(){
  document.querySelector("#menu-3").classList.toggle("show");
})














