// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function printConsoleNumbers() {
    const quantityStrings = 11;
    for (let i = 0; i < quantityStrings; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        }
        else if (i % 2 == 0) {
            console.log(`${i} - четное число`);
        }else {
            console.log(`${i} - нечетное число`);
        }
    }
}
printConsoleNumbers();

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
const deleteSomeElements = arr => {
    arr.splice(3, 2);
    return arr;
};
console.log(deleteSomeElements(array));

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function generatorRandomNumbers(){
    let arr = [];
    let arrLength = 5;
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.trunc(Math.random() * 10));
    }
    return arr;
}

const summaElements = array => array.reduce((a, b) => a + b);
const minimalElement = array => console.log(`Minimal value ${Math.min.apply(null, array)}`); // 
const getNumberThree = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3){
            return array[i];
        }
    }
};

let numbers = generatorRandomNumbers();
console.log(numbers);
console.log(`Summa numbers of array: ${summaElements(numbers)}`);  
minimalElement(numbers); 
if (getNumberThree(numbers)){
    console.log(`Yes, you find number 3 !!!`);
}else {
    console.log('NO, number is not find');
} 
//Задание 4
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function printMountainX(){
    const element = 'x';
    let stringElements = '';
    const numberOfRows = 20;
    for (let i = 0; i < numberOfRows; i++) {
        console.log(stringElements += element); 
    }
}

printMountainX();
