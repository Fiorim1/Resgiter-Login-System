//Fazer com que o usuário preencha todos os campos
//Have the user fill in all fields
function validateForm() {
    let username = document.getElementById("nome").value;
    let lastname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username === "" || lastname === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos");
        return false;
    }
    
}