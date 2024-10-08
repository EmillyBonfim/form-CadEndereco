'use strict'; //Modo restrito
//Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/*Consumo de API - https://viacep.com.br/ */
 
// Função para limpar formulário.
//Após uma consulta, os campos preenchidos anteriormente  vão ser apagados para que um novo endereço seja apresentado
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
}

// Aqui eu coloquei para que todos os campos fossem apagados, para que não houvesse mais trabalho do usuário
// Obs: LOGRADOURO: ruas, avenidas, alamedas, lugar, como praças, jardins, hortos, passeios etc.
// LOCALIDADE: Município, Cidade, região etc.
// API: Interface de Programação de Aplicação
// => ARROW FUNCTION : Arrow = flecha, por causa do
 

// Função para preencher formulários como campos de API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
 
// Cria regra de expressão regular (Regex) para testar valor informado pelo usuário
const eNumero   = (numero) => /^[0-9]+$/.test(numero); // verificando se só há números entre 0 e 9 no campo de CEP

const cepValido = (cep) => cep.length == 8 && eNumero(cep); // Validado a quantidade de números digitados no campo de cep, que possui 8 números
// length propriedade que verifica quantidade de caracteres dentro do argumento cep

// Após o CEP ser cadastrado pelo usuário, automaticamente os campos: logradouro, bairro, localidade e UF, são preenchidos corretamete pela ligação desse site com o sistema ViaCep que fornece os campos de endereço pelo CEP.
 
// Função para consumo de API ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados  = await fetch(url);
        const addres = await dados.json();
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
 
    }else{
        alert('CEP Incorreto');
    }
}
 
// Chama escutado para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
