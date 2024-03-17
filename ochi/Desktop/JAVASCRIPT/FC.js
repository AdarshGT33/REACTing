// let str = "JavaScript";
// let size = 0;
// for (let i of str) {
//     console.log("i=",i);
//     size++
// }
// console.log("String Size is:",size);

// let student = {
//     name : "Adarsh",
//     rollNo : 43,
//     sec : "A"
// }
// for (let key in student) {
//     console.log("key =",key,   "key value =", student[key]);
// }

// for (i = 2; i<=100; i = i + 2) {
//     console.log(i);
// }

// let gameNum = 34;
// let n = prompt("Enter the number NIGGA");
// while (n != gameNum) {
//     n = prompt("That was a Bitch move cuh! Try Again Like A Man NIGGA");
// }
// console.log("YOU entered the right number");

// let str = "JaiShreeRam";
// str.toUpperCase();
// console.log(str);// output: JaiShreeRam, no uppercase string because we called the original string

/* in the code below, a variable is declared
using const. A string is initialised using String 
keyword. In that string, digits are entered while 
concatenation is applied too. These digits now are 
the function of string and every string method is 
applicable to them while also preserving their own 
nature of addition.*/
// const strPrim = String(123455+66777+321);
// console.log(strPrim.length);

// const s1 = "2 + 2";
// console.log(eval(s1)); // output: 4
// const s2 = new String("2 + 2");
// console.log(eval(s2)); // output: String {'2 + 2'}

// let str = "  A      lot       of       P e o p l e      ";
// console.log(str.trim());

// let str = "JaiShreeRam"
// console.log(str.replace("Jai","JaiJai"));
// console.log(str.charAt(8));
// console.log(str);

// let n = prompt("Enter Your Name Fine Individual");
// console.log(`@${n}${n.length}`);

// let n = prompt("Enter the number");
// i = 1;
// while (i<=10) {
//     m = i * n;
//     console.log(n,"*",i,"=",m);
//     i++;
// }

// let n = prompt("Enter the number for factorial");
// t = 1;
// for (i = 1; i<=n; i++){
//     t = i * t;
// }
// console.log(t);

// let x = prompt("Enter the base value");
// let y = prompt("Enter the power value");
// n = x ** y;
// console.log(n);


// do {
//     let n = prompt("Enter the number");
//     m = n ** 2;
//     console.log(m);
//     ch = prompt("want to continue......y/n");
// } while (ch == "y" || ch == "Y");


// let n = prompt("Enter the number");
// for (i = 1; i<=10; i++) {
//     m = i * n;
//     console.log(n,"*",i,"=",m);
// }

// let n = prompt("Enter the number");
// if (n) {
//     console.log(n," is a prime number");
// } else if (n == 2){
//     console.log(n," is a prime number");
// } else {
//     console.log(n," is not a prime number");
// }

// let n = prompt("Enter the number"), d, r = 0;
// while (n>0) {
//     d = n % 10;
//     r = r * 10 + d;
//     n = n / 10;
// }
// console.log(r);


// let n = 5;
// let str = "";

// for (i=0;i<n;i++){
//     for (j= 0; j<n; j++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


// let n = 5;
// let str = "";

// for (i=0;i<n;i++){
//     for (j=0;j<n;j++){
//         if (i==0 || i==n-1){
//             str += "*";
//         }
//         else{
//             if (j==0 || j==n-1){
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//     }
//     str += "\n";
// }
// console.log(str);

// const jsonString = `{
//     "Fname" : "Adarsh",
//     "MName" : "Singh",
//     "LName" : "Tomar",
//     "eMail" : "tomaradarsh18@gmail.com",
//     "role" : "Tech Lead",
//     "comapany" : "TEch co."
// }`;
// const jsonObj = JSON.parse(jsonString);

