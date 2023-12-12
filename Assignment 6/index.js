// Get DOM object city-form ID, which is on the form element

const citipix = document.querySelector("#citipix-form");
// console.log(citipix);

const citiName = document.querySelector("#city-type");
// console.log(citiName);

citipix.addEventListener("submit", function (event) {
  event.preventDefault();
  //This stops the page from re-loading.//
  // console.dir(citiName);
  // console.log(citiName.value);

  // Research .trim and .toLowerCase. add them to citiNameValue.Might need to give a second const in for citiNameValue. //
  const citiNameValue = citiName.value.toLowerCase().trim();
  //.toLowerCase makes the search input not case-sensitive. but the values we give for citiNameValue have to be all lower cases.//
  //.trim let the form accept input with space, e.g. "NYC__" is still valid.//

  // document.body.classList = ""; but the below one is a better method. //

  document.body.removeAttribute("class");
  // This is to remove the previous classed that is added in the form. ___Remember the rule of specificity. //
  //  document.body.removeAttribute("style");//

  if (
    citiNameValue === "newyork" ||
    citiNameValue === "new york" ||
    citiNameValue === "nyc"
  ) {
    document.body.classList.add("nyc");
    //document.body.setAttribute("style", "background : url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/nyc.jpg)"
    //setAttribute is more detailed in the Looping example David did for this HW. //
    console.log("Hello New York!");
    // Add classname to body to change background. //
  } else if (citiNameValue === "san" || citiNameValue === "san francisco") {
    document.body.classList.add("sf");
    console.log("Hello sf!");
  } else if (citiNameValue === "la" || citiNameValue === "los angeles") {
    document.body.classList.add("la");
    console.log("Hello Las Vagas!");
  } else if (citiNameValue === "austin") {
    document.body.classList.add("austin");
    console.log("Hello Austin!");
  } else if (citiNameValue === "sydney") {
    document.body.classList.add("sydney");
    console.log("Helllo Sydney!");
  } else {
    console.log("Please try a different city!");
    //Look into a way to clear all the class names. //
  }
  citipix.reset();
});

// True form submissions go to a backend service, but we want to handle things in the front-end. How can we do this?

// Get the text input fields values with .value on the input - but how exactly?

// You always want to scan and clean data when you get it from the browser, think about .trim and .toLowerCase - this will make your conditional detection more consistent

// This about conditional logic. We want to check through each possible input a user gives us to make this work properly. Think about conditional statements, going through the list of possible city options.

// If a user gives us 'Austin' versus 'austin' - how can we make those point to the same background?

// We know we want to change the background on the page by switching classes. But how do we replace one class with another using JS???
