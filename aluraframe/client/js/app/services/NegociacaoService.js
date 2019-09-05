class NegociacaoService {

    obterNegociacoesDaSemana(callback) {

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
                   
               callback(null,JSON.parse(xhr.responseText)
               .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
               //this._mensagem.texto = "Negociações importadas com sucesso.";

               }else{                   
                   console.log(xhr.responseText);
                   //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                   callback("Não foi possível obter as negociações da semana.", null);

               }
           }

        };

        xhr.send();
    }

    obterNegociacoesDaSemanaAnterior(callback) {

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
                   
               callback(null,JSON.parse(xhr.responseText)
               .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
               //this._mensagem.texto = "Negociações importadas com sucesso.";

               }else{                   
                   console.log(xhr.responseText);
                   //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                   callback("Não foi possível obter as negociações da semana anterior.", null);

               }
           }

        };

        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(callback) {

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
                   
               callback(null,JSON.parse(xhr.responseText)
               .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               //.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
               //this._mensagem.texto = "Negociações importadas com sucesso.";

               }else{                   
                   console.log(xhr.responseText);
                   //this._mensagem.texto = "Não foi possível obter as negociações da semana.";
                   callback("Não foi possível obter as negociações da semana retrasada.", null);

               }
           }

        };

        xhr.send();
    }

    
}