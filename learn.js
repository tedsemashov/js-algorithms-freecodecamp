function Ted(){
   this.name ='semashov';
   return  'you';
}
console.log(new Ted().name);


//конструктор
function test(){
   this.number = '1';
   return {number:'5'};
}
console.log(new test().number);


var obj = {}
function A(){
   return obj;
}
function B(){
   return obj;
}
var a = new A;
var b = new B;
alert(a==b); //true


alert(typeof NaN)

var x = 5;
alert(x++)



alert(2+true)

alert(typeof [])

for(var i=0; i<10; i++){
   setTimeout(function(){
       console.log(i);
   }, 10);
}

var output = (function(x){
   delete x;
   return x;
})(0);
console.log(output);

console.log(1<2<3); //true
console.log(3>2>1); //false

function foo(){
   console.log('bar');
   console.log(this);
}
foo();

var x ={ foo:1};
var output = (function(){
   delete x.foo;
   return x.foo;
})();
console.log(output)


//Фібоначчі
var n = 11; // Сколько элементов хотим получить
var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
   // Получаем i-й элемент последовательности как сумму предыдущих двух
   fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

alert(fibonacci.slice(0,n));
// slice отрезает от массива первые n элементов, если n < 2



//Неправильно але сам
function repeatify(String){
   this.String = String;
   console.log(String.repeat(3));
}
var repeat = new repeatify('hello');


//console.log('hello'.repeatify(3))

Правильно

Object.defineProperty(String.prototype, 'repeatify', {
   value(count) {
       return this.repeat(count);
   }
});
console.log('hello'.repeatify(3));



var arr1 = [1,2,3,1];
function deleteUniqueElements(array) {
   let nonUnique = [];

   for (element of array) {
       if (array.indexOf(element) !== array.lastIndexOf(element) ) {
           nonUnique.push(element);
       }
   }

   return nonUnique;
}

console.log(deleteUniqueElements(arr1))


Практичні
var age = prompt('Введіть ваш вік?', 18);
var message =
   age < 18 ? confirm('Батьки дозволили?') :
   age >= 18 ? "Welcome" :
   'Error. Please add new age';
alert(message);


function User(name) {
   this.name = name;
}

var obj = new User('Теодор');
var obj2 = new obj.constructor('Надія Орестівна поставте 3');

alert( obj2.name );


var arr1 = [1,2,3,1,5,5,6,6];
function deleteUniqueElements(array) {
   let nonUnique = [];

   for (element of array) {
       if (array.indexOf(element) !== array.lastIndexOf(element) ) {
           nonUnique.push(element);
       }
   }

   return nonUnique;
}

console.log(deleteUniqueElements(arr1))


F.prototype
var animal = {
   eats: true
}
function Rabbit(name) {
   this.name=name;
}
Rabbit.prototype = animal;
var rabbit = new Rabbit();
alert(rabbit.eats);

Constructor
function Rabbit(name){
   this.name = name;
   alert(name)
}
var rabbit = new Rabbit('Кріль')
var rabbit2 = rabbit.constructor('Кролик')
var rabbit3 = new Rabbit('Кроооолик')

String prototype
String.prototype.repeat = function(times) {
   return new Array(times + 1).join(this);
};

alert( "ля".repeat(3) ); // ляляля

Prototype через 1 секунду
Function.prototype.defer = function(ms) {
   setTimeout(this, ms);
}

function f() {
   alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду

Строка на число
var a = 'Hello';
var b = 5;
var c = a*b;
console.log(c); NaN


function Name(name) {
   this.name = name;
}

function Surname(sur) {
   this.sur = sur;

}

function fatherSurname(fat) {
   this.fat = fat;
}
var a = new Name('Ted')
var b = new Surname('Semashov')
var c = new fatherSurname('Svyatoslavovich')


console.log(a.name + " " + b.sur+ " "+ c.fat);


var animal = {
   surname: true
}

function Rabbit(name) {
   this.name = name
}

Rabbit.prototype = animal;
var a = new Rabbit('Rab');

console.log(a.surname)


function User(name) {
   this.name = name;
}

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name ); // Петя (сработало)


var a = 'TedSemashov';
var b;
b = a.length;
console.log(b)

var a = 'Semashov';
var b;

function User(name) {
   this.name = name;
}

var c = new User('Ted');
b = a.length;
console.log(b)
console.log(a[0])
console.log(c.name)

var a = 'olegzarapozwonit';
var b = a[a.length-1];
alert(b);


Колекції ES2015

