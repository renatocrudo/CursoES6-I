class NegociacaoController {
    //adicionando um metodo
    adiciona(event) {
        event.preventDefault();
        
        //pegando os dados vindos da pagina
        //outra opção para minimizar a escrita de codigo é criar um alias, muito parecido com o funcionamento do jquery
        let $ = document.querySelector.bind(document); //o bind serve para não perder a referencia do this
        //let inputData = document.querySelector('#data');
        let inputData = $('#data');
        //let inputQuantidade = document.querySelector('#quantidade');
        let inputQuantidade = $('#quantidade');
        //let inputValor = document.querySelector('#valor');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

    }
}