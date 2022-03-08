async function appointmentHandler(event) {
    event.preventDefault();
    // this portion is going to need to collect all the data that the user has inputted on the form
    // the query selectors will need to be updated once the template has been completed

    // this will be the car data that is passed through
    const year = document.querySelector('#car-year').value.trim();
    const make = document.querySelector('#car-make').value.trim();
    const model = document.querySelector('#car-model').value.trim();
    const vin = document.querySelector('#vin').value.trim();
    const mileage = document.querySelector('#car-mileage').value.trim();
    const date = document.querySelector('#date').value.trim();
    const repair = document.querySelector('#repair').value.trim();
    console.log(year,make,model,mileage,repair,vin,date)
    // this will be the repair info passed through
    // not sure how this will be passed through? I assume as an array since user
    // can pick from a variety of options with checkboxes
    // const repair = []
    // // this will be the appointment info passed through
    // const date = document.querySelector('#date').value.trim();
    // // validate that the user has passed in all necessary fields before the can make an appointment
    if (year && make && model && vin && repair && date && mileage) {
      const response = await fetch('/api/appointments', {
        method: 'post',
        body: JSON.stringify({
          year,
          make,
          model,
          vin,
          repair,
          date,
          mileage
        }),
        headers: { 'Content-Type': 'application/json' }
      });
    //   // once user has submitted appt, take them back to which page? dashboard?
    //   if (response.ok) {
    //     document.location.replace('/dashboard/');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
  }
}
// update these 
document.querySelector('#fullpage').addEventListener('submit', appointmentHandler);