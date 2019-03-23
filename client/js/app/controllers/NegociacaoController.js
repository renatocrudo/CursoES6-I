class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
/*
O ideial é utilizar no construtor para não precisar ficar percorrendo o DOM toda a vez que clicar no botão de evento
*/

    //adicionando um metodo
    adiciona(event) {
        event.preventDefault();

        //para descobrir o tipo de dado
        //console.log(typeof(this._inputData.value));

        //para resolver o problema da data, podemos fazer de varias maneiras..
        //expressão regular
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        /*
            A partir do es6 voce tem o spread operator, ou seja ele será desmembrado em tres parametros

        */
       let data = new Date(...this._inputData
                .value
                .split('-')
                .map(function(item, indice) {
                    if(indice == 1) {
                        return item - 1;
                    }
                    return item;
                    //outra forma é somente com um return item - indice % 2;
                })
                );
       //console.log(data);
       console.log(typeof(data));

        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

        console.log(negociacao);


    }
}