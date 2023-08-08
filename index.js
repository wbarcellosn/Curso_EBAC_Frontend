const form = document.getElementById('formulario');
const num1 = document.getElementById('numero-1');
const num2 = document.getElementById('numero-2');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const validacaoPositiva = `<b>Formulário válido!</b><br> O número <b>${num2.value}</b> é maior do que o número <b>${num1.value}</b>`;
    const validacaoNegativa = `<b>Formulário inválido!</b><br> O número <b>${num2.value}</b> não é maior do que o número <b>${num1.value}</b>`;
    const containerMensagem = document.getElementById('mensagem-validacao');


    if (num2.valueAsNumber > num1.valueAsNumber) {

        containerMensagem.innerHTML = validacaoPositiva;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'rgb(135, 253, 135)';

        num1.value = ' ';
        num2.value = ' ';

        setTimeout(() => {
            containerMensagem.style.display = 'none';
        }, 3000);

    }

    else {

        containerMensagem.innerHTML = validacaoNegativa;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'rgb(250, 139, 139)';

        num1.value = ' ';
        num2.value = ' ';

        setTimeout(() => {
            containerMensagem.style.display = 'none';
        }, 3000);
    }

})