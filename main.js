// console.log('homework 2_1');


// // 1) Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
// n = +prompt('n=')
// A = [0, 1]; 

// for (i = 2; i < n; i++) {
//   A[i] = A[i-1] + A[i-2];
// }

// alert(A.slice(0,n));

// // 2) Проверить число на простоту. Число вводить с клавиатуры.
// n = +prompt("n=");

// for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//         alert("НЕ ПРОСТОЕ ЧИСЛО!");
//         break;
//     }

//     if (n % i !=0) {
//         alert("ПРОСТОЕ ЧИСЛО!");
//         break;
//     }
// }


// n = +prompt("n=");

// flag = true;
// for (i = 2; i < n; i++) {
// 	if (n % i == 0) {
//         flag = false;
// 		break;
// 	}
// }

// if (flag == true) {
//     alert('simple')
//   } else {
//     alert('not simple');
// }


// console.log('homework 3_1')
// n = +prompt('n=');
// m = +prompt('m=')

// a = [];
// for ( i = 0; i < n; i++ ) {
//     a.push( Math.round( Math.random() * 20 ));
// } 

// document.write(a, '<br />')

// b = [];
// for ( j = 0; j < m; j++ ) {
//     b.push( Math.round( Math.random() * 20 ));
// } 

// document.write(b)

// result = a.filter(function(c) {
//     return b.some(function(d) {
//         return c == d;
//     })
// });

// document.write('<br />', 'повторы ', result);

// console.log('homework 3_2')

// n = +prompt('высота=')
// m = +prompt('ширина=')

// for(i = 1; i <= n; i++) {
//     for(j = 1; j <= m; j++) {
//         if (i == 1 || j == 1 || i == n || j == m) {
//             document.write('*')
//         } else {
//             document.write('&nbsp;')
//         }
//     }
//     document.write('<br />')
// }


// console.log('homework 4_1')

// n = 50;
// m = n;

// center = Math.floor(n/2);

// for(i = 1; i <= n; i++) {
//     for(j = 1; j <= m; j++) {
//         if (i > j && i + j < n + 2 || i <= center && j >= center && j + i <= n + 1) {
//             document.write('00 ');
//         } else 
//         document.write(22, ' ');
//     }    
//     document.write('<br />');
// }

// ___________________________________________________________________________




// 3_3 Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse()

// function rever(A) {
//   for(var i = 0, j = A.length-1; i < j; i++, j--)
//   [A[j], A[i]] = [A[i], A[j]]
// }

// A = [1, 5, 6, 2, 4, 8, 10, 2];
// rever(A);
// console.log(A);

// В двумерном массив удалить столбцы где сумма элементов столбца < 0. 

// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20

// A = [ 
//   B = []
// ];

// for(i = 1; i <= 10; i++) {
//   A.push( Math.floor(Math.random() * (-19 - 21)))
//   B.push( Math.floor(Math.random() * (-19 - 21)))
// }

// console.log(A)
// console.log(B)


// ____________________________________________________________________-




// Написать функцию заполнения случайными значениями одномерного массива с указанием длины. Диапазон - на свой вкус

// `fillArray(A, 20);`
// function randomArray(count, min, max) {
//   if (count > (max - min)) return;
//   var arr = [], t;

//   while (count) {
//     t = Math.floor(Math.random() * (max - min) + min);
//     if (arr.indexOf(t) === -1) {
//       arr.push(t);
//       count--;
//     }
//   }

//   return arr;
// }

// console.log(randomArray(10, 1, 20))

// a = 20
// array = [];

// function fillArray() {
//     array = [a];
//     for ( i = 0; i < a; i++ ) {
//         a = Math.floor(Math.random() * 20)
//         array.push(a)
//     }
//     return array
// }

// console.log(array)


// _______________________________________________________________________




// function fillArray(start, end) {
//     return Math.floor((Math.random() * (end - start + 1)) + start)
// }

// rand = fillArray(-20, 20)
// A = []
// A.push fillArray

// console.log(rand)

// function fillArray(arr, length) {
//     for (var i = 0; i <= length-1; i++) {
//         randomNumber = Math.floor((Math.random() * 100) + 1);
//         arr.push(randomNumber);
//     }
// }

// arr = []
// fillArray(arr, 20)

// console.log(arr)

//----------------------------------------------------------------------------------------------------

// const firstArray = [1, 2, 8, 'string']
// const secondArray = [3, 5, 6, ' ']
// function compareArrays(arr1, arr2) {
//     const sum1 = arr1.reduce(function (acc, currentItem){
//         if(typeof currentItem == "number") {
//             return acc + currentItem
//         } else {
//             return acc
//         }
        
//     }, 0) 
//     const sum2 = arr2.reduce(function (acc, currentItem){    
//         if(typeof currentItem == "number") {
//             return acc + currentItem
//         } else {
//             return acc
//         }
        
