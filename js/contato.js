function alertaDeEnvio() {
    let nome, email, msg;
    nome = document.querySelector("input#nome").value;
    email = document.querySelector("input#email").value;
    msg = document.querySelector("textarea#mensagem").value;
    if (nome != "" && email != "" && msg != "") {
        alert("E-mail enviado com sucesso");
    } else {
        alert("Verifique os dados de contato. E a mensagem digitada.")
    }
}