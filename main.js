const form = document.getElementById('form-lista');
const nomeTarefa = [];
let linhas = '';

$('form').on('submit', function (e) {
    e.preventDefault();
  
    adicionaLinha();
    atualizaLista();
  });
  
  $(document).on('click', 'ul li', function () {
    $(this).toggleClass('riscado');
  });
  
  function adicionaLinha() {
    let inputTarefa = $('#inserir-tarefa');
  
    if (nomeTarefa.includes(inputTarefa.val())) {
      alert(`A tarefa ${inputTarefa.val()} já está cadastrada!`);
    } else {
      nomeTarefa.push(inputTarefa.val());
  
      let linha = '<ul>';
      linha += `<li>${inputTarefa.val()}</li>`;
      linha += '</ul>';
  
      linhas += linha;
    }
  
    inputTarefa.val(''); 
  }
        
  function atualizaLista() {
    const corpoUL = document.querySelector('#ul-align');
    corpoUL.innerHTML = linhas;
  }

