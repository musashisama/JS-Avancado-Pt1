class NegociacaoService {

    obterNegociacoesDaSemana(/* callback */) {

        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET','negociacoes/semana');            
    
            xhr.onreadystatechange = () => {
                /*
                0: requisição ainda não iniciada
                1: conexão com o servidor estabelecida
                2: requisição recebida
                3: processando requisição
                4: requisição está concluída e a resposta está pronta
                */
            if(xhr.readyState==4){
                if(xhr.status==200){
                    
                //callback(null,JSON.parse(xhr.responseText)
                resolve(JSON.parse(xhr.responseText)
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                //this._mensagem.texto = "Negociações importadas com sucesso.";
    
                }else{                   
                    console.log(xhr.responseText);
                    //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                    //callback("Não foi possível obter as negociações da semana.", null);
                    reject("Não foi possível obter as negociações da semana.");
    
                }
            }
    
            };
    
            xhr.send();

        });

    }

    obterNegociacoesDaSemanaAnterior(callback) {

        return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET','negociacoes/anterior');            

        xhr.onreadystatechange = () => {
            /*
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
            */
           if(xhr.readyState==4){
               if(xhr.status==200){
                   
               resolve(JSON.parse(xhr.responseText)
               .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
               //this._mensagem.texto = "Negociações importadas com sucesso.";

               }else{                   
                   console.log(xhr.responseText);
                   //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                   reject("Não foi possível obter as negociações da semana anterior.");

               }
           }

        };

        xhr.send();
    });

}

    obterNegociacoesDaSemanaRetrasada(callback) {

        return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET','negociacoes/retrasada');

        xhr.onreadystatechange = () => {
            /*
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
            */
           if(xhr.readyState==4){
               if(xhr.status==200){
                   
               resolve(JSON.parse(xhr.responseText)
               .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
               //this._mensagem.texto = "Negociações importadas com sucesso.";

               }else{                   
                   console.log(xhr.responseText);
                   //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                   reject("Não foi possível obter as negociações da semana retrasada.");

               }
           }

        };

        xhr.send();
        });
    }



}