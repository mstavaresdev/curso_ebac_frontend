const form = document.getElementById('form-mod7');

let formValid = false;

function validaCampo (campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = parseInt(document.getElementById('valor-a').value);
    let campoB = parseInt(document.getElementById('valor-b').value);

    const msgsucess = `Positivo! <b> Valor B maior que Valor A! </b>`
    const containermsgsucess = document.querySelector('.success-msg');
    
    const msgerror = `Negativo, <b>valor B menor que valor A!</b>`
    const containermsgerror = document.querySelector('.error-msg');

    formValid = validaCampo (campoA, campoB);
    
    if (formValid){
        document.querySelector('.error-msg').style.display = 'none';
        containermsgsucess.innerHTML = msgsucess;
        containermsgsucess.style.display = 'block';
        document.querySelector('.error-msg').style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        document.querySelector('.success-msg').style.display = 'none';
        containermsgerror.innerHTML = msgerror;
        containermsgerror.style.display = 'block';
        document.querySelector('.success-msg').style.display = 'none';
    }    
})