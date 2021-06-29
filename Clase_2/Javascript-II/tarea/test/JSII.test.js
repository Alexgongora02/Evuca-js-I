/* eslint-disable no-undef */
const {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
} = require('../../../../Clase_2/Javascript-II/tarea/tareas.js');


describe('obtenerMayor(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(obtenerMayor(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(obtenerMayor(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(obtenerMayor(1000, 1000)).toBe(1000);
  });
});

describe('mayoriaDeEdad(edad)', function() {
  it('should return \'Allowed\'if edad is equal or greater than 18', function() {
    expect(mayoriaDeEdad(18)).toBe('Allowed');
    expect(mayoriaDeEdad(35)).toBe('Allowed');
  });
  it('should return \'Not allowed\'if edad is less than 18', function() {
    expect(mayoriaDeEdad(7)).toBe('Not allowed');
  });
});

describe('conection(status)', function() {
  it('should return the conection state of user', function() {
    expect(conection(1)).toBe('Online');
    expect(conection(2)).toBe('Away');
    expect(conection(3)).toBe('Offline');
    expect(conection()).toBe('Offline');
  });
});

describe('saludo(idioma)', function() {
  it('should return \'Guten Tag!\' for aleman', function() {
    expect(saludo('aleman')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for ingles', function() {
    expect(saludo('ingles')).toBe('Hello!');
  });
  it('should return \'Ni Hao!\' for mandarin', function() {
    expect(saludo('mandarin')).toBe('Ni Hao!');
  });
  it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
    expect(saludo('frances')).toBe('Hola!');
    expect(saludo()).toBe('Hola!');
  });
});

describe('colors(color)', function() {
  it('should return \'This is {color}\'', function() {
    expect(colors("blue")).toBe('This is blue');
    expect(colors("red")).toBe('This is red');
    expect(colors("green")).toBe('This is green');
    expect(colors("orange")).toBe('This is orange');
  });
  it('should return \'Color not found\' if there is no argument or the argument is none of the expected ones', function() {
    expect(colors()).toBe('Color not found');
    expect(colors("pink")).toBe('Color not found');
  });
});

