//setando o container que vai conter a imagem selecionada...
var imagem = '';
var src_imagem_selecionada = '';
var id_imagem = '';
var imagem_int = '';
var texto_novo = '';
var caminho = '';
const container_imagem_selecionada = document.getElementById('cont-img');
const texto = document.getElementById('text');

//pegando id da imagem ao clicar...
container_imagem_selecionada.addEventListener('click', fun_getID);
//puxando o id do elemento selecionado...
function fun_getID(componente){  
    id_imagem = componente.target.id;
}
//alterando texto com o nome do time escolhido...
function fun_alterarTexto(){
    texto.innerHTML = 'Você escolheu: ' + id_imagem;
}
//criando texto com o nome do time escolhido...
function fun_criarTexto(){
    texto_novo = document.createElement('h1');
    texto_novo.innerHTML = "Você escolheu: " + id_imagem;
    texto_novo.className = 'red';
    document.getElementById('container').appendChild(texto_novo);
}
//alterando imagem
function fun_imagem(){
    imagem = document.getElementById(id_imagem);
    src_imagem_selecionada = imagem.getAttribute('src');
    caminho = './' + src_imagem_selecionada;
    imagem_int = document.getElementById('inter');
    imagem_int.setAttribute('src', caminho);
}
//container_imagem_selecionada.addEventListener('click', alterarTexto);
container_imagem_selecionada.addEventListener('click', fun_imagem);