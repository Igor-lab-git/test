
"use strict"

// const user = {
//     name: 'Igor',
//     age: 19,
//     hasSigned: false
// }

// let val = 4;
// if(val < 5) {
//     val += 10;
// } else {
//     val -=10;
// } console.log(val)

// console.log(funProb(user));
 
// let {name} = user;
// let {hasSigned} = user;

// console.log(name);
// console.log(hasSigned);



// const fruits = ['Apple', 'Banana', 'Palm'];

// const [fruitsOne, fruitsTwo, fruitsThree] = fruits;

// console.log(fruitsOne, fruitsTwo, fruitsThree);
// console.table(fruits);

// const sumPositivNamber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number' ) {
//         return "Один из параметров не число"
//     }
//     if (a <= 0 || b <= 0) {
//         return 'Number are not positiv'
//     }
//     return a + b;
// }
// console.log(sumPositivNamber(5, 5));

// const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNos = nos.shift()

// console.log(nos)
// console.log(newNos)


// const primer = ["Я", "изучаю", "JavaScript", "язык программирования"];

// primer.forEach((a, b) => {
//    console.log(a, b)
// })

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let copiVegetables = (str) => {
//    return str.slice()
// }
// console.log(copiVegetables(vegetables))


// v = a * b * c;

// const getParalepiped = (a) => {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
// console.log(getParalepiped(10)(10)(10));

//суммирование 1 и посл. чисел
let num = 123;

str = num.toString()

let rezult = Number(str.slice(0, 1)) + Number(str.slice(-1))

console.log(rezult)


// вывод последнего числа

// const a = 123;
// let aNew = a % 10;
// console.log(aNew)

//Выведите количество цифр в этом числе.
// const a = 1234;
// let steA = String(a);
// console.log(steA.length)

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const getNumber = (a, b) => {
//     if(Number(a.toString().slice(0, 1)) === Number(b.toString().slice(0, 1))) {
//         return 'Числа совпадают'
//     } else {
//         return 'Числа разные'
//     }
// }
// console.log(getNumber(123, 123))

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const str = 'Игорь';
// if(str.length > 1) {
//     console.log(str.slice(-1))
// } else {
//     console.log('Одна буква')
// }

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const getNumders = (a, b) => {
//     if(a % b === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(getNumders(4, 3))

let user = {

}
user.name = 'John';
user.surname  = 'Smith';
user.name = 'Pete';
console.table(user)
delete user.name;
console.table(user)

let newUser = {

}

console.log(isEmpty(newUser))