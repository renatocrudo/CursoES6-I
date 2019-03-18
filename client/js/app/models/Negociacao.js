class Negociacao {
    //Deixando os atributos somente leitura, encapsulamento. Só por convenção
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //adicionando metodos, agora com o atalho utilizando get
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}