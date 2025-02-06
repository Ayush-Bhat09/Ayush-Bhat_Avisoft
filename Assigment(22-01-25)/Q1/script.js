function welcomeMessage() {
    const userName = document.getElementById("username").value;
    const message = document.getElementById("welcomeMessage");

    if (userName.length > 3) {
        message.textContent = 'Welcome, ' + userName;
    } else {
        message.textContent = "Please enter a name longer than 3 characters.";
    }
}