class Negociacao {
    //Passando valores para os construtores
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //adicionando metodos!
    obtemVolume() {
        return this.quantidade * this.valor;
    }
}