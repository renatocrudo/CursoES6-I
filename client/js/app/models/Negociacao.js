class Negociacao {
    //Deixando os atributos somente leitura, encapsulamento. Só por convenção
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //adicionando metodos!
    obtemVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}