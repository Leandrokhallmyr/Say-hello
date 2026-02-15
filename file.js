function userName(){
	let userInput = document.getElementById('input').value;
	let outPut = document.getElementById('output');

	let mensagem;
	let isError = false;


	if(userInput.length > 30){
		
		isError = true;

		mensagem = `*Digite um nome mais curto`;
		document.getElementById('input').value = '';
	
	}else if(userInput.trim() === ''){
		
		isError = true;

		mensagem = '*Digite seu nome';

	}else {
		mensagem = 'Olá ' + '<strong>' + userInput + '</strong>' + ', ' + ' Prazer em te conhecer!';
		
		
	}

	if(isError){
		outPut.style.color = 'red';
		outPut.style.fontSize = '16px';
	}else {
		outPut.style.color = 'black';
		outPut.style.fontSize = '20px';
	}
	
	outPut.innerHTML = mensagem;
}