// let marks = [38,23,32,5,43,34,42,29];
// // for (let idx = 0; idx<marks.length; idx++){
// //     console.log(marks[idx]);
// // }
// for (let i of marks){
//     console.log(i);
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let i of marks){
//     sum = sum + i;
// }
// let avg = sum / marks.length;
// console.log(`The average of the class is: ${avg}`);

// let arr = [250,645,300,900,50];
// console.log(`The original array: ${arr}`);
// for (let i = 0; i < arr.length; i++){
//     let off = arr[i] / 10;
//     arr[i] -= off;
// }
// console.log(`The discounted array: ${arr}`);

// let shriHari = ["Raghupati", "Raghav", "Raja", "Ram", "Janaksuta", "Jagjanani", "Janaki"];
// let str = shriHari.splice(1,2,"Siyavar");
// console.log(shriHari);

// let strCom = ["Bloomberg", "Microsoft", "Google", "IBM", "Uber", "Netflix"];
// strCom.push("Amazon");
// console.log(strCom);


// let n = 5;
// let str = ""
// for (i=1; i<=n; i++){
//     for (j=0; j<n-i; j++){
//         str += " ";
//     }
//     for (k=0; k<i; k++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);

// let n = 5;
// let str = "";
// for (i = 0; i < n; i++){
//     for (j = 0; j < n-i; j++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);

// let n = 5;
// let str = "";
// for (i = 1; i <= n; i++){
//     for (j = 0; j < i; j++){
//         str += "*"
//     }
//     str += "\n";
// }
// console.log(str);

// let n = 5;
// let str = "";
// for (i = 1; i <= n; i++){
//     for (j = 0; j < i; j++){
//         if (i===n){
//             str += "*";
//         }
//         else{
//             if (j == 0 || j == i - 1){
//                 str += "*";
//             }
//             else{
//                 str += " ";
//             }
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// let n = 5;
// let str = "";
// for (i = 0; i < n; i++){
//     for (j = 0; j < n - i; j++ ){
//         str += " ";
//     }
//     for (k = 0; k < 2 * i + 1; k++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);

// function to simulate sum of two numbers
// function twoSum(num1,num2){
//     let c = num1 + num2;
//     console.log(c);
// }
// twoSum(4,67);

// const arrowMul = (x,y) =>{
//     return x*y;
// }

// function retVow(str){
//     let count = 0;
//     for (const char of str){
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// retVow("hariAnant");

// function sqrEm(n) {
//     let sq = n * n;
//     console.log(sq);
// }

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(sqrEm);


// let arr = [2,5,6,4,3,8,0]

// let nArr = arr.map((val)=> {
//     val = val * 2;
//     return val;
// })

// arr = [56, 78, 61, 93, 72, 91, 65, 84, 96, 95, 92, 87];
// let nArr = arr.filter((val)=> {
//     return val > 90;
// });

// let n = prompt("Enter a number: ");

// let arr = [];

// for (let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }

// const sum = arr.reduce((prev,curr)=> prev + curr);
// const multiply = arr.reduce((prev,curr)=> prev * curr);
// console.log(`The total concative value of all elements of the arrays is: ${sum}`);
// console.log(`The multiplicatve total of elements of the array is: ${multiply}`);

// let n = 5;
// let str = "";
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j < i; j++){
//         str += " ";
//     }
//     for (let k = 0; k <[2 * (n - i) + 1]; k++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +  "From Apna College Students";

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "first div";
// divs[1].innerText = "second div";
// divs[2].innerText = "third div";
// console.log(divs);

// let div = document.querySelector("div");
// console.log(div);
// let val = div.getAttribute("id");
// console.log(val);
// let res = div.setAttribute("name","clause");
// console.log(res);

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "bisques";

// let ele = document.createElement("p");
// ele.innerText = "this is a paragraph which is meant to be read";
// let div = document.querySelector("div");
// div.append(ele);
// console.log(div);
// ele.remove();

// let btn = document.createElement("button");
// btn.innerText = "click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// let bdy = document.querySelector("body");
// bdy.prepend(btn);
// console.log(bdy);

// let bhed = document.querySelector("p");
// let bhat = document.querySelector(".bhature");
// bhed.classList.add("bhature");

// let btn = document.querySelector("#btn");
// btn.addEventListener("click",() => {
//     console.log("OHHHHH MYYYY GAAAHHHH");
//     console.log("this is handler1");
// });
// btn.addEventListener("click",() => {
//     console.log("OHHHHH MYYYY GAAAHHHH");
//     console.log("this is handler2");
// });
// const handler3 = () => {
//     console.log("OHHHHH MYYYY GAAAHHHH");
//     console.log("this is handler3");
// }
// btn.addEventListener("click", handler3);
// btn.addEventListener("click",() => {
//     console.log("OHHHHH MYYYY GAAAHHHH");
//     console.log("this is handler4");
// });
// btn.removeEventListener("click",handler3);

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click", () =>{
//     if (currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// })

// let arr = [1, 3, 4, 2, 5];
// let initVal = 0;
// let sqr = arr.forEach((val)=>{
//     console.log(val ** 2);
//     var arr1 = val;
// });

// let arr2 = [1, 9, 16, 4, 25];
// let sum = arr2.reduce((accumulator, currentValue)=> accumulator + currentValue, initVal);
// console.log(sum);

// let arr = [6,2,5,3,1,4,0];
// console.log(arr.indexOf(3,0));

// let str = "  ";
// if (str.trim() === ""){
//     console.log("The string is empty");
// }else {
//     console.log("The string is not empty");
// }

// let arr = [3, 6, 7, 1, 9, 0, -3, -4, -8];
// let checkElement = 4;

// if (arr.indexOf(checkElement) !== -1){
//     console.log("the number exists in the array");
// }else {
//     console.log("the number does not exist in the array");
// }

// let myArr = [3, 6, 7, 1, 9, 0, -3, -4, -8];

// function eleExists(arr, element) {
//     return arr.includes(element);
// }

// let checkElement = 8;

// if (eleExists(myArr,checkElement)){
//     console.log(`the element ${checkElement} does exist`);
// }else {
//     console.log(`the element ${checkElement} does not exist`);
// }

// let myArr = [1, 3, 1, 4, 5, 6, 1, 7, 8, 1, 9];

// function remEle(arr, element) {
//     return arr.filter((element) => element !== 1);
// }

// let choEle = 1;

// let newMyArr = remEle(myArr,choEle);

// console.log(newMyArr);

// function findDig (number){
//     const numToStr = String(number);
//     const numLength = numToStr.length;

//     if (isNaN(number) || number < 0){
//         return `Invalid Input ${number}. Please provide a valid and a non-negative integer`;
//     }else {
//         return `the ${number} have ${numLength} digits`;
//     }
// }

// let num = "Adarsh";
// let res = findDig(num);
// console.log(res);

// let num = 12345;
// function sumOfDigs(number){
//     let sum = 0;
//     const digits = String(number).split('');
//     for (let digit of digits){
//         sum += parseInt(digit);
//     }
//     return sum;
// }

// let finRes = sumOfDigs(num);
// console.log(`The sum of the digits of the number ${num} is ${finRes}`);

// function sumOfDigs(number){
//     if (Number.isInteger(number) && number >= 0){
//         const digits = String(number).split('');
        
//         const digSum = digits.reduce((sum,digit) => sum + parseInt(digit), 0);
        
//         return digSum;
//     }else{
//         console.log(`Invalid input provided!`);
//     }
// }

// let num = 482870;
// let finRes = sumOfDigs(num);
// console.log(`The sum of the digits of the number ${num} is ${finRes}`);

// let n = prompt(`Enter the number for factorial NIGGA`);
// let t = 1;
// for (let i = 1; i <= n; i++){
//     t = i * t;
// }
// console.log(`The factorial of the number ${n} is ${t}`);

// let arr = [-1, 2, 4, 7, 27, -84, 5];
// let sortarr = arr.toSorted((a,b) => a - b);
// let lastEle = sortarr[sortarr.length - 1];
// console.log(lastEle);

// let arr = [-1, 2, 4, 7, 27, -84, 5];
// let maxEle = Math.max(...arr);
// console.log(maxEle);

// function rollDice (){
//     return Math.floor(Math.random() * 6) + 1;
// }

// let diceRoll = rollDice();
// console.log(`The dice roll is : ${diceRoll}`);

// const car = {
//     "name" : "Porsche",
//     "model" : `911GTR`,
//     "color" : "Carbon Black"
// };
// console.log(`name of the car is ${car.name}`);

// const person = {
//     "name" : "Adarsh",
//     "age" : `22`,
//     "city" : "Gwalior"
// };
// person.city = "New York";
// person.country = "United States of America";

// console.log(`${person.city}`);
// console.log(`${person.country}`);

// let array = [2, -3, 5, 14, 33, 67, -32];
// let arr = array.filter((elements) => elements > 1);
// console.log(arr);


// function findLongestCountryName (countries) {
//     if (!countries || countries.length === 0){
//         return `Array is either not given OR Empty`;
//     }
//     let longest = countries[0];
//     for (let i = 1; i < countries.length; i++ ){
//         if (countries[i].length > longest.length){
//             longest = countries[i];
//         }
//     }
//     return longest;
// }
// let array = [];
// let longestCountryName = findLongestCountryName(array);
// console.log(longestCountryName);

// function vowInStr (string){
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let char of string){
//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     return `The vowel count for the provided string is ${count}`;
// }

// let str = "siya";
// let finRes = vowInStr(str);
// console.log(finRes);

// function findVowLen(string){
//     const vowels = 'aeiouAEIOU';
//     const characters = string.split('');
//     const count = characters.filter((char) => vowels.includes(char)).length;
//     return `The vowel count is ${count}`;
// }
// let str = "SiyavarRamchandrakiJai";
// let finRes = findVowLen(str);
// console.log(finRes);

// function ranNum (){
//     return Math.floor(Math.random() * 20) + 1;
// }
// let berdom = ranNum();
// console.log(`The random numbe from given range is : ${berdom}`);

// function arrayAverage(arr){
//     const inavg = 0;
//     const calc = arr.reduce((accumulator,currentValue) => (accumulator + currentValue), inavg);
//     const average = calc/arr.length;
//     return `The average is ${average}`;
// }
// let array = [11, 3, 45, 13, 22];
// let finRes = arrayAverage(array);
// console.log(finRes);

// const isEven = (number) => {
//     if (number % 2 === 0){
//         return `The number is Even`;
//     }else {
//         return `The number is NOT even`;
//     }
// };
// let num = 33;
// let finRes = isEven(num);
// console.log(finRes);

// const object = {
//     message : 'Hello World!',
    
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);

