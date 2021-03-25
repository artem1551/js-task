// Написать функцию getMaxs(args), где args - любое количество массивов.

// Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель `,`


// function getMax(args){
//     let maxsArrays = [];
//     for(let i = 0; i < args.length; i++){
//         let max = Math.max.apply(null, args[i]);
//         maxsArrays.push(max)
//     }
//     return maxsArrays.join()  
// }



// function getMax(arrays){
//     let maxsArrays = [];
//     arrays.forEach(args => {
//         let max = Math.max.apply(null, args);
//         maxsArrays.push(max)
//     });
//     return maxsArrays.join()
// }

// console.log(getMax(arrays))

// console.log(getMax([[1, 2, 4], [1, 2, 6], [3, 7, 8], [5, 7, 9, 10, 200], [0, -10, -50]]))



// function getMax(arrays){
//     let maxsArrays = arrays.map(function(arg){
//         let max = Math.max.apply(null, arg);
//         return max
//     })
//     return maxsArrays.join()
    
// }

// console.log(getMax([[1, 2, 4], [1, 2, 6], [3, 7, 8], [5, 7, 9, 10, 200], [0, -10, -50]]))







// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, который состоит из 
// свойство обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта. Object.assign() - не использовать


// let obj1 = { name: 'artem', age: '99' }
// let obj2 = { friend: 'car', age: '50' }



// function cancatObj(obj1,obj2){
//     let obj3 = {};
//     for (let item in obj1) { 
//         obj3[item] = obj1[item]; 
//         obj3.push(obj1)
//     }
//     for (let item in obj2) { obj3[item] = obj2[item]; }
//     return obj3;
// }

// console.log(cancatObj())



// function assignObjects(obj1, obj2) {

//     for (let i in obj2) {

//         if (obj2[i] == Object) {
//           obj1[i] = assignObjects(obj1[i], obj2[i]);
  
//         } else {
//           obj1[i] = obj2[i];
//         }
//     } 
//     return obj1;
// }


// let obj3 = assignObjects({ x: 10, y: 20 }, { x: 50, z: 30 });
// console.log(obj3)


// const str1 = 'asojnmv,;tdvii21'

// const str2 = '745683wfn_!*$^@@)'

// const str3 = 'SDF26e3378nfk*&^@'



// const restrictedList = ['@', '!', '*', '$', '2', ')']



// function deletedSymbol(str) {

//     for (let i = 0; i < str.length; i++){

//         for (let j = 0; j < restrictedList.length; j++) {

//             if (str[i] == restrictedList[j]) {
//                 str = []
//                 str.delete(str[i])

//             }

//         }
//     }

//     return str;
// }



// console.log(deletedSymbol(str1))

// console.log(deletedSymbol(str2))

// console.log (deletedSymbol(str3))


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

// function forObject(obj){
//     for(let key in obj){
//         if(Array.isArray(obj[key])){
//         allArray.push(obj[key])
//         } 
//     }
// }

// forObject(objectFirst)
// forObject(objectSecond)


// let allArrays = allArray.flat()
// console.log(allArrays)

// const sumArray = allArrays.reduce(function(acc, item){

//     if(typeof item == "number"){
//         return acc + item
//     } else {
//         return acc
//     }

// },0)

// console.log(sumArray)




// const fillArray = [];

// for(let i = 0; i < 3; i++) {

//         const arrays = [];

        

//     for(let j = 0; j < 4; j++) {

//         randomNumber = Math.floor(Math.random() * 40 - 20)

//         arrays.push(randomNumber)

//     } 

//     fillArray.push(arrays)

//     console.log(arrays)

// }



// for(let k = 0; k <=fillArray.length-1; k++) {

//     let sum = 0

//     for(let l = 0; l <= fillArray[k].length-1; l++) {

//         let value = fillArray[k][l]

//         sum += value
//         // console.log(sum)
//     }

//     if(sum < 0) {

//         fillArray.forEach(function (item) {

//             item.splice(k, 1)

            

//         })
//         console.log(sum)
//     }


// }



// console.log(fillArray)