class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(modelo) {

        return `

        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
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
            <td>${modelo.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
        </tfoot>
        </table>
        `;
    }

    update(modelo) {

        this._elemento.innerHTML = this._template(modelo); 
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

