function funcao() {
    var senha = document.getElementById("senha").value
    var confirmar_senha = document.getElementById("confirmar_senha").value
    var idade = document.getElementById("idade").value
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var estado = document.getElementById("estado").value
    var cidade = document.getElementById("cidade").value
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    var cont = 0
    if (nome == false) {
    }
    else cont = cont + 1
    if (idade == false) {
    }
    else cont = cont + 1
    if (email == false) {
    }
    else cont = cont + 1
    if (telefone == false) {
    }
    else cont = cont + 1
    if (estado == false) {
    }
    else cont = cont + 1
    if (cidade == false) {
    }
    else cont = cont + 1
    if (senha == false) {
    }
    else cont = cont + 1
    if (confirmar_senha == false) {
    }
    else cont = cont + 1
    if (senha != confirmar_senha || senha == false || confirmar_senha == false) {
        alert("As senhas não são iguais!")
    }
    else cont = cont + 1
    if (cont < 9) {
        alert("Preencha todos os campos corretamente!")
    }
    if (cont === 9) {
        alert('Obrigado por se cadastrar!')
        window.location.href="index.html"
    }
}