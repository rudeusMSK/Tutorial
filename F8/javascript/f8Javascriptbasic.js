
/*
 * ************* f8: 2021 ************* * 
Link: https://www.youtube.com/@F8VNOfficial 
*/

/*
Bài1:
...
*/

/*
Bài2:
...
*/

/*
Bài3:
...
*/

/*
Bài4:
...
*/

/*
Bài5:
...
*/

/*
Bài6:
...
*/

/*
Bài7:
1. Alert: thông báo hộp thoại (message)
2. Console 
3. Confirm: hộp thoại (message + cancel/oke )
4. Prompt: hộp thoại (message + cancel/oke + input )
5. Set timeout (chạy sau 1 khoản thời gian 1 lần)
6. Set interval (chạy sau 1 khoản thời gian lặp đi lặp lại)
...
*/

var fullnme = 'RudeusMSK';

console.error(fullnme);
confirm('xac nhan ban du tuoi');
// cho code chạy sau khoản thời gian tính bằng mili giây
// cách 1 giây (theo thời gian set) chạy một lần
setTimeout(function () {
   alert('thông báo') 
}, 1000)

// thực thi liên tục theo thời gian
setInterval(function () {
   alert(fullnme) 
}, 1000)

/*
Bài8:
Toán tử
...
*/

/*
Bài9:
Toán tử tiếp theo
...
*/

/*
Bài10:
Toán tử
// Prefix & Postfix
// --a... / a--...
...
*/

var number = 6;
var output = number++ + --number; 
// 6 + (7-1 = 6) = 12
console.log('output: ', output); // 12

/*
Bài11:
Toán tử gán
Toán tử     Ví Dụ          Tương đương
**=         x**= y         x = x ** y (lũy thừa)
...
*/

/*
Bài12:
Toán tử chuỗi
...
*/

/*
Bài13:
toán tử so sánh
...
*/

/*
Bài14:
boolean : true/false
...
*/

/*
Bài15:
câu điều kiện if , if/else , if/else if/else...
luôn false:
0 = '' = "" = NaN = null = false
...
*/

/*
Bài16:
&&  ||
...
*/

/*
Bài17:

>>> dữ liệu lưu cứng vào vùng nhớ !
1. kiểu dữ liệu nguyên thủy - Primitive Data
      - Number
      - String
      - Boolean
      - Undefined
      - Null
      - Symbol
>>> có thể gọi/thực thi...

2.kiểu dữ liệu phức tạp - Complex Data
      - Function
      - Object
...
*/

// number
var a = 1;
var b = 2;
var c = 1.2;

// Script type
var fullName = "HUh \"ynh";
fullName = 'HUh \'ynh';
fullName = 'HUh \n\'ynh';

// Boolean type 
var isSuccess = true;

// Undefined type
var age;

// Null
var isNull = null; // notthing

// Symbol (2015)
var id = Symbol('id'); // Symbol có đặc tính duy nhất là unique
var id2 = Symbol('id'); // có một deripstion để mô tả Symbol này vd: 'id'
// vd:
console.log(id === id2);

// Function
var myFunction = function () {
      // code:
      alert(" đây là function !");
}

// function sẽ ko được thực hiện, chỉ thực hiện như lời gọi hàm
//vd:
myFunction(); // thực thi function.


// Object
var myObject = {
      // code:
      name: 'Gacon',
      age: 18,
      address: 'nồi chiên ko dầu',
      "trạng thái": "gần chính",
      myFunction: function () {
            
      }
};

// in ra thử fats:
console.log('myObject:',myObject)

// array
var myArray = [];
myArray = ['Ga', 'Con', 'Nnn'];
console.log(myArray);

// kiểm tra dữ liệu
console.log(typeof a);
console.log(typeof fullName);
console.log(typeof isSuccess);
console.log(typeof age);
console.log(typeof isNull); // >>> in ra object (có thể coi là lỗi của javascript :)) )
console.log(typeof id);
console.log(typeof myObject);
console.log(typeof myFunction);
console.log(typeof myArray);

/*
Bài18:
toán tử so sánh (tiếp theo)
* ===
* !==
>>> tuyệt đối !
...
*/

var a = 1;
var b = '1';
if (!a === b) { // >>> false
      alert("false");
}

/*
Bài19:
câu điều kiện (tiếp theo)
...
*/
var a1, b1, result;
a1 = 1;
b2 = 2;
result = a1 < b1; // true
result = a1 < b1 && a1 < 0; // false
// && chỉ trả về kết quả của 1 trong 2 đk tùy vào ngữ cảnh
// flase >>> kq của điều kiện 2;
//vd:
result = a1 < b1 && a1 > 0; // true

result = 'A' && 'B' && 'C'; // kq ?
/* 
 >>> C
 */
