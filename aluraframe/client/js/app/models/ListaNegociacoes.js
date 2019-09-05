class ListaNegociacoes {

    constructor(/* contexto, armadilha */){

        this._negociacoes = [];
        //this._armadilha = armadilha;
        //this._contexto = contexto;
    }
    
    adiciona(negociacao){

        this._negociacoes.push(negociacao);
       // this._armadilha(this);
        // O Reflect recebe (1) Função a ser executada, (2) Contexto em que a função 1 será executada e (3) os parâmetros que serão passados pra função [array].
        //Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia() {

        this._negociacoes = [];
       // this._armadilha(this);
       //Reflect.apply(this._armadilha,this._contexto,[this]);
    }
    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }

     ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }
    inverteOrdem() {
        this._negociacoes.reverse();
    }

}

