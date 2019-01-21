/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */


var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, orientacion) {
    /* Completar constructor a partir de Enemigo */
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, orientacion);
    /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */

    this.orientacion = orientacion;

    this.rangoMov.desdeX = rangoMov[0];
    this.rangoMov.hastaX = rangoMov[1];
    this.rangoMov.desdeY = rangoMov[2];
    this.rangoMov.hastaY = rangoMov[3];
    //var desdeX = -90;
    //var hastaX = 950;

    //var desdeY = -80;
    //var hastaY = 570;
}


ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;


ZombieConductor.prototype.mover = function() {
    /* Los movimientos estan basados en un numero aleatorio
    La direccion horizontal es siempre la misma y va ondulando verticalmente.
    Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
    //console.log('rango ' + this.rangoMov.desdeX);
    if (this.orientacion == 'H') {
        if (Math.random() < 0.5) {
            this.x -= this.velocidad;
            //console.log('moviendo');
        }
        if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
            this.velocidad *= -1;
        }
    } else {
        if (Math.random() < 0.5) {
            this.y -= this.velocidad;
        }
        if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
            this.velocidad *= -1;
        }
    }

    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/

    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos

}
/* Completar metodos para el movimiento y el ataque */