class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
    }

    adiciona(event){
        event.preventDefault();
        
        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
                /* if(indice==1){
                    return item - 1;
                }
                return item; */                
            );
        console.log(data);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        //adicionar a negociação em uma lista
        console.log('negociacao :', negociacao);
    }

    
}