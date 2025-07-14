function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "Harsh Verma" && password === "2303126") {
    window.location.href = "admin.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}
