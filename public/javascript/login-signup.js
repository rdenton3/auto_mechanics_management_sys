//MB added this to handle sign up functionality
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");
  console.log("SIGNING UP")
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
    console.log("ok")
  } else {
    console.log("Sign up failed");
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
async function signupFormHandler(event) {
    event.preventDefault();
    // we need to POST the username, email and password from the form to our server, 
    // go ahead and grab the data from the form. Once we've done so, make a fetch() POST request to the /api/users/ by updating the signupFormHandler() logic
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // Check the response status
        if (response.ok) {
            // console.log('success');
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
}

// Login request

async function loginFormHandler(event) {
    event.preventDefault();
    // we need to POST the username, email and password from the form to our server, 
    // go ahead and grab the data from the form. Once we've done so, make a fetch() POST request to the /api/users/ by updating the signupFormHandler() logic
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
        // Check the response status
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

