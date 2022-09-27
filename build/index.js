"use strict";
const nomePaciente = "Irmão";
const sobrenomePaciente = "do Jorel";
let idade = 60;
const emergencia = true;
const alocacao = "apartamento";
let medicamentos = ['Dipirona', 'Benzetacil'];
let dosagem = ['500mg', '1 ampola'];
const planoDeSaude = {
    plano: "Notredame",
    "tipo": "RM BH 300",
};
const adicionais = {
    descricao: "tv adicional",
    preco: 10.00,
    comprado: true
};
const enderecoPaciente = ["Rua A", 123, "Bairro: B"];
let enderecoResponsavel = ['Rua do Responsavel', 321, "Bairro R"];
const id = 1000;
//string
function cadastroPaciente(nomePaciente, sobrenomePaciente) {
    return `${nomePaciente} ${sobrenomePaciente}`;
}
;
const cadastroCompleto = cadastroPaciente(nomePaciente, sobrenomePaciente);
console.table(`Cadastro: Tipo: ${typeof cadastroCompleto} ${cadastroCompleto}`);
//number
function idadePaciente(idade) {
    return idade;
}
const mostraIdade = idadePaciente(idade);
console.table(`Idade: Tipo: ${typeof mostraIdade} ${mostraIdade}`);
//boolean
const triagem = (emergencia) => {
    if (emergencia) {
        return "Emergência - Vermelho!";
    }
};
const mostraTriagem = triagem(emergencia);
console.log(`Triagem: Tipo: ${typeof mostraTriagem} ${mostraTriagem}`);
// Array
function prescreve(lista) {
    let novaPrescricao = [];
    for (let item of lista) {
        novaPrescricao.push(`${item}`);
    }
    return novaPrescricao;
}
const prescricaoModificada = prescreve(medicamentos);
console.log(`Tipo array ${typeof prescricaoModificada} ${prescricaoModificada}`);
//Tuplas
console.log(`Tipo tuple ${typeof enderecoPaciente} (${enderecoPaciente})`);
console.log(`Tipo tuple ${typeof enderecoResponsavel} (${enderecoResponsavel})`);
const modificaEndereco = (endereco) => {
    if (endereco[0] == "Rua A") {
        endereco[0] = "Rua M";
    }
    return endereco;
};
const enderecoNovo = modificaEndereco(enderecoPaciente);
console.log(`Tipo tuple, endereco modificado do responsavel ${typeof enderecoNovo} (${enderecoNovo})`);
//Object
const devolveFaturamento = (objeto) => {
    console.log(objeto);
    return objeto;
};
devolveFaturamento(planoDeSaude);
devolveFaturamento(adicionais);
//Never
// function lancaExcecao(): never {
//     throw new Error("Testanto tipo never"); // lancamento de exceção
// }
// const nunca = lancaExcecao();
// console.log(nunca);
function verificaIdade(numero) {
    if (typeof numero === "number") {
        return true;
    }
    else {
        return numero;
    }
}
const verIdade = verificaIdade(idade);
console.log(`Tipo never: ${typeof verIdade} ${verIdade}`);
//Union Types
const imprimeId = (codigo) => {
    console.log(`Union Type: ${typeof codigo} ${codigo}`);
    return codigo;
};
imprimeId(id);
//narrowing
const imprimeCodigo = (codigo) => {
    if (typeof codigo !== 'number') {
        console.log(`Union Type com narrowing: ${typeof codigo} (${codigo.toLocaleUpperCase()})`);
    }
    else {
        console.log(`Union Type com narrowing: ${typeof codigo} (${codigo})`);
    }
};
imprimeCodigo("sasas132");
//Enum
var Status;
(function (Status) {
    Status["Faturado"] = "F";
    Status["Pendente"] = "P";
    Status["Recusado"] = "R";
})(Status || (Status = {}));
const situacaoFat1 = Status.Faturado;
const situacaoFat2 = Status.Recusado;
console.log(`Tipo Enum: ${typeof situacaoFat1} ${situacaoFat1}`);
console.log(`Tipo Enum: ${typeof situacaoFat2} ${situacaoFat2}`);
const mudaStatus = (preStatus) => {
    let posStatus;
    switch (preStatus) {
        case Status.Pendente:
            posStatus = Status.Faturado;
            break;
        case Status.Recusado:
            posStatus = Status.Pendente;
            break;
        default:
            posStatus = Status.Pendente;
    }
    return posStatus;
};
const novoStatus = mudaStatus(situacaoFat2);
console.log(`Tipo Enum: ${typeof novoStatus} (${novoStatus})`);
//Nulos e Opcionais
idade = null;
const tratamentoDeRejuvenescimento = (idade) => {
    if (idade) {
        return idade - 10;
    }
    else {
        return 0;
    }
};
const idade2 = tratamentoDeRejuvenescimento(idade);
const idade3 = tratamentoDeRejuvenescimento();
console.log(`Nulo/Opcional: ${typeof idade2} ${idade2}`);
console.log(`Nulo/Opcional: ${typeof idade3} ${idade3}`);
