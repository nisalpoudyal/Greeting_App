const greeting = document.getElementById("greeting");
const form = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");
const input = document.getElementById("username");

checkStorage();

function checkStorage() {
    const savedName = localStorage.getItem("user");

    if (savedName) {
        greeting.innerHTML = `Welcome back, ${savedName}!`;
        form.style.display = "none";    
        logoutBtn.style.display = "block"; 
    } else {
        greeting.innerHTML = "Hello, Stranger.";
        form.style.display = "block";   
        logoutBtn.style.display = "none"; 
    }
}

function saveUser() {
    const name = input.value;
    if (name) {
        localStorage.setItem("user", name);
        
        checkStorage();
    }
}

function forgetUser() {
    localStorage.removeItem("user");
    
    checkStorage();
}