
function selecionarSexo(sexoSelecionado) {
    if (sexoSelecionado === 'homem') {
        localStorage.setItem('sexo', 'homem'); 
        escolhaDoSexo.textContent = `Exemplo: Bem-Vindo Guerreiro`;
        document.getElementById('homem').classList.add('selecionado');
        document.getElementById('mulher').classList.remove('selecionado');
        document.getElementById('imagemHomem').style.display = 'block';
        document.getElementById('imagemMulher').style.display = 'none';
    } else {
        localStorage.setItem('sexo', 'mulher'); 
        console.log('Sexo feminino selecionado');
        escolhaDoSexo.textContent = `Exemplo: Bem-Vinda Guerreira`;
        document.getElementById('mulher').classList.add('selecionado');
        document.getElementById('homem').classList.remove('selecionado');
        document.getElementById('imagemHomem').style.display = 'none';
        document.getElementById('imagemMulher').style.display = 'block';
    } 
}


document.addEventListener('DOMContentLoaded', function() {
    var sexoSalvo = localStorage.getItem('sexo');


    if (sexoSalvo === 'homem') {
        document.getElementById('imagemHomem').style.display = 'block'; 
        document.getElementById('imagemMulher').style.display = 'none';
    } else if (sexoSalvo === 'mulher') {
        document.getElementById('imagemHomem').style.display = 'none'; 
        document.getElementById('imagemMulher').style.display = 'block'; 
    }

   
    var nomeJogador = localStorage.getItem("nome") || "";


    document.getElementById("nomeJogador").textContent = nomeJogador;
});


var inputNome = document.getElementById("inputNome");
var nomeSalvo = localStorage.getItem("nome") || "";

inputNome.value = nomeSalvo; 

inputNome.addEventListener("input", function() {
    nomeSalvo = inputNome.value;
    localStorage.setItem("nome", nomeSalvo); 
    document.getElementById("escolhaDoNome").textContent = nomeSalvo + ", você poderia nos ajudar?";
});


function iniciarAventura() {

    var genero = localStorage.getItem('sexo');
    var nome = document.getElementById('inputNome').value;
    window.location.href = 'jogo.html?genero=' + genero + '&nome=' + nome;
}

