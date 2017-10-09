var string= prompt("ingrese una palabra para cifrarla")
var n= prompt("ingrese un numero como parametro de desplazamiento")

/*creamos la primer funcion: cipher que encriptara por medio del metodo de
cifrado de cesar */
function cipher(string,n){

  if(string=="" || typeof string=="number"){
  alert("debes ingresar una palabra para cifrarla")
  };

  var newstring = string.toUpperCase()
  var strCifrado= "";

  //Recorremos nuestro string para cifrar cada una de las letras
  for (i=0; i<string.length; i++){
    //Obtenemos el codigo ascci de cada uno de las letras del string
    var codeASCII= newstring.charCodeAt(i);

    /*cuando ya obtuvimos el codigo ascci, usaremos ese numero en una
     formula para decifrarla y obetener el indice que tiene en el
      abecedario clasico*/
    var numberOfAlphabet= (codeASCII - 65 + n) % 26 + 65;

    /*Luego, para pasar el numero del alafabeto clasico a la letra que
     obtenemos con el cifrado cesar, crearemos la variable strCesar*/

     strCifrado+= String.fromCharCode(numberOfAlphabet)
  }
  return strCifrado
}
 document.write(cipher(string,n))
