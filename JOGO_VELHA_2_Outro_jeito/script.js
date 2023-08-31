/* 

let elemento = document.getElementById("titulo") //esse elemento esta representando a variavel do titulo

console.log("Resultado: "+elemento.innerText) // vai imprimir apenas o texto e o que esta no titulo

console.log("Resultado: "+elemento.innerHTML) // vai imprimir o texto e o que esta no titulo e as tags html
*/
//JEITO QUE FAZ COM QUE CLIQUE E SERA X E DEPOIS O E IR NA SEQUENCIA ENTRANDO EM UM CICLO

function clicar (quadrado){
    if(quadrado.innertext == ''){
        quadrado.innertext = "X"
    }else if (quadrado.innertext == "X"){
        quadrado.innertext = "O"
    }else {
        quadrado.innertext = ""
    }
}

function desenhaJogo(){//IMPRIME DENTRO DO JOGO UM JEITO DIFERENTE DE COLOCAR OS QUADRADOS DE ACORDO COM O JS
    let jogo = document.querySelector(".jogo")

    for(let i=0; i<=9; i++){
        jogo.innerHTML += `<div class='quadradinho' id='q${i}' onclick='clicar(this)'></div>` //PEGANDO A VARIAVEL PARA MUDAR CERTINHO

    }

}

desenhaJogo()

//criando variavel para procurar todos os elementos da minha página e guarda dentro do quadrado

let quadrado = document.querySelectorAll(".quadradinho")// Se nao fosse o All iria procurar so um quadrado

//quadrado[0].innerText = "X"

//quadrado[3].innerText = "O"

//COMO COLAR ESSA FUNÇÃO LA NO HTML


//DEVER DE CASA - 1º QUANDO CLICA APARECE X, O PROXIMO CLIQUE PRECISA SER BOLINHA 
// 2º QUANDO OUTRA PESSOA CLICAR ONDE JA CLICOU NAO PODE FAZER NADA
//3º CONDIÇOES DE VITORIA, TEM QUE FAZER E GANHAR, HORIZONTAL, VERTICAL E DIAGONAL

// ANALISAR PROJETO PASSADO QUE É SÓ ADAPTAR ELE... QUE É FÁCIL