//     }, 0) 
//     return sum1 < sum2 ? arr2:arr1
// }
// const firstArray = [1, 20, 8, 'string']
// const secondArray = [3, 5, 6, ' ']
// function reducer (acc, currentItem){  
//         if(typeof currentItem == "number") {
//             return acc + currentItem
//         } else {
//             return acc
//         }
 
//     }
// function compareArrays(arr1, arr2) {
//     const sum1 = arr1.reduce(reducer , 0)  
//     const sum2 = arr2.reduce(reducer , 0)  
//     return sum1 < sum2 ? arr2:arr1
// }
// const result = compareArrays(firstArray, secondArray)

// console.log(result)


// sumFirst = []
// sumSecond = []
// arrays()
// console.log(sumFirst)

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];

// arr1 = arr1.concat(arr2);

// console.log(arr1)

// const a = 'bithc';
// let b = `hello ${a}`;

// ___________________________________________________



// В двумерном массив удалить столбцы где сумма элементов столбца < 0. 

// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20



//сщздать масив где кады ймасив имеет дилину 10 
// const fillArray = [];
// for(let i = 0; i < 10; i++) {
//         const arrays = [];
        
//     for(let j = 0; j < 20; j++) {
//         randomNumber = Math.floor(Math.random() * 40 - 20)
//         arrays.push(randomNumber)
//     } 
//     fillArray.push(arrays)
// }

// fillArray.forEach(function(item, k) {
//     let sum = 0
//     for(let l = 0; l <= fillArray[k].length-1; l++) {
//         const value = fillArray[k][l]
//         sum += value
//     }
//     console.log(sum)
//     if(sum < 0) {
//         fillArray.forEach(function (item, index) {
//             item.splice(k, 1)
            
//         })
//     } 
// })

// console.log(fillArray)
//_______________________________________________________________












// Создать функцию, которая исключает из строки все символы, которые мы передали вторым аргументом.

// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


// function deleteSymbol(text, [symbol1, symbol2]) {
//     for(i = symbol1; i <= text; i++){
//         let result = text.replaceAll(symbol1, '')
//         for(j = symbol2; j <= result; j++){
//             let results = result.replaceAll(symbol2, '')
//             return results
        
//         }
//     }  
// }

// console.log(deleteSymbol('some simple string', ['i', 's']))


// function deleteSymbol(text, symbol) {
//     for(let i = 0; i < symbol.length; i++){
//         let index = symbol[i]
//         console.log(index)
        
//         for(let j = index; j <= text; j++){
//             console.log(index)
//             let result = text.replaceAll(index, '')

//             console.log(result)
//         }
//     }
// }


// console.log(deleteSymbol('some1 Simple string', ['i', '1', 's', 'o']))


// function deleteSymbol(text, symbol) {
//     let newText = text;

//     for(let i = 0; i < symbol.length; i++){
//         const el = symbol[i];
//         newText = newText.replaceAll(el, '');
//     }

//     return newText;
// }


// console.log(deleteSymbol('some1 simple string', ['i', '1', 's', 'k']))

// __________________________________________________________





















// Создать 2 объекта с различными полями. Написать код, 
// который переберёт оба объекта и сконкатениурет все поля-массивы, 
// которые сохранятся в переменную `allArrays = [...]`. Посчитать сумму чисельных элементов в массивах.



// *Объекты только одноуровневые





// let objectFirst = {
//     array: [1, 3, 5, 'l'],
//     name: 'Artem',
//     number: 20,
// }

// let objectSecond = {
//     array: [1, 70, 'k', 2],
//     name: 'Vovk',
//     number: 200,
//     array2: [1, 3, 5, 7, 'ha'],
// }
    
// let allArray = []

// for(let key in objectFirst){
//     if(Array.isArray(objectFirst[key])){
//         allArray.push(objectFirst[key])
//     }
// }
// for(let key in objectSecond){
//     if(Array.isArray(objectSecond[key])){
//         allArray.push(objectSecond[key])
//     }
// }

// let allArrays = allArray.flat()

// const sumArray = allArrays.reduce(function(acc, item){
//     if(typeof item == "number"){
//         return acc + item
//     } else {
//         return acc
//     }
// },0)

// console.log(sumArray)


// let obj1Array = []
// let obj2Array = []

// function concatObject(obj1, obj2){
    
//     for(let i = 0; i < obj1; i++){
//         if(i === Array){
//             obj1Array.push([i])
//             console.log(obj1Array)
//         }
//     }

//     for(let j = 0; j < obj2; j++){
//         if(j === Array){
//             obj2Array.push([j])
//             console.log(obj2Array)
//         } 
//     }
//     let allArrays = obj1Array.concat(obj2Array)
    
//     return allArrays
// }
// console.log(concatObject(objectFirst, objectSecond))

// const sum = allArrays.reduce(function (acc, currentItem){

//     if(typeof currentItem == "number") {

