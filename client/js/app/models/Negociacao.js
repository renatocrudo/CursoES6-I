class Negociacao {
    //Deixando os atributos somente leitura, encapsulamento. Só por convenção
    constructor(data, quantidade, valor) {
        //this._data = data;
        //adicionando programação defensiva
        this.data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //congelando a instancia para que não possa alterar as propriedades
        Object.freeze(this);
    }
    //adicionando metodos, agora com o atalho utilizando get
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        //vamos colocar a programação defensiva
        //return this._data;
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}