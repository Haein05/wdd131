
export function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((sum, element) => sum + (parseFloat(element.value) || 0), 0);
  }
  

  export function successTemplate(info) {
    return `
      Thank you, ${info.name} for registering. 
      You have registered ${info.participants} participant(s) and owe $${info.fees.toFixed(2)} in fees.
    `;
  }
  

  export function participantTemplate(count) {
    return `
      <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname_${count}"> First Name<span>*</span></label>
          <input id="fname_${count}" type="text" name="fname_${count}" required />
        </div>
        <div class="item activities">
          <label for="activity_${count}">Activity #<span>*</span></label>
          <input id="activity_${count}" type="text" name="activity_${count}" />
        </div>
        <div class="item">
          <label for="fee_${count}">Fee ($)<span>*</span></label>
          <input id="fee_${count}" type="number" name="fee_${count}" class="fee" />
        </div>
        <div class="item">
          <label for="date_${count}">Desired Date <span>*</span></label>
          <input id="date_${count}" type="date" name="date_${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade_${count}" name="grade_${count}">
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }
  