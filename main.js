function Individuo (nome, idade, funcao) {
    this.nome = nome;
    this.idade = idade;
    this.funcao = funcao;
}

function Aluno (nome, idade, funcao, turma) {
    this.turma = turma;

    this.apresentaAluno = () =>{
        console.log(`Olá! Eu sou ${nome}, tenho ${idade} e sou ${funcao} da ${turma}.`)
    }

    Individuo.call(this, nome, idade, funcao)
}

function Professor (nome, idade, funcao, disciplina, rede, salario) {
    this.disciplina = disciplina;
    
    this.apresentaProfessor = () =>{
        console.log(`Olá! Eu sou ${nome}, tenho ${idade} e sou ${funcao} de ${disciplina}.`)
    }

    Individuo.call(this, nome, idade, funcao)
}


const aluno1 = new Aluno('Pedro', '10 anos', 'aluno(a)', '6ª B');
const aluno2 = new Aluno('Maria', '9 anos', 'aluno(a)', '5ª A');
const aluno3 = new Aluno('João', '12 anos', 'aluno(a)', '7ª B');

const professor1 = new Professor('Sérgio', '35 anos', 'professor(a)', 'Matemática');
const professor2 = new Professor('Thaila', '39 anos', 'professor(a)', 'Português');
const professor3 = new Professor('Mariana', '25 anos', 'professor(a)', 'Física');

aluno1.apresentaAluno();
aluno2.apresentaAluno();
aluno3.apresentaAluno();
console.log('\n-----------------------\n');
professor1.apresentaProfessor();
professor2.apresentaProfessor();
professor3.apresentaProfessor();