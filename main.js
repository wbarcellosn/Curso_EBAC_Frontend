const prompt = require('prompt-sync')();

class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }

}

const alunos = [];

function main() {
    console.clear();
    let opcao;

    console.log(`Sistema de cadastramento de notas:
        
        1 - Cadastrar nova nota;
        2 - Visualizar alunos cadastrados;
        3 - Visualizar alunos aprovados;
        4 - Visualizar alunos reprovados;
        0 - Sair \n`);

    opcao = prompt('Digite a opção desejada: ');

    if (opcao == '1') {
        console.clear();
        cadastrarAluno();
        console.log('\nAluno e nota cadastrados com sucesso! \n');
        prompt('Pressione ENTER para voltar ao menu principal.');
        console.clear();
        main();
    }

    else if (opcao == '2') {
        console.clear();
        console.table(alunos);
        console.log('\n');
        prompt('Pressione ENTER para voltar ao menu principal.');
        console.clear();
        main();
    }

    else if (opcao == '3') {
        console.clear();
        retornaAprovados();
        console.log('\n');
        prompt('Pressione ENTER para voltar ao menu principal.');
        console.clear();
        main();
    }

    else if (opcao == '4') {
        console.clear();
        retornaReprovados();
        console.log('\n');
        prompt('Pressione ENTER para voltar ao menu principal.');
        console.clear();
        main();
    }

    else if (opcao == '0') {
        console.clear();
    }

    else {
        console.clear();
        console.log('Opção inválida!\n');
        prompt('Pressione ENTER para voltar ao menu principal.');
        main();
    }
} 

main();


function cadastrarAluno() {
    let nome = prompt('Digite o nome do aluno: ');
    let nota = prompt('Digite a nota do aluno: ');

    const alunoCadastrado = new Aluno(nome, nota);

    if (nota >= 6 && nota <= 10) {
        alunoCadastrado.situacao = 'Aprovado(a)'
        alunos.push(alunoCadastrado)
    }

    else if (nota >= 0 && nota < 6) {
        alunoCadastrado.situacao = 'Reprovado(a)'
        alunos.push(alunoCadastrado)
    }

    else {
        console.log('\nApenas notas de 0 a 10 são aceitas, por favor, digite uma nota válida.\n');
        prompt('Pressione ENTER para reiniciar.');
        console.clear();
        cadastrarAluno();
    }


}

function retornaAprovados() {
    const alunosAprovados = alunos.filter((aluno) => {
        return aluno.situacao == "Aprovado(a)"
    })

    console.clear()
    console.log(`Estão aprovados um total de ${alunosAprovados.length} alunos.`)
    console.log("São eles:");
    console.table(alunosAprovados);
}

function retornaReprovados() {
    const alunosReprovados = alunos.filter((aluno) => {
        return aluno.situacao == "Reprovado(a)"
    })

    console.clear()
    console.log(`Estão reprovados um total de ${alunosReprovados.length} alunos.`)
    console.log("São eles:");
    console.table(alunosReprovados);
}


