//js начало

//*1.Переменные

const first = 'переменная с неизменным значением - константа';
let second = 'переменная значение которой можно поменять';

//!2.Типы данных

//!1.Простые (примитивы) типы данный:

const numberType = 10; //числа
const stringType = 'string'; //строка
const boolenType = false / true; //логические(булевые)
const typeNull = null; // null - значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
const typeUndefined = undefined; // undefined - означает, что «значение не было присвоено». 
//null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.
const typeSymbol = Symbol; //
const typeBigInt = BigInt; //Тип BigInt был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.

//!2.Особые типы данных - object (объект) – особенный.

const objType = {
    a: 1,
    b: 2,
    c: 3
};

//*3.Условные операторы if else и операторы сравнения "И"(&&), "ИЛИ"(||)

if (4 === 4) {
    console.log('very good')
} else if (4 > 2) {
    console.log('little');
} else {
    console.log('ok!');
};

//!Операторы сравнения "И"(&&), "ИЛИ"(||)

// && — И; позволяет объединить два или более выражения так, что каждое из них отдельно должно иметь значение true , 
//чтобы в итоге общее выражение имело значение true.
// || — ИЛИ; позволяет объединить два или более выражения так, 
//что одно или несколько из них должно иметь значение true , чтобы в итоге общее выражение имело значениеtrue.

//* 4.Циклы while и for


for (i = 0; i < 100; i++) {
    if (i % 2 === 0 && i > 1 && i <= 10) {
        console.log(i);
    }
}

//* 5.Callback функции пример

function learnJS(lang, callback) {
    console.log(`Мой первый язык программирования ${lang}`);
    callback();
};

learnJS('JavaScript', function () {
    console.log('Прохожу курсы по JS');
});


//* 5.ОБЪЕКТЫ

const objOption = {
    name: 'test',
    width: 1920,
    height: 1080,
    color: {
        border: 'black',
        bg: 'red'
    }
};

//!  Перебор всех свойств и их значений в объекте:

for (let key in objOption) {
    console.log(`Свойство ${key} имеет значение ${objOption[key]}`);
};

//! Перебор войств и их значений в объекте, если свойство определенного значения объекта, новый объект

for (let key in objOption) {
    if (typeof (objOption[key]) === 'object') {
        for (let i in objOption[key]) {
            console.log(`Свойство ${i} имеет значение ${objOption[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${objOption[key]}`);
    }
}

//! Обратиться к определенному свойству объетка:

console.log(objOption.name);
console.log(objOption['width']);
console.log(objOption['color']['border']);

//! Изменить определенное свойство объекта:

objOption.name = 'new name'

console.log(objOption);

//! Удалить определенное свойство из объекта:

delete objOption.name

console.log(objOption);

// ! Определяем (считаем) количество свойств объетка с помощю метода 'Object.keys()'

const objCalc = {
    color: 'red',
    border: '50%',
    width: 100,
    users: {
        name: 'yor nickname',
        age: 12
    }
}

const result = Object.keys(objCalc).length;

console.log(result)

// ! Создаем собственный метод для работы с объектом с помощью метки

const addMethod = {
    color: 'red',
    border: '50%',
    width: 100,
    users: {
        name: 'yor nickname',
        age: 12
    },
    makeTest: function () {
        console.log('new test');
    }
}

addMethod.makeTest();


//* 6.МАССИВЫ

// const arr = [1, 2, 3, 4];

// arr.pop(); //! метод удаляет последний элемент из массива
// arr.push(5); //! метод добавляет элемент в конец массива(в скобках указывам добавляемый элемент)
// console.log(arr);

//! Перебираем все элементы массива

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// for (let value of arr) {
//     console.log(value);
// };

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//! Перебираем все элементы массива

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

//! Сортировка свойств массива по порядку

const arrSort = [16, 4, 1, 56, 15]
arrSort.sort(compareNum);
console.log(arrSort);

function compareNum(a, b) {
    return a - b;
};


//* 6.Передача данных по ссылке и по значению

// Пример передачи данных по значению (для примитивных видов)

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// Пример передачи данных по ссылке

const obj = {
    a: 5,
    w: 1
};

const copy = obj;

copy.a = 10;

const copy = obj;

// Создание поверхтностной копии объекта

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const usersSite = {
    name: 'Ivan',
    age: 22,
    adress: {
        Country: 'Russia',
        City: 'Moscow'
    },
}

// const userCopy = copy(usersSite);

// console.log(userCopy);

//Соединение нескольких объектов

const add = {
    d: 17,
    e: 20
};

// const clone1 = Object.assign(usersSite, add);

const clone2 = Object.assign({}, add);

clone2.d = 99;

console.log(clone2);
console.log(add);

//Создание поверхностной копии массива

//1

const oldArr = [1, 2, 3];
const newArr = oldArr.slice();

newArr[1] = 'add new string'

console.log(oldArr);
console.log(newArr);

//2

const video = ['youtube', 'rutube', 'vimeo'],
    blogs = ['wordpress', 'livejournal', 'blogger', 'joomla'],
    internet = [...video, ...blogs, 'add new string'];

console.log(internet);

//3

const array = ['a', 'b', 'c'];

const newArray = [...array];
newArray[3] = 'add new string';
newArray.push(99);

console.log(newArray);
console.log(array);














