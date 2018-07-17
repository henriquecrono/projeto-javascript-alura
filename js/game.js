var createGame = function() {

    var palavraSecreta = '';
    var lacunas = [];
    var etapa = 0;

    var setPalavra = function (palavra){
        palavraSecreta = palavra;

        console.log(palavraSecreta);
        getEtapa();
    };

    var getLacunas = function (){
        lacunas = Array(palavraSecreta.length).fill('');

        console.log(lacunas);
        getEtapa();
    };

    var getEtapa = function () {
        etapa++;
        console.log(etapa);
    };

    return{
        setPalavra: setPalavra,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }
};