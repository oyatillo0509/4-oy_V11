// 1-masala

// function str_m(str) {
//     var len = str.length;
//     return str.charAt(len - 1);
// }
// console.log(str_m("Hello"));

// 2-masala

// function str_m(str) {
//   var len = str.length;
//   return str.getMiddleChar();
// }
// console.log(str_m("Hello"));

// chiqaraolmadim

// 3-masala

// function str_m(str) {
//   return str.charCodeAt(0);
// }
// console.log(str_m("Hello"));

// 4-masala
// function str_m(str) {
//   var res = str.length;

//   if (res > 10) {
//     return "Uzoq string";
//   } else {
//     return "Qisqa string";
//   }
// }
// console.log(str_m("Hello"));

// 5-masala

// function str_m(str) {
//     var res = [];

//     for (var i = 0; i < str.length; i++) {
//         res.push(str.charCodeAt(i));
//     }

//     return res;
// }

// console.log(str_m("Hello"));

// Stringlarda `slice`, `substring`, va `substr` metodlariga oid 7 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:

// 1-masala

// function str_m(str) {
//   return str.slice(0, 3);
// }

// console.log(str_m("Hello"));

// 2-masala

// function str_m(str) {
//   return str.slice(-5);
// }

// console.log(str_m("Hello world"));

// 3-masala

// ishlolmadim chiqmayabdi

// 4-masala

// function str_m(str) {
//   return str.substr(4, 3);
// }

// console.log(str_m("HelloWorld"));

// 5-masala

// function str_m(str) {
//   return str.substring(0, 10);
// }

// console.log(str_m("Hell ms km, "));

// 6-masala

// function str_m(str) {
//   return str.slice(-3);
// }
// console.log(str_m("Hello"));

// 7-masala

// function str_m(str) {
//   return str.substring(2);
// }

// console.log(str_m("Hello World"));

// Stringlarda `toUpperCase`, `toLowerCase`, `concat`, `trim`, `padStart`, `trimEnd`, va `padEnd` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:

// 1-masala

// function str_m(str) {
//     return str.toUpperCase();
// }

// console.log(str_m("Hello World"));

// 2-masala

// function str_m(str) {
//   return str.toLowerCase();
// }

// console.log(str_m("HELLO WORLD"));

// 3-masala

// function str_m(str1, str2) {
//     return str1.concat(str2);
// }

// console.log(str_m("Hello", "World"));

// 4-masala

// function str_m(str) {
//   return str.trim();
// }

// console.log(str_m("   Hello World   "));

// 5-masala

// function str_m(str, max_l, tol) {
//   if (str.length >= max_l) {
//     return str;
//   }

//   return tol.repeat(max_l - str.length) + str;
// }

// console.log(str_m("Hello", 10, "*"));

// 6-masala

// function str_m(str, max_l, tol) {
//   if (str.length >= max_l) {
//     return str;
//   }

//   return str + tol.repeat(max_l - str.length);
// }

// console.log(str_m("Hello", 10, "*"));

// 7-masala

// function str_m(str) {
//   return str.trimEnd();
// }
// console.log(str_m("   Hello World   "));

// 8-masala

// function str_m(str) {
//   return str.trimStart();
// }
// console.log(str_m("   Hello World   "));

// 9-masala

// function str_m(str, max_l, tol) {
//   if (str.length >= max_l) {
//     return str;
//   }

//   return tol.repeat(max_l - str.length) + str;
// }

// console.log(str_m("Hello", 10, "0"));

// 10-masala

// function str_m(str, max_l, tol) {
//   if (str.length >= max_l) {
//     return str;
//   }

//   return str + tol.repeat(max_l - str.length);
// }

// console.log(str_m("Hello", 10, " "));

// Stringlarda `repeat`, `replace`, `replaceAll`, va `split` metodlariga oid 10 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:

// 1-masala

// function str_m(str, N) {
//   return str.repeat(N);
// }

// console.log(str_m("Hello ", 3));

// 2-masala

// function str_m(str) {
//     return str.replace("apple", "orange");
// }

// console.log(str_m("I have got banana apple and strobery."));

