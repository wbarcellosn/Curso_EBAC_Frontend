$(document).ready(function () {

    //Mascaras
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite seu telefone'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF'
    })

    $('#cep').mask('00.000-000', {
        placeholder: 'Digite seu CEP'
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

            cep: {
                required: true
            }
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
            estado: 'Por favor, informe seu estado.',
            cep: 'Por favor, informe seu CEP.'
        },

    })

})


