class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }
/*
O ideial é utilizar no construtor para não precisar ficar percorrendo o DOM toda a vez que clicar no botão de evento
*/

    //adicionando um metodo
    adiciona(event) {
        event.preventDefault();


        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);

    }
}