// 3-masala

// function str_m(str) {
//   return str.replace("a", "A");
// }

// console.log(str_m("I have got banana apple and strobery."));

// 4-masala

// function str_m(str) {
//   return str.replaceAll("cat", "dog");
// }

// console.log(str_m("I have got cat but I don't have cat."));

// 5 -masala

// function str_m(str) {
//   return str.replaceAll("e", "E");
// }

// console.log(str_m("I have got banana apple and strobery."));

// 6-masala

// function str_m(str) {
//   return str.split(" ");
// }

// console.log(str_m("hello world!"));

// 7-masala

// function str_m(str) {
//   return str.split(",");
// }

// console.log(str_m("apple,banana,cherry"));

// 8-masala

// function str_m(str) {
//   return str.split("");
// }

// console.log(str_m("apple, banana, cherry"));

// 9-masala

// savolga chunmadim

// 10-masala

// function str_m(str) {
//   let rep = str.replaceAll("a", "*");

//   let a = rep.split(" ");

//   let res = a.map((word) => word.repeat(3));

//   return res;
// }

// console.log(str_m("apple banana cherry"));

// Massiv va stringlarni birlashtirib ishlatiladigan va funksiyalar yordamida yechiladigan 10 ta masala:

// 1-masala

// function str_m(str) {
//   let s = str.split(" ");

//   let upper_c = s.map((word) => word.toUpperCase());

//   let res = upper_c.join(",");

//   return res;
// }

// console.log(str_m("apple banana cherry"));

// 2-masala

// function str_m(arr) {
//   let res = arr.map((str) => str + str.length);

//   return res.join("");
// }

// console.log(str_m(["apple", "banana", "cherry"]));

// 3-masala

// function str_m(arr) {
//   let c = arr.join("");

//   let res = c.split(" ").join("");

//   return res;
// }

// console.log(str_m(["apple", "banana", "cherry"]));

// 4-masala

// function str_m(str) {
//     let c = str.split('');

//     let res = c.map(char => char.charCodeAt(0));

//     return res;
// }

// console.log(str_m("apple"));

// 5-masala

// function str_m(arr) {
//   let revers_m = arr.map((element) => element.split("").reverse().join(""));

//   let res = revers_m.join("");

//   return res;
// }

// console.log(str_m(["apple", "banana", "cherry"]));

// 6-masala
// chiqara olmadim

// 7-masala

// function str_m(arr) {
//   let new_a = [];

//   for (let i = 0; i < arr.length; i++) {
//     new_a.push(arr[i].toLowerCase());
//   }

//   let res = new_a.join("-");

//   return res;
// }

// console.log(str_m(["Apple", "Banana", "Cherry"]));

// 8-masala

// function str_m(str) {
//   let array = str.split(",");

//   let resultString = array.join("xyz");

//   return resultString;
// }

// console.log(str_m("apple,banana,cherry"));

// 9-masala

// function str_m(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].toString().length;
//   }

//   return sum.toString();
// }

// console.log(str_m([1, 4, 7, 9, 3, 5]));

// 10-masala
//  Berilgan stringni har bir harfdan ajratib, massivga aylantiring. Ushbu massivning har bir elementini sonning kvadratiga almashtirib, yangi massiv hosil qilish va so'ngra ushbu massivni stringga aylantirish uchun `squareCharactersOfString(str)` funksiyasini yozing.

// savolda xatolik bor shekili

// Stringlarda `indexOf`, `search`, `includes`, va `startsWith` metodlariga oid 7 ta masala funksiyalar bilan ishlaydigan qilib tuzilgan shartlari:

// 1-masaka

// function str_m(str) {
//   return str.indexOf("apple");
// }
// console.log(str_m(["salom", "xayr", "apple", "tillo"]));

// 2-masala

// function str_m(str) {
//   return str.indexOf("@");
// }

// console.log(str_m("oyatilloabdulhafizov@gmail.com"));

// 3-masala

// function str_m(str) {
//   var res = str.indexOf("banana");

//   return res;
// }

// console.log(str_m("apple strobery banana"));

// 4-masala
