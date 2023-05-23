function calculate () {
	var number = document.getElementById('number').value
		if(number %2 == 0)
		document.getElementById('response1').innerHTML = '<p class="text-font">Es par</p>'
	else
		document.getElementById('response1').innerHTML = '<p class="text-font">Es impar</p>'
	if(number==0)
		document.getElementById('response1').innerHTML = '<p class="text-font">Es nulo</p>'
}
function Squaring(){
	var number = document.getElementById('number').value
	var resultado = Math.pow(number,2);
	if(number=0)
		document.getElementById('response2').innerHTML = '<p class="text-font">ERROR. No se puede calcular este valor.<p> '
	else
		document.getElementById('response2').innerHTML = '<p class="text-font">El numero '+number+' elevado al cuadrado es: '+resultado+'</p>' 
}
function Cero(){
	let numbers = new Array(
		parseInt(document.getElementById('number1').value),
		parseInt(document.getElementById('number2').value),
		parseInt(document.getElementById('number3').value),
		parseInt(document.getElementById('number4').value),
		parseInt(document.getElementById('number5').value),
		parseInt(document.getElementById('number6').value),
		parseInt(document.getElementById('number7').value),
		parseInt(document.getElementById('number8').value),
		parseInt(document.getElementById('number9').value),
		parseInt(document.getElementById('number10').value),

	)
	console.log(numbers)
	var contarMayores=0, contarMenores=0
	for(var a=0;a<10;a++){
		if(numbers[a]<0)
			contarMenores++			
		else
			contarMayores++
	}
	document.getElementById('response3').innerHTML = '<p class="text-font">Numeros Mayores a cero:'+contarMayores+'. Numeros Menores a cero:'+contarMenores+'</p>'
}
function Circle(){
	var number = document.getElementById('radio').value
	var longitud=2*3.1416*number
	var area=3.1416*Math.pow(number,2);
	document.getElementById('response4').innerHTML = '<p class="text-font">Longitud de la circunferencia: '+longitud+'m y el area del circulo: '+area+' m2 </p>'
}
function Triangle(){
	var number1 = document.getElementById('base').value
	var number2 = document.getElementById('altura').value
	var area=(number1*number2)/2
	document.getElementById('response5').innerHTML = '<p class="text-font">El area del triangulo es: '+area+'m2</p>'
}
function PositiveNegative(){
	var number = document.getElementById('number').value
	if(number>=0)
		document.getElementById('response6').innerHTML = '<p class="text-font">Es positivo</p>'
	else
		document.getElementById('response6').innerHTML = '<p class="text-font">Es negativo</p>'
}
function average(){
	var number1 = document.getElementById('number1').value
	var number2 = document.getElementById('number2').value
	var number3 = document.getElementById('number3').value
	var number4 = document.getElementById('number4').value
	var number5 = document.getElementById('number5').value
	var promedio= (parseInt(number1)+parseInt(number2)+parseInt(number3)+parseInt(number4)+parseInt(number5))/5
	document.getElementById('response7').innerHTML = '<p class="text-font">El promedio es: '+promedio+'</p>'
}
function fahrenheit(){
	var number = document.getElementById('number').value
	var gradosf = (number * 9/5)+32;
	document.getElementById('response8').innerHTML = '<p class="text-font">La temperatura es: '+gradosf+'°F</p>'
}
function medidas(){
	var number = document.getElementById('number').value
	var pies = number*0.032808
	var pulgadas =number*0.39370
	document.getElementById('response9').innerHTML = '<p class="text-font">'+number+' cms equivalen a: '+pies+' ft y '+pulgadas+'".</p>'
}
function notpair(){
	let response = document.getElementById('response')
	for(var a=0;a<100;a++){
		if(a%2!=0){
			let paragraph = document.createElement("P")
			let text = document.createTextNode("Los impares son:"+a)
			paragraph.appendChild(text)
			response.appendChild(paragraph)
		}
	}
}
function pair(){
	let response = document.getElementById('response')
	for(var a=0;a<100;a++){
		if(a%2==0){
			let paragraph = document.createElement("P")
			let text = document.createTextNode("Los impares son:"+a)
			paragraph.appendChild(text)
			response.appendChild(paragraph)
		}
	}
}
function hundred(){
	let response = document.getElementById('response')
	for(var a=1;a<=100;a++){
		let paragraph = document.createElement("P")
		let text = document.createTextNode("Numero: "+a)
		paragraph.appendChild(text)
		response.appendChild(paragraph)
	}
}
function fibonacci(){
	var number = document.getElementById('number').value
	var serie1 = 0;
    var serie2 = 1;
    var serie3;
    console.log(serie1,serie2)
    document.getElementById('response').innerHTML = '<p>Numero: '+serie1+'</p>'
    let response = document.getElementById('response')
	for(var i=3; i <= number;i++)
    {
        serie3 = serie1 + serie2;
        serie1 = serie2;
        serie2 = serie3;
        let paragraph = document.createElement("P")
		let text = document.createTextNode("Numero: "+serie3)
		paragraph.appendChild(text)
		response.appendChild(paragraph)
    }	
}

