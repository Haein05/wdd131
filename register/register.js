
import { totalFees, successTemplate, participantTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1;

  const addButton = document.getElementById("add");
  const form = document.getElementById("registrationForm");
  const summary = document.getElementById("summary");

  // Event listener for "Add Participant" button
  addButton.addEventListener("click", () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
  });

  
  form.addEventListener("submit", submitForm);


  function submitForm(event) {
    event.preventDefault();

    
    const total = totalFees();


    const adultName = document.getElementById("adult_name").value || "Guest";

 
    const info = {
      name: adultName,
      participants: participantCount,
      fees: total,
    };

    // Hide the form and show the summary message using the success template
    form.style.display = "none";
    summary.style.display = "block";
    summary.innerHTML = successTemplate(info);
  }
});
