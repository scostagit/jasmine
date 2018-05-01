function Paciente(nome, idade,peso, altura) {

    var clazz = {

        imprime : function() {
            alert(nome + " tem " + idade);
        },

        batimentos : function() {
            return idade * 365 * 24 * 60 * 80;
        },

        imc : function() {
            return peso/(altura*altura);
        },

        preco : function() {
            if(retorno) return 0;

            var precoFinal = 0;

            procedimentos.forEach(function(procedimento) {
                if("raio-x" == procedimento) precoFinal += 55;
                else if("gesso" == procedimento) precoFinal += 32;
                else precoFinal += 25;
            });

            if(particular) precoFinal *= 2;

            return precoFinal;
        }
    };

    return clazz;
}