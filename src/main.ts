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
    
        // let currentHours = +(prompt("Введите текущее значение часов:") as string);
        // let currentMinutes = +(prompt('Введите текущее значение минут:') as string);

        // const totalMinutesPerDay = 24 * 60;
        // let remainingMinutes = totalMinutesPerDay - (parseFloat(currentHours) * 60 + parseFloat(currentMinutes));

        // let remainingHours = Math.floor(remainingMinutes / 60);
        // let remainingMinutesOutput = remainingMinutes % 60;

        // alert("Осталось " + remainingHours + " часов " + remainingMinutesOutput + " минут до следующего дня.");



            //1
        let age: number = 25
        if (age > 14 && age < 90) {
            console.log ('всё ок')
        } else {
            console.log ('не получается')
        }


        // 2


        age = 25
        if (!(age < 14 &&  age > 90)) {
            console.log ('всё ок')
        } else {
            console.log ('не получается')
        }

        age = 25
        if (age < 14 && age > 90) {
            console.log ('всё ок')
        } else {
            console.log ('не получается')
        }






     




