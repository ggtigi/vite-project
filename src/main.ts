import './style.css'
console.log('test')

//  дз 1
    
        // var name = prompt('Введите ваше имя');
        // alert('Привет, ' + name + '');
     

//      дз2
    
//         const currentYear = new Date().getFullYear();
//         var birthYear = prompt('Введите год вашего рождения');
//         var age = currentYear - birthYear;
//         alert('Вам ' + age + ' лет');
     



//      дз3
    
//         var sideLength = prompt("Введите длину стороны квадрата");
//         var perimeter = 4 * sideLength;
//         alert("Периметр квадрата равен " + perimeter);
     

//      дз4
    
//         var radius = prompt("Введите радиус окружности");
//         var area = Math.PI * radius * radius;
//         alert("Площадь окружности равна " + area);
     

//      дз5
    
//         var distance = prompt("Введите расстояние между городами в км");
// var hours = prompt("Введите время в пути в часах");
// var speed = distance / hours;
// alert("Необходимо двигаться со скоростью " + speed + " км/ч");
     

//      дз6
    
//         const exchangeRate = 0.91;
//         var dollar = prompt('Введите сумму в долларах')
//         var evro = dollar  * exchangeRate
//         alert('Сумма евро:' + evro)

     

//      дз7
    
//         var flashDriveSize = prompt("Введите объем флешки в Гб");
// var fileSize = 820;
// var filesCount = Math.floor(flashDriveSize * 1024 / fileSize);
// alert("На флешку поместится " + filesCount + " файлов");
     

//      дз10
    
//         var flashDriveSize = prompt("Введите объем флешки в Гб");
// var fileSize = 820;
// var filesCount = Math.floor(flashDriveSize * 1024 / fileSize);
// alert("На флешку поместится " + filesCount + " файлов");
     

//      пз1
    
        // let number = +(prompt("Введите число:") as string);
        // let result = Math.pow(number, 2);
        // alert("Результат возведения во 2-ю степень: " + result);
     

//      пз2
    
        // let number1 = +(prompt("Введите первое число:") as string);
        // let number2 = prompt("Введите второе число:");
        // let average = (parseFloat(number1) + parseFloat(number2)) / 2;
        // alert("Среднее арифметическое: " + average);
     

//      пз3
    
        // let side = +prompt("Введите длину стороны квадрата:");
        // let area = Math.pow(parseFloat(side), 2);
        // alert("Площадь квадрата: " + area);
     

//      пз4
    
//         const milesPerKilometer = 0.621371;
//         let kilometers = prompt("Введите значение в километрах:");
//         let miles = parseFloat(kilometers) * milesPerKilometer;
//         alert("Значение в милях: " + miles);
     

//      пз5
    
//         let number1 = prompt("Введите первое число:");
//         let number2 = prompt("Введите второе число:");

//         let addition = parseFloat(number1) + parseFloat(number2);
//         let subtraction = parseFloat(number1) - parseFloat(number2);
//         let multiplication = parseFloat(number1) * parseFloat(number2);
//         let division = parseFloat(number1) / parseFloat(number2);

//         alert("Результат сложения: " + addition);
//         alert("Результат вычитания: " + subtraction);
//         alert("Результат умножения: " + multiplication);
//         alert("Результат деления: " + division);
     

//      пз6
    
//         let a = prompt("Введите значение a:");
//         let b = prompt("Введите значение b:");

//         let x = -parseFloat(b) / parseFloat(a);
//         alert("Значение x: " + x);
     

//      пз7
    
        // let currentHours = '20'
        // let currentMinutes = '22'

        // const totalMinutesPerDay = 24 * 60;
        // let remainingMinutes = totalMinutesPerDay - (parseFloat (currentHours) * 60 + parseFloat (currentMinutes));

        // let remainingHours = Math.floor(remainingMinutes / 60);
        // let remainingMinutesOutput = remainingMinutes % 60;

        // console.log("Осталось " + remainingHours + " часов " + remainingMinutesOutput + " минут до следующего дня.");
        

            //1 на уроке
        // let age: number = 25
        // if (age > 14 && age < 90) {
        //     console.log ('всё ок')
        // } else {
        //     console.log ('не получается')
        // }


        // 2 на уроке


        // age = 25
        // if (!(age < 14 &&  age > 90)) {
        //     console.log ('всё ок')
        // } else {
        //     console.log ('не получается')
        // }

        // age = 25
        // if (age < 14 && age > 90) {
        //     console.log ('всё ок')
        // } else {
        //     console.log ('не получается')
        // }






        // дз2.1 Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// let age = parseInt(prompt('Введите ваш возраст:', '0') as string)

// if (age >= 0 && age <= 2) {
//   console.log("Вы ребенок");
// } else if (age >= 12 && age <= 18) {
//   console.log("Вы подросток");
// } else if (age > 18 && age <= 60) {
//   console.log("Вы взрослый");
// } else if (age > 60) {
//   console.log("Вы пенсионер");
// } else {
//   console.log("Некорректный возраст");
// }



// дз2.2 Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
// let number = prompt("Введите число от 0 до 9:");
// switch (number) {
//     case '0':
//         console.log(")");
//         break;
//     case '1':
//         console.log("!");
//         break;
//     case '2':
//         console.log("@");
//         break;

//     case '3':
//         console.log('#')
//         break

//     case '4':
//         console.log('$')
//         break

//     case '5':
//         console.log('%')
//         break
//     case '6':
//         console.log('^')
//         break

//     case '7':
//         console.log('&')
//         break

//     case '8':
//         console.log('*')
//         break
//         case '9':
//             console.log('(')
//             break





//     default:
//         console.log("Некорректное число");
// }




// дз2.4  Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

// let year = parseInt(prompt('Введите год', '0') as string)
// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log('Год високосный');
// } else {
//   console.log('Год не високосный');
// }



// 2.3 Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

// const userInput: number = 333

// if (userInput >= 100 && userInput <= 999) {
//     const strUserInput: string = userInput.toString();
    
//     if (strUserInput == strUserInput || strUserInput == strUserInput || strUserInput == strUserInput) {
//         console.log('В числе ${userInput} есть одинаковые числа')
//     } else {
//         console.log('В числе ${userInput} нет одинаковых чисел')
//     }
// } else {
//     console.log("Вы ввели некорректное трехзначное число")

// }

// 2.6 Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.










     




