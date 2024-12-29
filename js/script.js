function cadastrar(){
    const inputnome = document.getElementById('inputnome');
    const inputidade = document.getElementById('inputidade');

    if (inputnome.value === ''){
        alert('campo nome vazio')
        return;
    }else if (inputidade.value === ''){
        alert('campo idade vazio')
        return;
    }


    // cria uma variavel com o metodo de adicionar uma nova linha na tabela
    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const novalinha = table.insertRow(); 

    const nome = novalinha.insertCell(0); 
    const idade = novalinha.insertCell(1);

    const botao = document.createElement('button');
    botao.textContent = 'excluir';
    botao.className = 'removebt';
    botao.onclick = function(){
        table.deleteRow(novalinha);
    };                                                                                                                                                                                                                                                                                                                          

    novalinha.appendChild(botao)
    nome.textContent = inputnome.value;                                                             
    idade.textContent = inputidade.value;                                                                                        
}                                                                                                                        
