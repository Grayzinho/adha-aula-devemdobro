// BUSCAR OS ITENS DA TELA
const itensPerguntasERspostas = document.querySelectorAll('.item');


// ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERspostas.forEach(function(item) {
    item.addEventListener('click', function() {

        // VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')
        
            //  EU PRECISO FECHAR TODAS
            itensPerguntasERspostas.forEach(function(item) {
                item.classList.remove('ativo')
            })
        
        
            // SE A PERGUNTA NÃO ESTA ATIVA 
             if(!estaAtiva) {

            // ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')

            // SE A PERGUNTA ESTIVER ATIVA
         } else {
              // DESATIVAR (REMOVERIA A CLASSE ATIVO)
             item.classList.remove('ativo')
         }

    })
})


