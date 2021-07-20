let nome = document.getElementById('nome') // get especifico do id não precisa de #
let email = window.document.getElementById('email') // "window" antes do document ajuda a completar os comandos
let assunto = window.document.querySelector('#assunto') // querySelector precisa da //#endregion

nome.style.width = '97%'
email.style.width = '97%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = ""
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = ""
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length < 5) {
        txtAssunto.innerHTML = "Seu texto deve conter no mínimo 5 caracteres"
        txtAssunto.style.color = "red"
    }
    else {
        txtAssunto.innerHTML = ""
    }
}