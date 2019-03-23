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
        console.log(typeof(this._inputData.value));
        
        let negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);

        


        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);

    }
}