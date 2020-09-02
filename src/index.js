const email = document.getElementById("email");

email.addEventListener("focusout", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("That can not be an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

const country = document.getElementById("country");

country.addEventListener("focusout", function (event) {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("That does not look like a country name!");
  } else {
    country.setCustomValidity("");
  }
});

const zipcode = document.getElementById("zipcode");

zipcode.addEventListener("focusout", function (event) {
  if (zipcode.validity.patternMismatch) {
    zipcode.setCustomValidity("Thats not a ZipCode!");
  } else {
    zipcode.setCustomValidity("");
  }
});

const pass1 = document.getElementById("pass1");

pass1.addEventListener("focusout", function (event) {
  if (pass1.validity.patternMismatch) {
    pass1.setCustomValidity(
      "Must contain at least one upper case, one lower case, one number. Must be at least 8 char."
    );
  } else {
    pass1.setCustomValidity("");
  }
});

const pass2 = document.getElementById("pass2");

pass2.addEventListener("focusout", function (event) {
  if (pass2.validity.patternMismatch) {
    pass2.setCustomValidity(
      "Must contain at least one upper case, one lower case, one number. Must be at least 8 char and same as password field"
    );
  } else {
    pass2.setCustomValidity("");
  }
});