'use strict'
let map = new Map();
map.set('1','string');
map.set(1,'number');
map.set(true,'boolean');
map.set(false,'boolean2');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));
console.log(map.size);

map.delete(true);
console.log(map.get(true))
console.log(map.size)

var a = typeof(null);
console.log(a); //object


var l = typeof(null);
var z = typeof(undefined);
console.log(l);
console.log(z);
console.log('object == undefined???????');
console.log('Перевірка по циклу внизу');
var a = null;
var b  = undefined;
if(a == b){
   console.log(true);
}
else {
   console.log(false);
}
console.log('Де логіка???')



function Boolean(a,b) {
   return a<b;
}
console.log(Boolean(10,15));
console.log(Boolean(50,15));


// Setup
var testObj = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line



// Setup
function phoneticLookup(val) {

   var result = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
   };

   return result[val];
}

phoneticLookup("charlie");

// Change this value to test


// Setup
var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
};

function checkObj(checkProp) {
   var a = myObj.hasOwnProperty(checkProp);
   if(a==true){
      return myObj[checkProp];
   }
   else{
      return "Not Found";
   }

}

// Test your code by modifying these values
checkObj("gift");


// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
   ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

// Only change code below this line
for (var i=0; i<myArr.length; i++){
   total += myArr[i];
}



function multiplyAll(arr) {
   var product = 1;
   // Only change code below this line
   for(var i=0; i<arr.length; i++){
      for(var j=0; j<arr[i].length; j++){
         console.log(product *= arr[i][j]);
      }
   }
   // Only change code above this line
   return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



//Setup
var contacts = [
   {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
   },
   {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
   },
   {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
   }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
   for (var x = 0; x < contacts.length; x++){
      if (contacts[x].firstName === firstName) {
         if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
         } else {
            return "No such property";
         }
      }
   }
   return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


var Car = function(wheels, seats, engines) {
   //Change this constructor
   this.wheels = wheels;
   this.seats = seats;
   this.engines = engines;
};

//Try it out here
var myCar = new Car(4,2,1);


Рандомне заокруглене число від 0 до 9
function randomWholeNum() {

   // Only change code below this line.

   return Math.floor(Math.random() * 10);
}


// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

Object Oriented Programming

var Bike = function(gear) {
   var gear;

   this.getGear = function(){
      return gear;
   };

   this.setGear = function(num){
      gear = num;
   }

};

var myBike = new Bike();

Додавання до масиву без зміни основного

var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(index){
   return index + 3;
});

Reduce метод(додає всі значення в масиві)

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(previousVal, currentVal){
   return previousVal+currentVal;
},0);


Filter method

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
   return val < 6;
});

Method Sort
var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
   return b - a;
});


Reverse method

var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array.reverse();

Concat method
var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

// newArray = oldArray.concat(concatMe);
//
// Split method
//
// var string = "Split me into an array";
// var array = [];

// Only change code below this line.

array = string.split(' ');

join method

var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");

Метод розрізання масиву, реверс масиву і зєднання масиву

function reverseString(str) {
   var arr = [];
   arr = str.split("");
   arr.reverse();
   var a;
   a = arr.join("");
   return a;
}
reverseString("hello");

Рекурсія!!!
     function factorialize(num) {
        if(num<0){
           return -1;
        }
        else if(num == 0){
           return 1;
        }
        else{
           return num*(factorialize(num-1));
        }
     }

factorialize(5);

Паліндром

function palindrome(str) {
   var a = str.toLowerCase().replace(/[\W_]/g, '');
   var b = a.split("");
   var c = b.reverse();
   var d = c.join("");


   if(a==d){
      return true;
   }
   else{
      return false;
   }

}



palindrome("eye");

Вернути найдовше слово
function findLongestWord(str) {
   var a = str.split(" ");
   var longestWord = 0;
   for(var i = 0; i<a.length; i++){
      if(a[i].length>longestWord){
         longestWord = a[i].length;
      }
   }
   return longestWord;

}

findLongestWord("The quick brown fox jumped over the lazy dog");


поділити масив і аперкейс для букви кожного слова
function titleCase(str) {
   var a = str.toLowerCase().split(" ");
   var result = a.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   });
   return result.join(" ");

}

titleCase("I'm a little tea pot");

бидлокод з масивом(Повернення найбільшого значення з кожного масиву)

