
function togglePaymentDetails(e) {
  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector("#checkoutForm");
  // we will also need the creditCardContainer and paypalUsernameContainer
  const creditCardContainer = document.getElementById(
    "creditCardNumberContainer"
  );
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide payment containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  // Disable required for the hidden fields...if we hide a required field the browser will throw an error when we try to submit!
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show the container based on the selected payment method
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// attach a change event handler to the paymentMethod input
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);
  
  function validateForm(event) {
    // Get a reference to the form
    const theForm = event.target;
    const errors = [];
    let isValid = true;
  
    // Check for specific name "Bob"
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
  
    // Check for valid credit card number if payment method is credit card
    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
  
    // Prevent form submission if validation fails and show errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  // Attach submit event listener to the form
  document
    .querySelector("#checkoutForm")
    .addEventListener("submit", validateForm);
  