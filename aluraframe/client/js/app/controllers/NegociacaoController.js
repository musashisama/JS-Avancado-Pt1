class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        /* this._listaNegociacoes = new ListaNegociacoes(modelo => this._negociacoesView.update(modelo)); */
        
        /* this._listaNegociacoes = new ListaNegociacoes(this, function(modelo){

            this._negociacoesView.update(modelo);
        }); 
        
        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona','esvazia'], 
            modelo => this._negociacoesView.update(modelo)); 
        */

        //this._negociacoesView = new NegociacoesView($("#negociacoesView"));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacoesView")),
            "adiciona","esvazia"
        );

       /* // this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ["texto"], 
            modelo => this._mensagemView.update(modelo));  */


        //this._mensagemView = new MensagemView($("#mensagemView"));
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            "texto");

        //this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event) {
        
        event.preventDefault();       

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        //this._mensagemView.update(this._mensagem);     
        
        this._limpaFormulario();
        //console.log(this._listaNegociacoes);     
    }

    importaNegociacoes(){

        let service = new NegociacaoService();
        /* service.obterNegociacoesDaSemana((erro, negociacoes)=>{
            if(erro){
                this._mensagem.texto = erro;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso.";
            service.obterNegociacoesDaSemanaAnterior((erro, negociacoes)=>{
                if(erro){
                    this._mensagem.texto = erro;
                    return;
                }
    
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso.";
                service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes)=>{
                    if(erro){
                        this._mensagem.texto = erro;
                        return;
                    }
        
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = "Negociações importadas com sucesso.";
                });
            });
        }); */
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociações apagadas com sucesso!";
        //this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value  
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}