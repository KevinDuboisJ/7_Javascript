//Mostrar letras repetidas como "(" y las que no como ")".

function duplicateEncode(word){
word = word.toUpperCase();
let newString = [];
    for(let i = 0; i < word.length; i++) {
    	
      for(let j = 0; j < word.length; j++) {
        if (word[i] === word[j] && !(i === j)) {

          newString += ')';
          break;
        }
        if (j === word.length-1) {
        	newString += '(';
        	break;
        }
      }     
    }
    return newString;
}

duplicateEncode("(( @");




//Crear raiz cuadrada de cada digito en un numero entero y exhibir como un solo numero.
function squareDigits(num){
	num = num.toString();
	var result = "";
  for (var i = 0; i < num.length; i++) {
  	// console.log(result);
  	result += num[i]*num[i];
  }
  return parseInt(result,10);
}

console.log(squareDigits(9119));

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

squareDigits(9119)


function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
duplicateEncode("(( @");