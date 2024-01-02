document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMaximo = 100;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorioUm = Math.floor(Math.random() * (numeroMaximo + 1));
        let numeroAleatorioDois = Math.floor(Math.random() * (numeroMaximo + 1));
        let numeroAleatorioTres = Math.floor(Math.random() * (numeroMaximo + 1));

        document.getElementById('resultado-valor-1').innerText = numeroAleatorioUm;
        document.getElementById('resultado-valor-2').innerText = numeroAleatorioDois;
        document.getElementById('resultado-valor-3').innerText = numeroAleatorioTres;        
        document.querySelector('.resultado').style.display = 'block';
    })
})