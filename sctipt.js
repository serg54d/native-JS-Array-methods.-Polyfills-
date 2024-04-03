// push(), pop(), shift(), unshift() - мутирующие методы массива (изменяют исходный массив)


// _________________________________________________________

// push() - добавляет 1 или более элементов в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('Zhigurda', 'Name123');

// console.log('names:', names);
// console.log('result:', names);


// _________________________________________________________
// pop() - удаляет последний элемент массива и возвращает его

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedResult = names.pop()

// console.log('names:', names); // names: ['Alex', 'Bob', 'Ivan']
// console.log('popped:', poppedResult); // popped: Sasha


// const names = [];
// const poppedResult = names.pop()

// console.log('names:', names); // names: []
// console.log('popped:', poppedResult); // popped: undefined

// const array = [1, 2, 3, 4]
// let result = []

// for (let i = array.length; i > 0; i--) {
// 	const test = array.pop(array[i]);
// 	result.push(test)
// }
// console.log(result); // [4, 3, 2, 1]
// console.log('array:', array); // []

//__________________________________________________________________

// shift() - удаляет первый элемент из массива и возвращает его значение

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedNames = names.shift()

// console.log('names:', names); // names: (3) ['Bob', 'Ivan', 'Sasha']
// console.log('shiftedNames:', shiftedNames); // shiftedNames: Alex

// const names = []
// const res = names.shift();

// console.log('res:', res); // undefined

//__________________________________________________________________


// unshift() - добавляет 1 или более элементов в начало массива и возвращает новую длинну массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftResult = names.unshift('item1', 'item2')

// console.log('names:', names); // names: (6) ['item1', 'item2', 'Alex', 'Bob', 'Ivan', 'Sasha']
// console.log('unshiftResult:', unshiftResult); // unshiftResult: 6

//__________________________________________________________________

// let a = {} // a и b не равны, имеют ссылочный тип, у них разная ссылка
// let b = {}

//__________________________________________________________________


// reverse() - меняют порядок элементов в массиве на обратный (мутирующий)

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const reversedNames = names.reverse();

// console.log('names:', names); // names: (4) ['Sasha', 'Ivan', 'Bob', 'Alex']
// console.log('reversedNames:', reversedNames); // reversedNames: (4) ['Sasha', 'Ivan', 'Bob', 'Alex']

//__________________________________________________________________


// split() - метод для работы со строками (не мутирующий)

// Разобьем строку по разделителю '-'
// const str = 'ab-cd-ef';
// const result = str.split('-')

// console.log('str: ', str) // str:  ab-cd-ef
// console.log('result: ', result) // result:  (3) ['ab', 'cd', 'ef']

// вторым параметром указываем сколько элементов будет в массиве

// const str = 'ab-cd-ef';
// const result = str.split('-', 2)

// console.log('str: ', str) // str:  ab-cd-ef
// console.log('result: ', result) // result:  (2) ['ab', 'cd']


//пустую строку

// const str = 'ab-cd-ef';
// const result = str.split('')

// console.log('str: ', str) // str:  ab-cd-ef
// console.log('result: ', result) // result:  (8) ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']

// split()

// const str = 'ab-cd-ef';
// const result = str.split()

// console.log('str: ', str) // str:  ab-cd-ef
// console.log('result: ', result) // result:  ['ab-cd-ef']

// const str = 'ab-cd';
// const result = str.split('').reverse()

// console.log('result: ', result)

//__________________________________________________________________

// join() - метод массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinedNames = names.join('-') //join() пустой - будет разделять запятыми

// console.log('names:', names) // names: (4) ['Alex', 'Bob', 'Ivan', 'Sasha']
// console.log('joinedNames: ', joinedNames) // joinedNames:  Alex-Bob-Ivan-Sasha


// const tel = '1234567890';
// const res = tel.split('').reverse().join('')

// console.log('tel: ', tel)
// console.log('res: ', res)

//__________________________________________________________________

//concat() - не мутирующий метод массива

// flat () - если пустой то раскрывает 1 уровень вложенности, если передаем Infinity - расскрывает все уровни вложенности,
//  так же можем передавать чиловое значение кол-ва вложенностей

// const arr1 = [1, 2, 4]
// const arr2 = [5, 6, 7]
// const arr3 = [8, 9, 10]


// const res = arr1.concat(arr2, arr3, [11, 12, 13])