result = null && 'B' && 'C';  // >>> null
result = 'null' && NaN && 'C';  

/*
Bài20:
- chuõi (tiếp theo)
- Template string ES6 (2015)
...
*/
// bình thường:
console.log("xin" + "chào");

//Template string ES6 (2015):
console.log(`xin chào ${result}`);

/*
Bài21:
tiếp theo chuỗi
...
*/
var chuoi = 'hello các bạn  mình là rudeusMSK hihihi rudeusMSK rudeusMSK';
// 1. chiều dài chuỗi
chuoi.length 

// 2. find index
console.log(chuoi.indexOf('rudeusMSK')) // chỉ trả về vị trí đầu tiên tìm được
console.log(chuoi.indexOf('rudeusMSK', 6)) // tìm từ vị trí thứ ... 
console.log(chuoi.lastIndexOf('rudeusMSK'))//cuối
console.log(chuoi.search('rudeusMSK')) // ko có phương thức thứ 2 mà  hỗ trợ biểu thức chính quy

// 3. cut string

console.log(chuoi.slice(4, 6)) // cut từ vị trí ... đến ... vị trí
console.log(chuoi.slice(4)) 
console.log(chuoi.slice(-4, -6)) 

// 4. thay thể
console.log(chuoi.replace('rudeusMSK', 'GaCon')) // chì thay thế chữ đầu tiên tìm được
console.log(chuoi.replace(/rudeusMSK/g, 'GaCon')) // biểu thức 9 quy
//>>> ghi đè tất cả các chữ 'rudeusMSK' thành 'GaCon'

// 5. Convert to upper/Lower case
chuoi.toLowerCase();
chuoi.toUpperCase();

// 6. trim

// 7. Split

// 8. get a charater by index
const myString = 'hù hù hù';
console.log(myString.charAt(2));
console.log(typeof myString.charAt(2));
console.log(myString[2]);
// khác nhau:
console.log(myString.charAt(100)); // >>> chuỗi rỗng
console.log(myString[100]); // >>> Undefined


/*
Bài22:
- number hợp lệ
- làm việc với number
...
*/
var a = 100 / '123A';
var PI = 3.453345;
console.log(isNaN(a));

// to Fixed
console.log(PI.toString());
console.log(PI.toFixed()); // >>> 3
console.log(PI.toFixed(2)); // >>> 3.45

/*
Bài23:
Array
...
*/
var arr = new Array(
      1,2,3,
      '4',
      function () {
      // code
      },
      {}, // object
      123

);
// kiểm tra
console.log(Array.isArray(arr));
/*
Bài24:
array (tiếp theo) - làm việc với mãng
...
*/
var arr2 = [
      'hù',
      'hihi',
      'hêhê'
];

console.log(arr2.toString()) // >>> hù,hihi,hêhê
console.log(arr2.join()) // >>> hù,hihi,hêhê
console.log(arr2.join('')) // >>> hùhihihêhê
console.log(arr2.join(', ')) // >>> hù, hihi, hêhê

// xóa: cuối
console.log(arr2.pop()) // xóa element cuối mãng
console.log(arr2) 
//>>>(2) ["hù", "hihi"]

var arr2 = [];
console.log(arr2.pop()) // undefined
console.log(arr2) // >>> []

// thêm: cuối
console.log(arr2.push('hehe'))
console.log(arr2) // >>> (1) ["hehe"]
console.log(arr2.push('hehe', 'hihi'))

// shift:
// xóa phần tử đầu mãng và trả về phần tử đầu mãng
console.log(arr2.shift()) // xóa hết mãng Undefined

// Unshift: thêm đầu
console.log(arr2.unshift('wuwu')) 

// Splicing
console.log(arr2.splice(1,1)) //xóa từ (bắt đầu,xóa bao nhiêu)
console.log(arr2.splice(1, 0, 'đee')) // chèn
console.log(arr2.splice(1, 1, 'đee')) //xóa ròi chèn

// Concat - nối các arr
// vd
var arr1 = [1, 2];
var arr2 = [3, 4];
console.log(arr2.concat(arr1));

// Slicing
console.log(arr2.slice(1)); // cắt từ
console.log(arr2.slice(1, 2)); // cắt từ đến
console.log(arr2.slice(0)); // copy mãng ? vì sao phải copy theo cách này >>> nâng cao

/*
Bài25:
...
*/

/*
Bài26:
...
*/

/*
Bài27:
...
*/

/*
Bài28:
...
*/


/*
Bài29:
...
*/


/*
Bài30:
...
*/

/*
Bài31:
...
*/


/*
Bài32:
...
*/

/*
Bài33:
...
*/


/*
Bài34:
...
*/


/*
Bài35:
...
*/


/*
Bài36:
...
*/

/*
Bài37:
...
*/


/*
Bài38:
...
*/


/*
Bài39:
...
*/