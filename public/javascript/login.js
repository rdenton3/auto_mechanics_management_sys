async function loginFormHandler(event) {
    event.preventDefault();
    // we need to POST the username, email and password from the form to our server, 
    // go ahead and grab the data from the form. Once we've done so, make a fetch() POST request to the /api/users/ by updating the signupFormHandler() logic
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // replace file name here with handlebars that is created
    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
}
}


document.querySelector('.form').addEventListener('submit', loginFormHandler);

