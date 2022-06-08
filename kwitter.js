function addUser() {
    username = document.getElementById("log_input").value
    localStorage.setItem("user", username)

    window.location = "kwitter_room.html"
}