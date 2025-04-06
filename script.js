// Show signup form
function showSignup() {
    document.getElementById("signup-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
}

// Sign Up Function
function signUp() {
    var uName = document.getElementById("signup-username").value;
    var pWord = document.getElementById("signup-password").value;

    if (uName == "" || pWord == "") {
        alert("Please enter a valid username and password.");
        return;
    }

    // Save user data
    localStorage.setItem("uName", uName);
    localStorage.setItem("pWord", pWord);

    alert("Sign-up successful! Please log in.");
    showLogin();
}

// Show login form
function showLogin() {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

// Login Function
function login() {
    var uName = document.getElementById("login-username").value;
    var pWord = document.getElementById("login-password").value;

    var storedUName = localStorage.getItem("uName");
    var storedPWord = localStorage.getItem("pWord");

    if (uName == storedUName && pWord == storedPWord) {
        alert("Login successful!");
        document.getElementById("login-box").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-name").innerText = uName;
    } else {
        alert("Invalid username or password.");
    }
}

// Logout Function
function logout() {
    document.getElementById("dashboard").style.display = "none";
    showLogin();
}
