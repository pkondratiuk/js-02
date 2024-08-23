

// Приклад якщо перевірка true

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price);


//  Приклад якщо перевірка false

// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 0

// Practice #1

// function chakeAge (age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }
// }

// console.log(chakeAge(20));

// Приклад якщо перевірка true


// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

//  Приклад якщо перевірка false

// const grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }


// Practice #2

// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         return 'Not enough goods in stock!'
//     }

//     else {
//         return 'Order is processed, our manager will contact you'
//     }
// }

// console.log(checkStorage(20, 30));
// console.log(checkStorage(20, 7));

// Приклади з конспекту
// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Практика №3
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return 'There are no products in the order!';
//     }
    
//     else if (ordered > available) {
//         return 'Your order is too large, there are not enough items in stock!'
//     }

//     else {
//         return 'The order is accepted, our manager will contact you'
//     }
//   }

// console.log(checkStorage(25, 0));
// console.log(checkStorage(25, 30));
// console.log(checkStorage(25, 10));


// Приклади з конспекту

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'
// -------------------------------------------------------------------------

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// -------------------------------------------------------------------------

// const a = 5;
// const b = 10;

// const biggestNumber = a > b ? a : b;
// console.log(biggestNumber);


// Практика №4

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const chekPass = password === correctPassword ? 'Access granted' : 'Access denied, wrong password!';
//     return chekPass;
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('jqueryismyjamaa'));

// Практика №4 варіант 2

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return  password === correctPassword ? 'Access granted' : 'Access denied, wrong password!';
    
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('jqueryismyjamaa'));

// -------------------------------------------------------------------------

// Приклади з конспекту

// const fruit = 'apple';
// switch (fruit) {
//     case 'banana':
//         console.log('Banana selected');
//         break;
    
//     case 'apple':
//         console.log('Apple selected');
//         break;
//     case 'orange':
//         console.log('Orange selected');
//         break;

//     default:
//         console.log('The fruit is unknown');
// }

// -------------------------------------------------------------------------

// const day = 7;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('This is a workeng day');
//         break;
//     case 6:
//     case 7:
//         console.log('It is a day off');
//         break;
//     default:
//         console.log('Week have a 7 days')
// }


// Парктика №5
// function getSubscriptionPrice(type) {
//     switch (type) {
//         case 'starter':
//             return 0;
//             break;
//         case 'professional':
//             return 20;
//             break;
//         case 'organization':
//             return 50;
//             break;
//         default : return 'Invalid subscription type'
//     }
// }

// console.log(getSubscriptionPrice("premium"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("professional"));

// -------------------------------------------------------------------------
// Приклади з конспекту
// if (null) {
//     console.log('Block if');
// }
// else {
//     console.log('Block else');
// }

// if ('') {
//     console.log('Block if');
// }
// else {
//     console.log('Block else')
// }

// -------------------------------------------------------------------------

// console.log('hello' && 5);
// console.log(5 && 'hello');

// console.log('mango' && 'poly');
// console.log('poly' && 'mango');

// console.log(3 && true);
// console.log(true && 3);

// -------------------------------------------------------------------------

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

// -------------------------------------------------------------------------

const a = 20;
console.log(a > 10 && a < 30);

const b = 50;
console.log(b > 10 && b < 30);
console.log(b > 80 && b < 120);