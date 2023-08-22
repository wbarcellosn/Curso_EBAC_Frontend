$(document).ready(function () {

    //Mascaras
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite seu telefone'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF'
    })


    $('form').validate({

        rules: {

            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: true
            },

            cpf: {
                required: true
            },

            rua: {
                required: true
            },

            numero: {
                required: true
            },

            bairro: {
                required: true
            },

            cidade: {
                required: true
            },

            estado: {
                required: true
            },
        },

        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            rua: 'Por favor, informe sua rua.',
            numero: 'Por favor, informe o número.',
            bairro: 'Por favor, informe seu bairro.',
            cidade: 'Por favor, informe sua cidade.',
            estado: 'Por favor, informe seu estado.'
    }
    })

    $('#avancar').click(() => {

        $('#dadosPessoais').css({display: 'none'});
        $('#avancar').css({display: 'none'});
        $('#endereco').css({display: 'block'});
        $('#voltar').css({display: 'block'});
        $('#enviar').css({display: 'block'});
    })

    $('#voltar').click(() => {

        $('#dadosPessoais').css({display: 'block'});
        $('#avancar').css({display: 'block'});
        $('#endereco').css({display: 'none'});
        $('#voltar').css({display: 'none'});
        $('#enviar').css({display: 'none'});
    })
})


