var createController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 

    var exibeLacunas = function () {
        console.log('falta implementar');
    };

    // muda o texto do placeHolder do campo de entrada    
    var mudaPlaceHolder = function (texto) {

        console.log('falta implementar');
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 

    var guardaPalavraSecreta = function () {

        console.log('falta implementar');
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        alert('etapa 1 - falta implementar');
                        break;
                    case 2:
                        alert('etapa 2 - falta implementar');
                        break;
                }
            }
        });
    };

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia: inicia };
};