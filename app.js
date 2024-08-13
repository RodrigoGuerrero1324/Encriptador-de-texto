const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar =  document.getElementById('copiar');
const txtmensaje =  document.getElementById('txtMensaje');
const txtrespuesta = document.getElementById('txtRespuesta');
//const textArea = document.queryselector(".ingreso_texto");//
//const mensaje = document.queryselector(".txt_seccion2");//

function activarRespuesta() {
  // Oculta el primer elemento con la clase 'img_mensaje'
const imgMensaje = document.querySelector('.contenedor_seccion_mensajes');
if (imgMensaje) imgMensaje.style.display = 'none';

  // Muestra el primer elemento con la clase 'respuesta_boton'
const respuestaBoton = document.querySelector('.respuesta_boton_encriptar');
if (respuestaBoton) respuestaBoton.style.display = 'flex';
}

function activarImagen(){
  // Oculta el primer elemento con la clase 'img_mensaje'
const imgMensaje = document.querySelector('.contenedor_seccion_mensajes');
if (imgMensaje) imgMensaje.style.display = 'inline';

  // Muestra el primer elemento con la clase 'respuesta_boton'
const respuestaBoton = document.querySelector('.respuesta_boton_encriptar');
if (respuestaBoton) respuestaBoton.style.display = 'none';
}

function onEncriptar() {
  let contenido;
  if(txtmensaje.value != ''){
    contenido = encriptarAction(txtmensaje.value);
    txtrespuesta.value = contenido;
    txtmensaje.value ="";
    activarRespuesta();
  }
}


function encriptarAction(stringEncriptado) {
  let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();
  
  for(let i =0;i<matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){ 
    stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
  }
  return stringEncriptado;
}


function onDesencriptar() {
let contenidoDesencriptar;
if(contenidoDesencriptar != ''){
    contenidoDesencriptar = desencriptarAction(txtmensaje.value);
    txtrespuesta.value  = contenidoDesencriptar;
    txtmensaje.value="";
    activarRespuesta();
}
}

function desencriptarAction(stringDesencriptado) {
  let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();
  
  for(let i =0;i<matrizCodigo.length;i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){ 
    stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
  }
  return stringDesencriptado
}  

function onCopiar(){
  if(txtrespuesta.value!= ""){
    try{
      let copytext = document.getElementById("txtRespuesta");
      copytext.select();
      document.execCommand("copy");
      alert("Texto copiado en el portapapeles");
    }catch(err){
      console.log("Error al copiar el texto",err);
    }
    txtrespuesta.value="";
    activarImagen();
  } 
}

// AGREGANDO EVENTOS A LOS BOTONES.
encriptar.addEventListener('click', onEncriptar);
desencriptar.addEventListener('click', onDesencriptar);
copiar.addEventListener('click',onCopiar);

