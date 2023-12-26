//Criar uma função 
//
function emailCheck() {
    //Proibir o reload da página
    //
    event.preventDefault();
    let email = document.getElementById("email").value;
    let resultt = document.getElementById("result");
    //Verificar o formato do email do usuário
    //
    const emailV = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Lista com os domínios permitidos pelo software
    //
    let domins = ["gmail.com", "yahoo.com", "outlook.com"];
    if (emailV.test(email)) {
        //Extrair o domínio do email do usuário
        //
        let domin = email.split("@")[1];
        //Vamos verificar se o domínio do email do usuário está na lista de dmonínios permitidos (domins)
        //
        if (domins.includes(domin)) {
            resultt.style.color = "green";
            resultt.textContent = "Email Válido";
        }
        //Se o if não for verdadeiro o else irá rodar, onde nele irá pedir que o domínio não está certo
        //
        else {
            resultt.style.color = "red";
            resultt.textContent = "Email Válido, Mas O Domínio Deste Email Não É Aceito Pelo Software";
            alert("O Email Deve Ter Os Seguintes Domínios: @gmail, @yahoo ou @outlook");
        }
    }
    //Esse else é para que o email que o usuário inseriu não é válido
    //
    else {
        resultt.style.color = "red";
        resultt.textContent = "Email Inválido";
        alert("Insira Um Email Válido");
    }
}
