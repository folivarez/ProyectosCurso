var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var btnGuardar = document.getElementById('guardar');
var nroDeGrilla = 1750;
var colorSeleccionado;
var mousePresionado;

colorPersonalizado.addEventListener('change', 
  (function() {
    console.log('seteo color personalizado');
    // Se guarda el color de la rueda en colorActual
    var colorActual = colorPersonalizado.value;
    console.log(colorActual);
    // Completar para que cambie el indicador-de-color al colorActual
    colorPersonalizado.style.backgroundColor = colorSeleccionado;


  })
);



function setGrillaDeColores(){
  console.log("seteo colores");
  for (var i = 0; i <= nombreColores.length; i++) {
    var color = nombreColores[i];
    var item = document.createElement('div');
       
    item.classList.add('color-paleta');
    item.style.backgroundColor = color;
    item.addEventListener('click', getColor, false);
    paleta.appendChild(item);
  }   
}

function setGrillaPixeles(){
  console.log("seteo grilla pixeles");
  for (var i = 0; i <= nroDeGrilla; i++) {
    var item = document.createElement('div');
    item.addEventListener('click', setColor, false);
    
    grillaPixeles.appendChild(item);
  }
}

function getColor(e){
  colorSeleccionado = e.target.style.backgroundColor
  setIndicadorDeColor(colorSeleccionado);
}

function setColor(e){
  
  e.target.style.backgroundColor = colorSeleccionado;
  console.log('pinto');
}

function setIndicadorDeColor(color){
    indicadorDeColor.style.backgroundColor = color;
}


grillaPixeles.addEventListener('mousedown', function( event ) {    
  console.log('presiona');
  mousePresionado = true;
  }, false);

grillaPixeles.addEventListener('mouseup', function( event ) {    
  console.log('suelta');
  mousePresionado = false;
  }, false);

grillaPixeles.addEventListener('mouseover', function( event ) {    
  console.log('paso');
  if(mousePresionado){
    event.target.style.backgroundColor = colorSeleccionado;
  }

  }, false);

btnGuardar.addEventListener('click', function( event ) {    
  console.log('guardar');
  guardarPixelArt();
  }, false);

$( "#borrar" ).click(function() {
  $( "#grilla-pixeles div" ).animate({
    backgroundColor: "#fff"
  }, 2000, function() {
    // Animation complete.
  });
});


$( "#batman" ).click(function() {
    cargarSuperheroe(batman);
    console.log('batman');
});

$( "#wonder" ).click(function() {
    cargarSuperheroe(wonder);
    console.log('wonder');
});

$( "#flash" ).click(function() {
    cargarSuperheroe(flash);
    console.log('flash');
});
$( "#invisible" ).click(function() {
    cargarSuperheroe(invisible);
    console.log('invisible');
});



  

function inicio(){
  setGrillaDeColores();  
  setGrillaPixeles();


}




inicio();