function largestOfFour(arr) {
   var a = Math.max.apply(null, arr[0]);
   var b = Math.max.apply(null, arr[1]);
   var c = Math.max.apply(null, arr[2]);
   var d = Math.max.apply(null, arr[3]);
   var result = [];
   result.push(a,b,c,d);

   return result;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Метод Substr
// function confirmEnding(str, target) {
//    var b = target.length;
//    var a = str.substr(-b);
//    if (target != a) {
//       return false;
//    }
//    else {
//       return true;
//    }
// }

confirmEnding("Bastian", "n");

або так
function confirmEnding(str, target) {
   return str.substr(-target.length) === target;
}

Повернення стрінга декілька раз
function repeatStringNumTimes(str, num) {
   if(num>0){
      var b = str.repeat(num);
      return b;
   }
   else{
      return "";
   }
}

repeatStringNumTimes("abc", 3);


така собі функція по додаванню ...

function truncateString(str, num) {
   // Clear out that junk in your trunk
   if(str.length>num && num>3){
      return str.slice(0, num-3)+'...';
   }
   else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...';
   } else {
      return str;
   }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

Розрізання масиву
function chunkArrayInGroups(arr, size) {
   // Break it up.
   var arr2 = [];
   for (var i = 0; i < arr.length; i=i+size) {
      arr2.push(arr.slice(i , i+size));
   }
   return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);




Обрізає оригінал функції Splice
function slasher(arr, howMany) {
   // it doesn't always pay to be first

   var b = arr.splice(0,howMany);
   return arr;
}

slasher([1, 2, 3], 2);




перевірка букв з одного значення в іншому
function mutation(arr) {
   var a = arr[0].toLowerCase();
   var c = arr[1].toLowerCase();

   for(var i=0; i<c.length; i++){
      if(a.indexOf(c[i])===-1)
         return false;
   }
   return true;
}

mutation(["hello", "hey"]);



Фільтрація Булін

function bouncer(arr) {
   return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


Видалення з масива
function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments);

   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
         if (arr[i] === args[j]) {
            delete arr[i];
         }
      }
   }
   return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);ar




// Знаходження порядкового номера числа в масиві
function getIndexToIns(arr, num) {
   arr.sort(function(a, b) {
      return a - b;
   });

   for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
         return a;
   }

   return arr.length;
}

переведення в рут13

function rot13(str) {
   // Split str into a character array
   return str.split('')
   // Iterate over each character in the array
        .map.call(str, function(char) {
           // Convert char to a character code
           x = char.charCodeAt(0);
           // Checks if character lies between A-Z
           if (x < 65 || x > 90) {
              return String.fromCharCode(x);  // Return un-converted character
           }
           //N = ASCII 78, if the character code is less than 78, shift forward 13 places
           else if (x < 78) {
              return String.fromCharCode(x + 13);
           }
           // Otherwise shift the character 13 places backward
           return String.fromCharCode(x - 13);
        }).join('');  // Rejoin the array into a string
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

сума всіх чисел масиву
function sumAll(arr) {
   var a = Math.max(arr[0],arr[1]);
   var b = Math.min(arr[0],arr[1]);

   var c = 0;
   for(var i=b; i<=a;i++){
      c+=i;
   }
   return c;
}

sumAll([1, 4]);

Залишити унікальний елемент з двох масивів
function diffArray(arr1, arr2) {
   return arr1
        .concat(arr2)
        .filter(
             item => !arr1.includes(item) || !arr2.includes(item)
        )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

залишає унікальний елемент з двох масивів
function diffArray(arr1, arr2) {
   var newArr = [];

   function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i=0;i<first.length;i++) {
         if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
         }
      }
   }

   onlyInFirst(arr1, arr2);
   onlyInFirst(arr2, arr1);

   return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

перевірка по значенням в обєкті
function whatIsInAName(collection, source) {
   var srcKeys = Object.keys(source);

   // filter the collection
   return collection.filter(function (obj) {
      for(var i = 0; i < srcKeys.length; i++) {
         if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
            return false;
         }
      }
      return true;
   });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


Заміна слова в реченні з правильним кейсом першої літери
function myReplace(str, before, after) {
   var index = str.indexOf(before);
   if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
   }
   str = str.replace(before, after);

   return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



navigator.geolocation.getCurrentPosition((pos) => console.log(pos));


navigator.geolocation.getCurrentPosition((pos) => {
   const api = "https://fcc-weather-api.glitch.me/api/current?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude;
   fetch(api)
        .then((resp) => resp.json())
        .then((json) => {
           console.group("Weather in Lviv");
           console.log("Coordinates:" + JSON.stringify(json.coord));
           console.log("Weather: " + json.weather[0].main + " - " + json.weather[0].description);
           console.log("Temperature: " + json.main.temp + "C");
           console.log("All other weather info:");
           console.log(json);
           console.groupEnd();
        })
        .catch((error) => alert(error));
});