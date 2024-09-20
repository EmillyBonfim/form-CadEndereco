'use strict';//Modo restrito
//Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/*Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário. Após uma consulta, os campos preenchidos anteriormente  vão ser apagados para que um novo endereço seja apresentado
const limparFormulario = () =>{

    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';

}

// Aqui eu coloquei para que todos os campos fossem apagados, para que não houvesse mais trabalho do usuário
// Obs: LOGRADOURO: ruas, avenidas, alamedas, lugar, como praças, jardins, hortos, passeios etc.
// => ARROW FUNCTION : Arrow = flecha, por causa do 

const eNumero = (numero) => /^[0-9]+$/.test(numero); //verificando se só há números entre 0 e 9 no campo de CEP

