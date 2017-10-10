//por medio de un prompt ingresamos dos varaibles, que usaremos en nuestra funcion de cifrado de palabras
var string = prompt('ingrese una palabra para cifrarla');
var n = prompt('ingrese un numero como parametro de desplazamiento');

//creamos la primer funcion: cipher que encriptara por medio del metodo de cifrado de cesar
function cipher(string, n)
{

  //creamos una condicion: Si no  ingresamos nada en el prompt nos da un string vacio, en ese caso, no se cifrará nigun mensaje y se sale de la function
  if (string === '')
  {
    alert('debes ingresar una palabra para cifrarla');
  }

  else
  {
    //en la otra condicion, convertiremos el string ingresado, a un number por medio de parseInt
    var str = parseInt(string);
    var isAnumber = str + 5;

    //en el caso de que por el prompt ingresemos como string ingresemos un numero, en ese caso, no aplicaria nuestra funcion
    if (/*no se que condicion poner para que sepa si es numero o string despues de poner el parse int :C*/)

    {
      alert('debes ingresar una palabra para cifrarla');
    }

    else 
    {
      //si lo que ingresamos como string no es un numero(en el caso fuera una palabra), parseInt no lo convertirá a un numero y si ejecutara la funcion de cipher
      var newstring = str.toString();
      //crearemos la variable newstring para almacenar a nuestra palabra pero en mayusculas con ayuda de toUpperCase
      newstring = newstring.toUpperCase();
      var strCifrado = '';

      //Recorremos nuestro string para cifrar cada una de las letras
      for (var i = 0; i < newstring.length; i++)
      {
        //Obtenemos el codigo ascci de cada uno de las letras del string
        var codeASCII = newstring.charCodeAt(i);

        /*cuando ya obtuvimos el codigo ascci, usaremos ese numero en una formula para decifrarla y obetener el indice que tiene en el abecedario clasico*/
        var numberOfAlphabet = (codeASCII - 65 + n) % 26 + 65;

        /*Luego, para pasar el numero del alafabeto clasico a la letra que obtenemos con el cifrado cesar, crearemos la variable strCesar*/

        strCifrado += String.fromCharCode(numberOfAlphabet);
      }
    }
  }

  return strCifrado;
}

console.log(cipher(string, n));