// console.log('arr1', arr1); //arr1 (3) [1, 2, 4]
// console.log('res', res); // res (12) [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const arr1 = [1, 2, 4]
// const arr2 = [5, 6, 7]
// const nestedArray = [
// 	[8, 9, 10], [11, 12, [13, 15, 17]]
// ]

// const res = arr1.concat(arr2, nestedArray)
// console.log('res:', res);


// const res1 = res.flat(Infinity)
// console.log('res1:', res1);


//__________________________________________________________________

// forEach() -

//  Array.forEach(function(el, index, array) {
// 	 код который мы хотим выполнить
// })

// const arr = [1, 2, 3, 4, 5]

// let sum = 0;

// arr.forEach(function (elem) {
// 	sum += elem

// })

// console.log(sum) // 15


//__________________________________________________________________

//find() - метод массива возвращает первый элемент согласно переданному условию, если элемента нет - undefined принимает в себя callback функцию

// const word = ['abs', 'testvariable', 'test']
// const res = word.find(function (el) {
// 	return el.length === 5
// })

// console.log('word:', word);
// console.log('res: ', res); // undefined

//__________________________________________________________________

// include() - проверяет наличие элемента в массиве возвращает true или false

// const arr = [1, 2, 3, 4, 5]
// const res = arr.includes(3)
// const noValue = arr.includes(10)

// console.log('res', res);
// console.log('noValue: ', noValue);

//__________________________________________________________________

//filter() - метод массива возвращает новый массив элементов согласно переданному условию в коллбеке

// const word = ['abs', 'testvariable', 'test', 'purple', 'plants', 'beer', 'Poland']
// const res = word.filter((el) => el.length >= 6)
// console.log('res', res)

//__________________________________________________________________

// sort() - метод для сортировки, сортирует на месте (мутабельный)

// 1) сортирует на месте (мутабельно) ASCII

// const names = ['Donald', 'alex', 'Alex']
// console.log(names.sort()); // (3) ['Alex', 'Donald', 'alex']

// 2) мутабельно

// const names = ['Test', 'ana', 'Ana', 'Кирилл']
// names.sort()

// console.log(names) //(4) ['Ana', 'Test', 'ana', 'Кирилл']

// const numbers = [1, 90, 2, 4, -1000, 56, 87]


// const compareFunction = (a, b) => {
// 	// по возрастанию

// 	if (a > b) {
// 		return 12 // переставляем наши элементы
// 	} else {
// 		return -12 // не переставляем
// 	}
// }

// console.log(numbers.sort(compareFunction)) // (7) [-1000, 1, 2, 4, 56, 87, 90]


// const res = numbers.sort((a, b) => a - b)
// console.log('res', res) // по возрастанию res (7) [-1000, 1, 2, 4, 56, 87, 90]

// const res = numbers.sort((a, b) => b - a)
// console.log('res:', res); // по убыванию res: (7) [90, 87, 56, 4, 2, 1, -1000]


// const users = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		isStudent: true,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		isStudent: true,
// 	},
// 	{
// 		id: 3,
// 		name: 'alex',
// 		isStudent: true,
// 	},
// ];

// console.log(users.sort((a, b) => b.name.localeCompare(a.name)));


//__________________________________________________________________

//toSorted() как sort() только не меняет исходный массив (иммутабельный метод)

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(values);
// console.log(sortedValues);

//__________________________________________________________________

// toReverse()

//__________________________________________________________________

// map ()

// const users1 = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		isStudent: true,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		isStudent: true,
// 	},
// 	{
// 		id: 3,
// 		name: 'Ann',
// 		isStudent: true,
// 	},
// 	{
// 		id: 4,
// 		name: 'Donald',
// 		isStudent: false,
// 	},
// ];


// const users = users1.map((user) => user.name)
// console.log('users: ', users); // users:  (4) ['Bob', 'Alex', 'Ann', 'Donald']

//__________________________________________________________________


// полифилы метода массива map. Полифил - код, который выполняет функционал если метода не существует или метод не поддерживается

const users1 = [
	{
		id: 1,
		name: 'Bob',
		isStudent: true,
	},
	{
		id: 2,
		name: 'Alex',
		isStudent: true,
	},
	{
		id: 3,
		name: 'Ann',
		isStudent: true,
	},
	{
		id: 4,
		name: 'Donald',
		isStudent: false,
	},
];

function newMap(arr, callback) {
	const result = []

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]))
	}

	return result
}

const resultUsers = newMap(users1, (user) => user.name)


console.log('resultUsers: ', resultUsers)
