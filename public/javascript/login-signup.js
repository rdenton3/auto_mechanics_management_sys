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

