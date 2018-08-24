//Declaración de variables
var nombreUsuario = "Federico Olivarez";
var saldoCuenta = 50000;
var limiteExtraccion = 10000;
var password = "1234";
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var agua = 350;
var luz = 425;
var internet = 210;
var telefono = 570;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	if(iniciarSesion()){
		cargarNombreEnPantalla();
    	actualizarSaldoEnPantalla();
    	actualizarLimiteEnPantalla();
	}
	else{
		saldoCuenta = 0;
		actualizarSaldoEnPantalla();
	}
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var limiteIngresado = parseInt(prompt("Ingrese nuevo limite:"));
	if(controlarDatos(limiteIngresado)){
		 limiteExtraccion = limiteIngresado;
		 actualizarLimiteEnPantalla();
		 alert("Su nuevo limite de extraccion es: $" + limiteExtraccion);
	}
}



function extraerDinero() {

	var dineroAExtraer = parseInt(prompt("Cuanto dinero desea extraer?"));

	if(controlarDatos(dineroAExtraer)){
		if(!haySaldoDisponible(dineroAExtraer, false)){
			alert("No hay dinero suficiente para extraer esa cantidad de dinero.");
		}
		else if(dineroAExtraer > limiteExtraccion){
			alert("Usted sobrepaso su limite de extraccion.");
		}
		else if(billetes100(dineroAExtraer)){
			restarDinero(dineroAExtraer, false, "");
		}
		else{
			alert("Solo se puede entregar billetes de 100.");
		}
	}
}

function depositarDinero() {
	debugger;
	var dineroIngresado = parseInt(prompt("Ingrese Dinero"));
	
	if(controlarDatos(dineroIngresado)){
		sumarDinero(dineroIngresado);
		alert("Saldo anterior: $" + saldoAnterior + "\n" + "Se recibio un desposito de: $" + saldoASumar + "\nSaldo actual: $" + saldoCuenta);
	}
}

function pagarServicio() {

	var tipoDeOperacion = parseInt(prompt("Ingrese el numero que corresponda con el servicio que queres pagar: \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Telefono"));
	

	if(controlarDatos(tipoDeOperacion)){

		switch(tipoDeOperacion){
			case 1:
			if(haySaldoDisponible(agua,true)){
				restarDinero(agua, true, "Agua");
			}
			break;

			case 2:
			if(haySaldoDisponible(luz,true)){
				restarDinero(luz, true, "Luz");
			}
			break;

			case 3:
			if(haySaldoDisponible(internet,true)){
				restarDinero(internet, true, "Internet");
			}
			break;

			case 4:
			if(haySaldoDisponible(telefono,true)){
				restarDinero(telefono, true, "Telefono");
			}
			break;

			default:
			alert("El servicio seleccionado no existe!");
			pagarServicio();
			break;
		}
	}
}

function transferirDinero() {
	var dineroATransferir = parseInt(prompt("Cuanto dinero desea transferir?"));
	var cuentaATransferir;
	if((controlarDatos(dineroATransferir)) && (haySaldoDisponible(dineroATransferir, false))){
		cuentaATransferir = parseInt(prompt("Ingrese la cuenta donde se realizara la transferencia:"));
		if((cuentaATransferir == cuentaAmiga1) || (cuentaATransferir == cuentaAmiga2)){
			restarDinero(dineroATransferir, false, "");
		}
		else{
			alert("Solo se puede transferir a cuentas amigas!")
		}
	}
	else{
		alert("No se puede transferir esa cantidad.");
	}
}



function iniciarSesion() {
	var codigoIngresado = parseInt(prompt("Ingrese su codigo"));
	if((!codigoIngresado == "") && (codigoIngresado == password)){
		alert("Bienvenido/a " + nombreUsuario + " ya puede comenzar a realizar operaciones.")
		return true;
	}
	else{
		alert("Codigo incorrecto. Tu dinero ha sido retenido por seguridad.")
		return false;
	}
}

function sumarDinero(saldoASumar){

	var saldoAnterior = saldoCuenta;
	 saldoCuenta = saldoCuenta + saldoASumar;
	 actualizarSaldoEnPantalla(); 	

	 alert("Saldo anterior: $" + saldoAnterior + "\n" + "Se recibio un desposito de: $" + saldoASumar + "\nSaldo actual: $" + saldoCuenta);
}

function restarDinero(saldoARestar, bServicio, tipoServicio){

	var saldoAnterior = saldoCuenta;
	var mensajeServicio;
	saldoCuenta = saldoCuenta - saldoARestar;
	actualizarSaldoEnPantalla();

	 if(bServicio){
	 	mensajeServicio = "Has pagado el servicio " + tipoServicio;
	 	alert(mensajeServicio + "\nSaldo anterior: $" + saldoAnterior + "\n" + "Se descontara: $" + saldoARestar + "\nSaldo actual: $" + saldoCuenta);
	 }
	 else{
	 	alert("Saldo anterior: $" + saldoAnterior + "\n" + "Se realizo un retiro de: $" + saldoARestar + "\nSaldo actual: $" + saldoCuenta);
	 }	 
}



function billetes100(saldoAVerificar){
	var modulo = saldoAVerificar % 100;
	if(modulo == 0){
		return true;
	}
	else{
		return false;	
	}
}

function haySaldoDisponible(saldoADescontar, bServicio){
	if(saldoADescontar <= saldoCuenta){
		return true;
	}
	else if(bServicio){
		alert("No hay suficiente saldo para pagar este servicio.");
		return false;
	}
}

function controlarDatos(dato){	
	if((!dato == "") && (typeof dato === 'number') && (dato !== null)){
		return true;		
	}
	else{
		return false;
	}
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}