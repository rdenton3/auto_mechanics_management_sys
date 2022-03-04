async function appointmentHandler(event) {
    event.preventDefault();
    // this portion is going to need to collect all the data that the user has inputted on the form
    // the query selectors will need to be updated once the template has been completed
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // replace file name here with handlebars that is created
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
// update these 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);