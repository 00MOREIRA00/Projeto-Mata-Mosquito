//1º Descrobrindo altura e largura, para definir p palco do jogo
/*Como funciona essa parte do código?

-Foram criado as variaveis dentro do escopo global para que todos podessem acessar pois se criado dentro da 
	função, poderima ter problemas de acesso;
-Foi criado uma função chamada ajustaTamanhoPalcoJogo() que usá o metodo 'window' para identificar o tamanho da
	altura e da largura atual e atualizar essa informação para as varaveis que foram criadas;
-Foi inserido um evento ao 'body' da página HTML para que a função sempre seja executada quando ouver mudança
	na janela da página quando executada;
*/
var altura = 0
var largura = 0
var vidas = 1
var tempo = 40

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000
}else if (nivel === 'expert') {
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{
			document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)


//2º Criando valores randomicas com base nos valores descobertos a cima
/*Como funciona essa parte do código?

-Foi inserido uma imagem no documento HTML e seu estilo(tamanho) foi modificado;
-Foi criado duas variaveis(posicaoX e posicaoY) tendo como resultado Math.random, para criar números aleatorios
	e esse resultado é multiplicado pelas variaveis largura e altura
-Encapsulamos os valores randomicos com o Math.Flor para que possamos ter números inteiros;

-Foi criado uma variavel com o nome mosquito e informado que ele vai ser uma imagem, depois foi inserido o 
caminho da imagem para a variavel e logo apos informado que a página ganhara um atributo filho que será a variavel
que foi criada;

-Foi adicionado o estilo css que ja tinha sido criado para está imagem;

-Foi linkado a imagem adicionada com as posições randomicas para que a imagem apareça em posições randomicas;

-Foi subtraido 90px do resultado das posições randonicas para não ter erro;

-Foi adicionado um operador ternario para que não haja posição aleatoria menor que 0;


*/
function posicaoRandomica(){
	//remover o mosquito anterior (caso exista)
		if (document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove()

			if (vidas > 3) {
				window.location.href = 'fim_de_jogo.html'
			}else{
				document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
				vidas++
			}
		}

	var posicaoX = Math.floor(Math.random() * largura) - 120
	var posicaoY = Math.floor(Math.random() * altura) - 120

			//operador ternario
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	console.log(posicaoX, posicaoY)


	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}


	document.body.appendChild(mosquito)
}


//3º Criando tamanhos randomicos para o mosquito 
/*Como funciona essa parte do código?

-Foi criado uma função onde nela é criado uma valor randomico com 'Math.random' que foi encapsulado em Math.floor
	para que os números sejam arredondados;

-Foi criado um switch para a tomada de decisão dos modelos de css que serão introduzidos baseando-se nos números
	aleatorios que foram criados;

-Foi trocado o valor de modificação do css de 'mosquito1' para a função que foi criada;


*/

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}



//4º Posicionamento Lado A Lado B, mosquito olhando para lados diferentes
/*Como funciona essa parte do código?

-Foi criado uma função onde nela é criado uma valor randomico com 'Math.random' que foi encapsulado em Math.floor
	para que os números sejam arredondados;

-Foi criado um switch para a tomada de decisão dos modelos de css que serão introduzidos baseando-se nos números
	aleatorios que foram criados;

-Foi adicionado no mesmo local que a função anterior, concatenado uma função com a outra, mas entre elas foi
	adicionado uma string com espaço;
*/

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}


//5º Criação e remoção dos mosquitos em um cicloe de tempo
/*Como funciona essa parte do código?

-Foi adicionado o recurso setInterval encapsulando a funcao posicaoRandomica() na página HTML;
-Foi criado um id para as imagnes;

-Foi implementado um if para fazer o teste se possui mosquito na tela, se possuir é retirado
	//remover o mosquito anterior (caso exista)
		if (document.getElementById('mosquito')) {
			document.getElementById('mosquito')
		}
*/


//6º Criando o cenário
/*Como funciona essa parte do código?

-Foi adicionado um background no documento css externo;
	body{
	background-image: url(imagens/bg.jpg);
	background-repeat: no-repeat;
	background-size: 100%;
}

-Foi criado 'div' para painel,cronometro e contagem de vida, e foram editados no arquivo css
*/



//7º Implementação controle da area de vidas
/*Como funciona essa parte do código?

-Foi adicionado o evento onclick ao elemento HTML, de modo que ele sumira da página ao ser clicado
	mosquito.onclick = function(){
		this.remove()

-Foi adicionado ao 'if' um controle de HTML que modifica a vida com id 'v1' quando não clicavel porem precisa
	precisa de uma lógica para retirar as outras;
	document.getElementById('v1').src = "imagens/coracao_vazio.png"
	}

-Foi adicionado um lógica
if (document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove()

			if (vidas > 3) {
				window.location.href = 'fim_de_jogo.html'
			}else{
				document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
				vidas++
			}
		}

*/


//8º Implementação de cronometro
/*Como funciona essa parte do código?

-Foi criado uma variavel tempo;
-Foi criado uma variavel cronometro que contém um setInterval;
	var cronometro = setInterval(function(){
	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		alert('Vitória')
	}else{
			document.getElementById('cronometro').innerHTML = tempo
	}
	}, 1000)

*/


//9º Criação Página Inicial
/*Como funciona essa parte do código?

-Foi criado uma página HTML com um botão iniciar e uma função select para selecionar nível de jogo;
-Foi inserido um evento onclick para iniciar o jogo;
	function iniciarJogo(){
			var nivel = document.getElementById('nivel').value

			if(nivel === ''){
				alert('Selecione um nível para iniciar o jogo')
				return false
			}

			alert(nivel)
		}
*/

//10º Aplicando Nível no Jogo
/*Como funciona essa parte do código?

-Foi criado um direcionamento para o jogo informando também o nível do jogo;
	window.location.href = 'app.html?' + nivel 
-Foi criado uma variavel que pega a informação da URL da página e atribuido um replace para retirar o ponto de interrogação da URL;
	var nivel = window.location.search
	nivel = nivel.replace('?', '')
-Foi criado um condicional para identificar o nivel selecionado e mudar o tempo em que os mosquitos são expaunados;
	if (nivel === 'normal') {
	criaMosquitoTempo = 1500
	}else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000
	}else if (nivel === 'expert') {
	criaMosquitoTempo = 750
	}
	O tempo de expau de mosquitos pré estabelecido precisou ser mudado para está função;
*/