// let length = 4;

// function callback(){
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback, 1, 2);

// const sqNSum = ((array) => {
//     const initVal = 0;
//     const value = array.map((x) => x ** 2);
//     const finValue = value.reduce((accumulator, currentValue) => accumulator + currentValue, initVal);
//     const average = finValue / array.length;
//     return average;
// })
// let arr = [1, 3, 4, 2, 5];
// let finRes = sqNSum(arr);
// console.log(`The average after a combine operation of square and sum is ${finRes}`);

// const eleFive = (array) => {
//     const finalArray = array.map((x) => x + 5);
//     return finalArray;
// }
// let arr = [33, 5, 3, 1, 6, 8];
// let finRes = eleFive(arr);
// console.log(`The operated array is ${finRes}`);

// const upperArray = (array) => {
//     const  opArr = array.map((x) => x.toUpperCase());
//     return opArr;
// }
// let arr = ["Narayan", "adarsh", "ShriRam", "JanakiMaa"];
// let finRes = upperArray(arr);
// console.log(`The operated array is ${finRes}`);

// const object1 = {
//     "key1" : "value1",
//     "key12" : "value12",
//     "key13" : "value13",
//     "key14" : "value14",
//     "key15" : "value15",
// };

// const object2 = {
//     "key2" : "value2",
//     "key22" : "value22",
//     "key23" : "value23",
//     "key24" : "value24",
//     "key25" : "value25",
// };

