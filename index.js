$(document).ready(() => {

    let cont = 1;

    $('#formulario').on('submit', (e) => {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const linha = $(`
            <div class="itemTarefa" id="itc${cont}">
                <li id="t${cont}">${novaTarefa}</li>
                <div class="btns-tarefas">
                    <i class="fa-solid fa-square-check btn-feito" title="Concluir" id="${cont}"></i>
                    
                    <i class="fa-solid fa-rectangle-xmark btn-cancelar" title="Cancelar" id="c${cont}"></i>
                </div>
            </div>
        `);

        $(linha).appendTo('ul');
        $('#tarefa').val('');
        cont++
    })

    //Marcar como concluída
    $(document).on('click', '.btn-feito', (e) => {

        $('#t' + e.target.id).addClass('feito');

    })

    //Apagar tarefa
    $(document).on('click', '.btn-cancelar', (e) => {

        $('#it' + e.target.id).remove();
    })

})


