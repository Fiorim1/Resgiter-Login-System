//Mostrar senha 
//Show Password
function showPassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.scr = "src/assets/olho.png";
    } else {
        passwordInput.type = "password";
       eyeIcon.src = "src/assets/olho.png"
    }
}