// function returnObj (...args) {
//     return Object.assign({}, object1, object2);
// }
// let finRes = returnObj();
// console.log(finRes);

// function doubleAndReturnArgs (array, ...args) {
//     const doubleArray = array.map((z) => z * 2);
//     const doubleArgs = args.map((x) => x * 2);
//     const combinedArray = [...doubleArray,...doubleArgs];
//     return combinedArray;
// }
// let arr = [1, 2, 4, 5, 7];
// let argument = [2, 4, 5];
// const finRes = doubleAndReturnArgs(arr,...argument);
// console.log(finRes);

// const student = {
//     fullName : "Adarsh Singh Tomar",
//     age : 22,
//     residence : "Gwalior",
//     collectiveRes() {
//         console.log(`The age and residence of the ${student} is ${student.age},${student.residence}`);
//     }
// }

// const anotherStudent = {
//     fullName : "Raghupati Raghav Raja Ram",
//     age : "22",
//     residence : "Ayodhya",
// }

// anotherStudent.__proto__ = student;

// let fortuner = new ClassCar {
//     start = () => {
//         console.log("start");
//     }

//     stop = () => {
//         console.log("stop");
//     }
// }

// class CarClass {
//     start = () => {
//         console.log("start")
//     }
//     stop = () => {
//         console.log("stop")
//     }
// }

// let innova = new CarClass;

// class BikeClass extends CarClass{
//     kickStart = () => {
//         console.log("kickstart");
//     }
// }

// let object = new BikeClass;

// class User {
//     name = "Adarsh";
//     email = "tomaradarsh18@gmail.com";
//     viewData() {
//         console.log("User is viewing website's data :)");
//     }
// }

// let user1 = new User();

// class Admin extends User {
//     editData() {
//         console.log("the admin can overrides the data entries by the users")
//     }
// }

// let admin1 = new Admin();

// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("the data is being viewed");
//     }
// }

// let obj = new User("Adarsh", "tomaradarsh18@gmail.com");

// class Admin extends User {
//     editData() {
//         console.log("admin is in the control")
//     }
// }

// let adminObj = new Admin();
// let arr = [3, 9, 2, 0, -1, 6];
// let arrRes = arr.sort();
// console.log(arrRes);

var username = "Narayan"

function one() {
    const username = "Hari";
    function two(){
        const Hari = "Shri"
        console.log(username);
    }
    // console.log(Hari);
    two();
}
one();