//      return acc
//     }
// }, 0)

// console.log(sumArray())




// var toString = {}.toString;
// console.log( toString.call(objectSecond.array));
// function searchArray(obj){
//     for(i = 0; i <= obj.length; i++){
//         if(obj.splice){
//             console.log(objectFirst)
//         }else{
//             console.log('err')
//         }
//     }
// }

// console.log(searchArray(objectFirst))

// console.log(objectFirst)

// let allArrays = arrayFirstObj.concat(arraySecondObj)
// console.log(allArrays)


// const sumArray = allArrays.reduce((acc, value) => {
//     acc +=value
//     return acc
// }, 0)

// console.log(sumArray)



// const obj = Object.assign({}, objectSecond, objectFirst);
// console.log(obj);

// let values = objectFirst.map(function(value)){
//     return Math.concat(value)
// }


// function concatObject(object){

//     allArray = [];

//     for(let i = 0; i < object.length; i++){
//        allArray += object[i]

//        function reducer(acc, object){  
//             if(typeof object == "number") {
//             return acc + object

//         } else {

//          return acc
//         }
//     }
//     console.log(reducer())
//     return allArray
// }

// console.log(concatObject(objectFirst))


// const objects = [
//     {
//         name: 'Artem',
//         number: 24,
//         array: [1, 2, 3],
//     },
//     {
//         surname: 'Vovk',
//         number: 80,
//         array: [1, 9, 3],
//     }
// ]

// const sumArray = allArrays.reduce((acc, value) => {
//     acc +=value
//     return acc
// }, 0)

// console.log(sumArray)





// __________________________________________

// Создать строки `str1`, `str2`, `str3`. Строки состоят из символом любого вида.

// Создать массив запрещенных символов `restrictedList = ['!', 'g', '_', '/' ......]`.

// Из всех строк исключить все запрещенные символы.




// str1 = 'asojnmv,;tdvii21'
// str2 = '745683wfn_!*$^@@)'
// str3 = 'SDF26e3378nfk*&^@'

// const restrictedList = ['@', '!', '*', '$', '2', ')']

// function deletedSymbol(str) {

//     let strNew = '';

//     for (let i = 0; i < str.length; i++){
//         symbol = true

//         for (let j = 0; j < restrictedList.length; j++) {

//             if (str[i] == restrictedList[j]) {
//                 symbol = false;
//                 break;
//             }
//         }

//         if (symbol) {
//             strNew += str[i];
//         }
//     }
//     return strNew;
// }

// console.log(deletedSymbol(str1))
// console.log(deletedSymbol(str2))
// console.log (deletedSymbol(str3)





// --_____________________________________________________________________--

// Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку

// `znak`. В переменной знак может быть: `+, -, *, /, %, ^`. Вывести результат

// математического действия, указанного в переменной `znak`.


// function doMath(x, znak, y){
    
//   if(!isNaN(x) && !isNaN(y)){
//     if (znak.search(/[+\-*/%^]/) || znak.length !== 1) alert('не знак');
//     return eval(x + znak + y)

//   } else if(!isNaN(x)){
//     alert('y not a number')
//   } else if(!isNaN(y)){
//     alert('x not a number')
//   } else if(isNaN(x) && isNaN(y)){
//     alert('x and y not a number')
//   } 

// }


// const x = prompt('x');
// const znak = prompt('знак');
// const y = prompt('y');

// alert(doMath(x, znak, y))

// console.log(doMath(5, '*', 4))

// function doMath(x, znak, y) {
//     if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
//     return eval(x + znak.replace('^', '**') + y)
// }
//     const x = prompt('Введите x');
//     const y = prompt('Введите y');
//     const znak = prompt('Введите знак');
//     alert(doMath(x, znak, y))

// function doMath(x, znak, y){
    
//     if(!isNaN(x) && !isNaN(y) && ~znak.search(/[+\-*/%^]/)){
//       return eval(x + znak + y)

//     } else if(!~znak.search(/[+\-*/%^]/)){
//       console.log('znak not operator')
//     } else if(!isNaN(x)){
//       console.log('y not a number')
//     } else if(!isNaN(y)){
//       console.log('x not a number')
//     } else if(isNaN(x) && isNaN(y)){
//       console.log('x and y not a number')
//     } 
  
// }
  
// result  = doMath(4, '-', 100);
// console.log(result)


// function doMath(x, znak, y){
    
//   if(!isNaN(x) && !isNaN(y)){
//     if(znak == '+'){
//       return x + y
//     } else if(znak == '-'){
//       return x - y
//     } else if(znak == '/'){
//       return x / y
//     } else if(znak == '%'){
//       return x % y
//     } else if(znak == '^'){
//       return x ^ y
//     } else if(znak == '*'){
//       return x * y
//     }
//   }

// }

// result  = doMath(4, '%', 100);
// console.log(result)


