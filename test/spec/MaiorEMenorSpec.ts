
import { MaiorEMenor} from "../../src/MaiorEMenor";

/*
    describe
        A primeira coisa que devemos colocar nesse arquivo é um describe. Ele serve para descrever o que vamos testar.
        No caso, como vamos testar o MaiorEMenor, colocaremos isso nele. Veja que ele recebe uma função como segundo 
        parâmetro. Acostume-se com isso, no Jasmine (bem como no Javascript), passaremos funções para todos os lados:
 */

 describe("Maior e  Menor", ()=>{
    /*
     it
        Dentro dessa função, agora colocaremos cada um dos nossos testes. No primeiro deles, faremos exatamente o primeiro 
        cenário que fizemos hoje: uma sequência de números fora de ordem. Para isso, colocaremos dentro desse describe, 
        uma função chamada it. Nela passaremos o "nome do teste", ou seja, o quê aquele teste faz, e em seguida uma função com o teste.
     */
    it("deve entender numeros em ordem nao sequencial",function(){
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        /*
            expect
                Tudo certo até agora. Criamos um teste, passamos um cenário e invocamos uma ação. Falta agora a parte da validação. 
                E é aí que vamos usar o Jasmine. Frameworks de teste possuem métodos específicos para fazer a validação. 
                No caso do Jasmine, precisamos conhecer o método expect que, como o próprio nome diz, serve para dizermos 
                quais são as nossas expectativas com o resultado final. Sabemos que o valor maior é 15, e o menor é 5. Então colocaremos 
                isso no teste:
         */
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender numeros em ordem decrescente", ()=> {
       var algoritmo = new MaiorEMenor();
        algoritmo.encontra([9,8,7,6]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("test servrer", () =>{
       
    });


 });