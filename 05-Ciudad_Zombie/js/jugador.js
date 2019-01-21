/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
/*
var Jugador = {
  
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades


  adelante: function () {
    this.x.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  izquierda: function () {
    sprite:'imagenes/auto_rojo_izquierda.png';
    x: 130;
    y: 160;
    ancho: 15;
    alto: 10;
  },

}*/



class Jugador{

  constructor(){
      this.sprite = 'imagenes/auto_rojo_abajo.png';
      this.x = 130;
      this.y = 160;
      this.ancho =  15;
      this.alto = 30;
      this.velocidad = 20;
      this.vidas = 15;
  }

  girarIzquierda(){

    this.sprite = 'imagenes/auto_rojo_izquierda.png';
    this.ancho = 30;
    this.alto = 15;
    return this;
    
  }

  girarDerecha(){

    this.sprite = 'imagenes/auto_rojo_derecha.png';
    this.ancho = 30;
    this.alto = 15;
    return this;
  }

  girarArriba(){

    this.sprite = 'imagenes/auto_rojo_arriba.png';
    this.ancho = 15;
    this.alto = 30;
    return this;
  }

  girarAbajo(){

    this.sprite = 'imagenes/auto_rojo_abajo.png';
    this.ancho = 15;
    this.alto = 30;
    return this;
  }

  moverAbajo(){
    this.y = this.y + 5;
    return this;
  }

  moverArriba(){
    this.y = this.y - 5;
    return this;
  }

  moverIzquierda(){
    this.x = this.x - 5;
    //console.log('moviendo izquierda ' +  this.x);
    return this;
  }

  moverDerecha(){
    this.x = this.x + 5;
    return this;
  }

  perderVidas(cantidad){
    this.vidas = this.vidas - cantidad;
    console.log('perdiendo vidas');
  }

  obtenerVidas(cantidad){
    
    console.log('me kedan vidas ' + this.vidas);
  }



}