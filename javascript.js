var add="";
function adiciona(){
	add = document.getElementById("tarefa").value;
	
	var item = document.createElement("li")
	var els = document.getElementsByTagName("ul")
	els[0]
	els[0].appendChild(item)
	item.innerHTML = add;
}

function remover(){
		if(confirm("Deseja confirmar a exclusão?")){
	add = document.getElementById("tarefa").value;
	var dl = document.getElementById("lista");
	var dli = dl.getElementsByTagName("li");
	dl.removeChild(dli[add-1]);
	console.log("Ação confirmada pelo usúario.");
	}
	else{
		console.log("Ação cancelada pelo usúario");
	}
}


var resultado="";
var vetorResultado = []; 
var stringResultado = ""; 

function preencheObjeto(){ 
      var Teste = document.getElementById("txtTeste").value; 
      var Entrada = document.getElementById("txtEntrada").value;  
      var ResultE = document.getElementById("txtResultE").value; 
      var Result = document.getElementById("txtResult").value;
	  var Situacao = document.getElementById("txtSituacao").value;
	  
	  resultado = ["Teste: "+Teste + "<br>"+ "Entrada: "+Entrada+ "<br>"+"Resultado esperado: "+ResultE+ "<br>"+"Resultado: "+Result + "<br>"+"Situação: "+Situacao+ "<br>"]; 
	  
	  vetorResultado.push(resultado); 
	 
	  limpaTxt() 
}


function mostrarResultado(){
	stringResultado = vetorResultado.join('<br>'); 
	
    var lblMostrarResultado = document.getElementById("lblMostrarResult"); 
    lblMostrarResultado.innerHTML = stringResultado; 
}

function limpaTxt(){ 
	document.getElementById("txtTeste").value = ""; 
	document.getElementById("txtEntrada").value = "";  
	document.getElementById("txtResultE").value = ""; 
	document.getElementById("txtResult").value = "";
	document.getElementById("txtSituacao").value = "";  
}
