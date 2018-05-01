
/*
A solução pra isso, todos já sabemos: testar software. Agora a pergunta é: por que não testamos? 
Não testamos, porque o teste manual custa caro, demora, é chato e trabalhoso. 
A solução pra isso? Escrever testes automatizados.



Um teste automatizado é um teste que é executado pela máquina

BASE DO TESTE
E fazer isso nem é tão complicado. No código acima, já fizemos boa parte de um teste automatizado. 
Todo teste é dividido em três partes: cenário, ação e validação. 
1) O cenário é o que daremos de entrada para o método que queremos testar (no caso, 5, 15, 7, 9, por exemplo). 
2) A ação é o método que queremos testar (no caso, encontra()). 
3) A validação é a hora que verificamos se a saída bate com o que estávamos esperando (no caso, olhando o console.log).

Jasmine
A única parte que não está automatizada é a validação, afinal um ser humano ainda precisa olhar a saída. 
É justamente isso que vamos melhorar. E, para facilitar nossa vida, usaremos um framework que nos dirá, 
de maneira mais elegante, qual "console.log" falhou, e onde ele está.
 */
function MaiorEMenor() {

    var menor;
    var maior;

    var clazz = {

        encontra : function(nums) {

            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(function(num) {
                if(num < menor) menor = num;
                if(num > maior) maior = num;
            });
        },

        pegaMenor : function() { return menor; },
        pegaMaior : function() { return maior; }
    };

    return clazz;
}

/*var algoritmo = new MaiorEMenor();
//1 Cenario [5,15,7,9]
//2 Acao algoritmo.encontra([5,15,7,9]); a execucao do metodo em si.
algoritmo.encontra([5,15,7,9]);

console.log(algoritmo.pegaMaior()); //Validacao - REsultado esperado.
console.log(algoritmo.pegaMenor()); //Validacao - REsuldato esperado.*/