describe('esDiezOCinco(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

describe('estaEnRango(num)', function() {
  it('should return true if num is inside range', function() {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

describe('esEntero(num)', function() {
  it('should return true if num is 5', function() {
    expect(esEntero(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(esEntero(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(esEntero(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(esEntero(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe('operadoresLogicos(num1, num2, num3)', function() {
  it('should return \'Número 1 es mayor y positivo\' if num1 is positive and if it is greater than num2 and num3', function() {
    expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
  });
  it('should return \'Hay negativos\' if any of the arguments are negative', function() {
    expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
  });
  it('should return num3 + 1 if num3 is greater than num1 and num2', function() {
    expect(operadoresLogicos(1, 3, 10)).toBe(11);
  });
  it('should return \'Error\' if any of the arguments are equal 0', function() {
    expect(operadoresLogicos(1, 0, 10)).toBe('Error');
  });
  it('should return false if none of the conditions are met', function() {
    expect(operadoresLogicos(10, 30, 6)).toBe(false);
  });
});

describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});

describe ('esVerdadero(valor)', function() {
  it('should return Soy verdadero if valor is true', function() {
    expect(esVerdadero(true)).toBe("Soy verdadero");
  });
  it('should return Soy falso if valor is false', function() {
    expect(esVerdadero(false)).toBe("Soy falso");
  });
});

describe ('tablaDelSeis()', function() {
  it('should return multiplication table of 6', function() {
    expect(tablaDelSeis()).toEqual([0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
  });
});

describe ('tieneTresDigitos(numero)', function() {
  it('should return true if numero has 3 digits', function() {
    expect(tieneTresDigitos(100)).toBe(true);
    expect(tieneTresDigitos(820)).toBe(true);
    expect(tieneTresDigitos(900)).toBe(true);
    expect(tieneTresDigitos(10)).toBe(false);
    expect(tieneTresDigitos(20000)).toBe(false);
  });
});

describe('doWhile(numero)', function() {
  it('should add 5 to number until reaching a limit of 8 times and return the sum value', function() {
    expect(doWhile(5)).toBe(45);
    expect(doWhile(100)).toBe(140);
    expect(doWhile(-1)).toBe(39);
  });
});
describe('devolverPrimerElemento(arr)', function() {
  it('should return the first item in the array', function() {
    expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
    expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('devolverUltimoElemento(arr)', function() {
  it('should return the last item in the array', function() {
    expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
    expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('obtenerLargoDelArray(arr)', function() {
  it('should return the length of the array', function() {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementarPorUno(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe('agregarItemAlFinalDelArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
    expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
  });
});

describe('agregarItemAlComienzoDelArray(arr, item)', function() {
  it('should return the array with the item added to the front', function() {
    expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
    expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
  });
});

describe('dePalabrasAFrase(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(dePalabrasAFrase(['Evuca', 'JavaScript', 'Class'])).toBe('Evuca JavaScript Class');
    expect(dePalabrasAFrase(['Evuca'])).toBe('Evuca');
  });
});

describe('arrayContiene(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('agregarNumeros(numbers)', function() {
  it('should add all of the numbers in the array together and return the sum', function() {
    expect(agregarNumeros([10, 10, 16])).toBe(36);
    expect(agregarNumeros([97, 100])).toBe(197);
    expect(agregarNumeros([0])).toBe(0);
  });
});

describe('promedioResultadosTest(testScores)', function() {
  it('should return the average test score', function() {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('numeroMasGrande(numbers)', function() {
  it('should return the largest number', function() {
    expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
    expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('multiplicarArgumentos()', function () {
  it('should return the product of all the arguments', function () {
    const product = multiplicarArgumentos(5, 5);
    const product2 = multiplicarArgumentos();
    const product3 = multiplicarArgumentos(3, 3, 3, 3);
    const product4 = multiplicarArgumentos(1);
    const product5 = multiplicarArgumentos(10, 0, 10);
    expect(product).toBe(25);
    expect(product2).toBe(0);
    expect(product3).toBe(81);
    expect(product4).toBe(1);
    expect(product5).toBe(0);
  });
});

describe('cuentoElementos(arreglo)', function() {
  it('should return a counter with the total of numbers greater than 18', function() {
    expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
    expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe('diaDeLaSemana(numeroDeDia)', function() {
  it('should return he name of the day associated with that number', function() {
    expect(diaDeLaSemana(3)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(2)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(1)).toBe("Es fin de semana");
    expect(diaDeLaSemana(7)).toBe("Es fin de semana");
  });
});

describe('empiezaConNueve(n))', function() {
  it('should return true or false in case the received number starts with nine', function() {
    expect(empiezaConNueve(98)).toBe(true);
    expect(empiezaConNueve(9)).toBe(true);
    expect(empiezaConNueve(2)).toBe(false);
    expect(empiezaConNueve(7)).toBe(false);
    expect(empiezaConNueve(-5)).toBe(false);
  });
});

describe('todosIguales(arreglo)', function() {
  it('should return true if all the elements of the array are equal and false otherwise', function() {
    expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
    expect(todosIguales([97, 100, 190, 9])).toBe(false);
    expect(todosIguales([230, 230, 230, 230 ])).toBe(true);
  });
});

describe('mesesDelAño(array)', function() {
  it('should return a new array with the requested months', function() {
    var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
    var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
    expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
    expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  });
});

describe('mayorACien(array)', function() {
  it('should return an array with values grater than 100', function() {
    var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
    expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
  });
});

describe('breakStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration', function() {
    expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
  });
  it('should stop the execution if the sum value and the iteration number match', function() {
    expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
  });
});

describe('continueStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration when the iteration number is different from 5', function() {
    expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]);
    expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
  });
});