class NegociacoesView extends View {

    constructor (elemento){
        super(elemento);
    }

    template(modelo) {

        return `

        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th onclick="negociacaoController.ordena('data')">DATA</th>
                <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${modelo.negociacoes.map(n =>                 
               `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `
            ).join('')}
        </tbody>        
        <tfoot>
            <td colspan="3" id="tdTotal"><strong>TOTAL</strong></td>
            <td>${modelo.volumeTotal}</td>
        </tfoot>
        </table>
        `;
    }

}

/* 

Função IIFE (Immediately Invoked Function Expressions) que calcula o volume. Substituida no td de volume por paradigma funcional;

${(function(){
    let total = 0;
    modelo.negociacoes.forEach(n => total+=n.volume);
    return total;
})()} Os parentesis ao final chamam a função para execução na hora.

Utilizando a função reduce, que retorna um só valor, ficaria assim:

${modelo.negociacoes.reduce(function(total, n) {
               return total + n.volume;
         }, 0.0)

Com arrow functions:
${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}

*/

