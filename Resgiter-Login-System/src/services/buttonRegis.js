//Função para habilitar ou desabilitar o botão registre-se
function enableRegisterButton () {
    //Obter o botão registro e o email
    let registerBtn = document.getElementById("emailBtn");
    letresult = document.getElementById("result");
    //Obter o status do email 
    let emailStatus = result.textContent.toLowerCase();
    //Habilitar o botao apenas se o email for válido 
    if (emailStatus === "emailválido") {
        //Remover o atributo "disabled" do botão
        registerBtn.removeAttribute("disabled");
    } else {
        //Add o atributo disabled ao botao de registre-se 
        registerBtn.setAttribute("disabled", "true");
    }
}
//Startar a função sempre que ter a mudança no email
document.getElementById("email").addEventListener("input", enableRegisterButton);