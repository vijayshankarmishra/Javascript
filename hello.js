// console.log("My name is vijay.")

// ****** Use of this ******************

// const user={
//     userName: "hitesh",
//     price: 777,
    
//     welcomMessage: function(){
//         console.log(`${this.userName}, welcome to the website`);
//     }
// }


// ******** datatype conversion **********
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false


// const bigNumber = 4202142013535434354n

// console.log(typeof bigNumber) // bigInt

// const myHeros = ['dad','Brother','uncle']
// console.log(typeof myHeros); // Object

// let myObj = {
//     name: "Vijay",
//     age: 24,
//     gender: "male"
// }
// console.log(typeof myObj); // Object

// const myFunction = function(){
//     console.log('Hello World!');
// }
// console.log(typeof myFunction); // function

// // *********************************** Strings in Javascript *************************************
// const name = "Vijay"
// const age = 24
// console.log(`Hello my is ${name} and I am ${age} years old`); // Standard way of writting.......

// const gameName = new String("vijaymishra")

// // console.log(gameName[0]); // v
// // console.log(gameName.__proto__); // {}

// // console.log(gameName.length); // 11
// // console.log(gameName.toUpperCase()); //VIJAYMISHRA
// // console.log(gameName.charAt(2)); //j
// // console.log(gameName.indexOf('m')); //5

// const newString = gameName.substring(0,5)
// console.log(newString); //vijay

// const anotherString = gameName.slice(-8,7)
// console.log(anotherString); //aymi




// // *********************************** Numbers in Javascript *************************************

// const score = 400;
// console.log(score); // 400

// const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.89654
// console.log(otherNumber.toPrecision(4)); // 123.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// 10,00,000


// // *********************************** Maths in Javascript ************************************* 

// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.min(2,4,6,8)); // 2
// console.log(Math.max(2,4,6,8)); // 8

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// Dice roll equation.....
// const min = 1
// const max = 6

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)



// // *********************************** Dates in Javascript ************************************* 

// let myDate = new Date();
// console.log(myDate.toString()); //Tue Apr 02 2024 18:10:08 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Tue Apr 02 2024
// console.log(myDate.toLocaleDateString()); //2/4/2024
// console.log(myDate.toLocaleString()); //2/4/2024, 6:10:08 pm
// console.log(myDate.toJSON()); //2024-04-02T12:40:08.852Z
// console.log(myDate.toTimeString()); //18:10:08 GMT+0530 (India Standard Time)
// console.log(myDate.getTimezoneOffset()); //-330
// console.log(typeof myDate); //object

// We can create our own date
// let createMyDate = new Date(2023, 0 , 23)
// console.log(createMyDate.toDateString()); //Mon Jan 23 2023


// let createMyDate = new Date(2023, 0 , 23, 5, 3); // Here Month will start with 0=> Januray
// console.log(createMyDate.toLocaleString()); //23/1/2023, 5:03:00 am


// let createMyDate = new Date("2024-01-14"); //Here we have to give the format of ("YYYY-MM-DD") & MM will start with 01=> Januaray
// console.log(createMyDate.toLocaleString()); // 14/1/2024, 5:30:00 am


// let createMyDate = new Date("2024-01-14");
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //Gives milisecond from 1st jan 1970 UTC
// console.log(createMyDate.getTime()); // Gives milisecond till the date& time which we give
// console.log(Math.floor(Date.now()/1000)); // convert current time in seconds from 1st jan 1970...


// To modify the .toLocaleString so we can get the date or day as we want............
// let myFormatDate = new Date();

// console.log(myFormatDate.toLocaleString('default',{
//     weekday: "long",
// })); // Tuesday




// // *********************************** Array in Javascript ************************************* 

// Declaration of Arrays 
const myArr = [0, 4, 3, 1, 2, 5]
// const myHeros = ["father", "Brother"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2); // Array(4) : 0:1, 1:2, 2:3, 3:4 length:4

// console.log(myArr[1]); // 4

//  ********** Array Methods *******************

// myArr.push(6) // Insert the given element at last in array
// myArr.push(7); // Insert the given element at last in array
// myArr.pop(); // Remove the last element of the array...

// myArr.unshift(8); // Insert the given Elemnt in the start of the Array....
// myArr.shift(); // Remove the first element of the given Array......

// console.log(myArr.includes(9)); // Just check weather that elementt is present in thearray or not....
// console.log(myArr.indexOf(3)); // Gives the index of the Element...

// const newArr = myArr.join() // Join the elements of thearray and convert into a string format datatype => String
// console.log(newArr); // 0,4,3,1,2,5

// console.log(typeof myArr);// Type of Array is alway a Object

//              ***************** slice & splice *******************

// console.log("A ", myArr); // A  [ 0, 4, 3, 1, 2, 5 ]

// const myArr1 = myArr.slice(1,3)
// console.log(myArr1) // [ 4, 3 ]
// console.log("B ", myArr) // B  [ 0, 4, 3, 1, 2, 5 ]

// const myArr3 = myArr.splice(1,3)
// console.log(myArr3) // [ 4, 3, 1 ]
// console.log("C ", myArr); // C  [ 0, 2, 5 ]

// console.log(myArr); // [ 0, 2, 5 ]

/*       **********************************************************************

        => Difference between slice and splice
    1. slice(a,b) doesn't consider the last value(b) given, meanwhile splice(c,d) does consider the last value(d) given...
    2. sliece doest not affect the orignal array meanwhile splice makes the changes in orignal array.......

        ****************************************************************************
*/

// console.log(myArr);

// const marvel_heros = ["ironMan", "Thor", "spiderMan"]
// const dc_heroes = ["siperMan", "Joker", "BatMan"]

// // marvel_heros.push(dc_heroes)
// // console.log(marvel_heros); // [ 'ironMan', 'Thor', 'spiderMan', [ 'siperMan', 'Joker', 'BatMan' ] ]

// const all_heroes_concat = marvel_heros.concat(dc_heroes);
// console.log(all_heroes_concat); //[ 'ironMan', 'Thor', 'spiderMan', 'siperMan', 'Joker', 'BatMan' ]

// Spread opreators
// const all_heroes = [...marvel_heros, ...dc_heroes]
// console.log(all_heroes); // [ 'ironMan', 'Thor', 'spiderMan', 'siperMan', 'Joker', 'BatMan' ]

// array.flat =>

const anotherArray = [1,2,3,[4,5,6], 7,{key: "value"}, [6,7, [4,5]]]
const real_anotherArray = anotherArray.flat(Infinity)
// console.log(real_anotherArray); //(12) [1, 2, 3, 4, 5, 6, 7, {…}, 6, 7, 4, 5]


// console.log(Array.isArray("Vijay")); // false, since the input is a String.....
// console.log(Array.isArray(["Vijay"])); // true

// console.log(Array.from("Vijay")); // [ 'V', 'i', 'j', 'a', 'y' ]
// console.log(Array.from({name : "Vijay"})); // [] , it gives an empty array since wehave not defined what we have to convert keys or value.....

const score1 = 100
const score2 = 200
const score3 = 300
// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]



// ******************************************* OBJECTS *******************************************************************************

//  There aretwo way to create an object one is with constructor => singleton, Another one is without constructor => literals

// //////////////////////////////////
//1.  singleton 
 const tinderUser = new Object()

    tinderUser.id = "Abc123"
    tinderUser.name = "Vijay"
    tinderUser.IsLoggedIn = false
    tinderUser.age = 24

    // console.log(tinderUser);


const regualarUSer = {
    email: "someemail@google.com",
    fullname: {
        userFullName : {
            userFirstNAme : "Vijayshankar",
            userLAstNAme : "Mishra"
        }
    }
}

// console.log(regualarUSer.fullname.userFullName.userFirstNAme);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3a = Object.assign(obj1,obj2)
// console.log(obj3a); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3b = Object.assign({},obj1,obj2)
// console.log(obj3b); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3c = {...obj1, ...obj2}
// console.log(obj3c); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
    

// console.log(tinderUser); //{ id: 'Abc123', name: 'Vijay', IsLoggedIn: false, age: 24 }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'IsLoggedIn', 'age' ]
// console.log(Object.values(tinderUser)); // [ 'Abc123', 'Vijay', false, 24 ]
// console.log(Object.entries(tinderUser)); // 

/*
    [
        [ 'id', 'Abc123' ],
        [ 'name', 'Vijay' ],
        [ 'IsLoggedIn', false ],
        [ 'age', 24 ]
    ]
*/

// console.log(tinderUser.hasOwnProperty("IsLoggedIn")); // true

// ///////////////////////////////////

//2.  Object Literals
// const tinderUSer = {}

const mySym = Symbol("key1")

const JsUSer = {
    name : "Vijay",
    "full name": "Vijay Mishra",
    [mySym] : "myKey1",
    age: 24,
    isLoggedIn: false,
    location: "Mumbai",
    email: "vijaymishar@gmail.com",
    lastLoggedIn: ["Monday", "Tuesday"]

}

// There are two ways to access the elements of Object
// 1.
// console.log(JsUSer.email); // vijaymishar@gmail.com
// 2.
// console.log(JsUSer["email"]); // vijaymishar@gmail.com

//  Use of seccond way
// console.log(JsUSer["full name"]); // Vijay Mishra

// For symbol how we have to do? .....
// first define a symbol at 296th line / before defining the object JSUser
// add the key mySym in the object and give a value to it....
// console.log(JsUSer[mySym]); //myKey1

// Change the value in the object
// JsUSer.email = "vijayshankar@google.com"

// To Lock theObject from changing 
// Object.freeze(JsUSer)
// JsUSer.email = "vijayshankar@microsoft.com"
// console.log(JsUSer); // 
    /*
    {
    name: 'Vijay',
    'full name': 'Vijay Mishra',
    age: 24,
    isLoggedIn: false,
    location: 'Mumbai',
    email: 'vijayshankar@google.com',
    lastLoggedIn: [ 'Monday', 'Tuesday' ],
    [Symbol(key1)]: 'myKey1'
  }
    */


// ******************************* JS interview Question ***********************************

const Obj = {
    "1" : "a",
    1: "b",
    [1]: "c"
}

// console.log(Obj["1"]); // c 

/* 
The correct output of the code snippet would be "c".

In JavaScript, object keys are always converted to strings. In this case, the property names are evaluated as follows:

The first property, "1" : "a", is a string key and its value is "a".
The second property, 1: "b", is a numeric key and its value is "b". However, since keys are converted to strings, this property is actually equivalent to "1": "b".
The third property, [1]: "c", is an expression as the key. The expression [1] evaluates to the value 1, which is then converted to the string "1". So, this property is equivalent to "1": "c".

When you try to access Obj["1"], it refers to the property with the key "1" in the Obj object. In this case, the property "1" : "c" matches the key, so the value "c" is returned.

Therefore, the correct output would be "c".
*/

// *****************

const Obj1 = {
    
    1: "b",
    ["1"] : "d",
    [1]: "c",
    "1" : "a",
    
}
// console.log(Obj1["1"]); // a


// *****************


//  ********************* Destructuring of Objects ********************************

const course = {
    courseName: "java script",
    price: 999,
    courseInstructor : "Vijay"
}

// console.log(course.courseInstructor); // Normal way to getting the data but supposeI have to usethis data many times then Destructuring comes into the picture.....

const {courseInstructor} = course // By this we have removed key and value pair of courseInstructor from theobject courseand now we can useit anywhere we want 
// console.log(`Hi I am ${courseInstructor}, I am your course Instuctor`); // Hi I am Vijay, I am your course Instuctor

const {courseInstructor : Instructor} = course // We can change the name after destructuring and write our own name.....
// console.log(`Hi I am ${Instructor}, I am your course Instuctor`); // Hi I am Vijay, I am your course Instuctor


// JSON
// {
//     name: "Vijay";
//     coursename : "JAvascript"
// }

//   ************************** Function in Objects ************************************

JsUSer.greeting = function(){
    console.log("Hello JS USer"); //Hello JS USer
}

// JsUSer.greeting();

// console.log(JsUSer.greeting); // [Function (anonymous)]
// console.log(JsUSer.greeting()); // Undefined

JsUSer.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`); // Hello Js user, Vijay
}

// JsUSer.greetingTwo();

// console.log(JsUSer.greetingTwo); // [Function (anonymous)]
// console.log(JsUSer.greetingTwo()); // Undefined





// **************************** Functions **********************************

// Function  is nothing but a bunch of task packed in a package and it is used if we haveto repeat the things in future....

// for  example we have to print seprate letters of my Name "V", "I", "J", "A", "Y" 
//5 times so we have to write 25 times console to get the result but with Functions wecan write in very much less lines...

function printMyName(){
    console.log("V");
    console.log("I");
    console.log("J");
    console.log("J");
    console.log("Y");
}

// To call a  function we have to give the Refrence[.ie. nameof the function] and symbol of exectue["()"].....
// printMyName()  //"V", "I", "J", "A", "Y" 

function addTwoNumbers(number1, number2, number3){   // when wedefine a function then wegive parameters and when we call the function the we give arguments
    console.log(number1 + number2);
}

// addTwoNumbers(3,4)
// let we store our function in a const and console the value of that const
// const result = addTwoNumbers(3,4) //7
// console.log("Result: ",result); // Result:  undefined ,  Since we can not store the data of a function we can only return the result from the function

function addTwoNumbers(number1, number2,number3){
    
    let result = number1 + number2
    return result
    console.log("Vijay"); // this line will never gets execute since it is written after return 
}

// console.log(addTwoNumbers(3,5));

// const result = addTwoNumbers(2,5)
// console.log("Result: ", result); // Result:  7 , Here we got the result as we have return the result in function.....

// function logginUserMessage(username){
    
//     return `${username} is logged in`
// }

// logginUserMessage("Vijay")// this will not print anything.....
// console.log(logginUserMessage("Vijay")); // Vijay is logged in
// console.log(logginUserMessage()); // undefined is logged in , since we have not given any value so for that wehaveto check the value first

function logginUserMessage(username){
    
    if (username === undefined){    // It can be written as if(!username)
        console.log(`Please Enter the name in argument`);
    }
    else return console.log(`${username} is logged in`);
}
// console.log(logginUserMessage("Vijay")); // Vijay is logged in
// logginUserMessage();
// logginUserMessage("Vijay");

//  There can be a case where we give username in parameters then it will never go inside If condition...

function logginUserMessageNew(username = "Raj"){
    
    if (username === undefined){    // It can be written as if(!username)
        console.log(`Please Enter the name in argument`);
        return
    }
    
    return console.log(`${username} is logged in`);
}

// logginUserMessageNew("Vijay") //Vijay is logged in
// logginUserMessageNew() //Raj is logged in

// ****** Shoping Cart items list *********

function addItemToCart(...num){  // Here we have added "..."(Rest Opreator) before a parameter so that will make all the inputs in a array
    return num
}

// console.log(addItemToCart(20, 30, 40, 50)); //[ 20, 30, 40, 50 ]

function addItemToCarts(num1, num2, ...num){  
    console.log(num1);
    console.log(num2);
    return num
}

// console.log(addItemToCarts(20, 30, 40, 50, 60, 70)); //[ 40, 50, 60, 70 ] , here 20 and 30 has been assigned to num1 and num2......

//  ****** Handiling Objects in Function **********

//  Pre- defining objects

const Users ={
    userNAme : "Vijay",
    price : 499
}

function handleObject(anyUser){
    
    console.log(`UserName is ${anyUser.userNAme} and price is ${anyUser.price}.`); 
}

// handleObject(Users) // UserName is Vijay and price is 499.

// Post-defining Objects 

function handleAnotherObject(anyObject){
    console.log(`My Username is ${anyObject.username} and the price I payed for the course is ${anyObject.price}.`);
}

// handleAnotherObject({
    //     username : "Vijay",
    //     price: 599
    // }) // My Username is Vijay and the price I payed for the course is 599.
    
    
    //  ****** Handiling Array in Function **********
    
    //  Pre- defining Arrays
    
    const myArray = [20, 30, 40, 50, 60, 70]
    
    function returnSecondValueAraay(anyArray){
        return console.log(`Second Value is ${anyArray[1]}`);
    }
    
    // returnSecondValueAraay(myArray) //Second Value is 30
    
    // Post-defining Arrays 

    function returnSecondValueInAraay(anyArray){
        return console.log(`Second Value is ${anyArray[1]}`);
    }

    // returnSecondValueInAraay([200, 300, 400, 500, 600, 700]) //Second Value is 300


    //  Scopes in Nested Function
    // Scope: Scope is boundary for anything(function, if-else, for, while, do-while, etc) inside "{}" except Objects.....
    // There are two types of scope - Global & Local........
    
    function One(){
        const username = "Vijay"
        
        function Two(){
            const website = "YouTube"
            console.log(username);
        }
        // console.log(website); // This Line will give an error since function One is a Parent function of Function Two ..
        //...so Parent can't access the things of child but a child can access the things of parent
        
        Two()
    }

    // One() //Vijay
    
    
    //  Scopes in Nested IF
    
    if(true){
        const username = "Vijayshankar"
        if(username === "Vijayshankar") {
            const website = " YouTube"
            // console.log(username + website); //Vijayshankar YouTube
        }
        // console.log(website); // This will gave error since trying to access child things
    }
    // console.log(usrename); // This will give error since trying to access things outside scope




    //  *********** MINI Hoisting Intresting *****************

    //  here we will try two ways to declare function 

    // 1. Normal Way

    // addOne(5) // calling before we write a function....
    function addOne(num){
        return num + 1
    }

    // addOne(5) // It will not give any error if we call the function before writting the function or calling after the function...

    //  2. Expression Way ==> Here we declare a Function and store it inside a const/var/let

        //  Here it matters where call the function before writting or after writting the function 
        // If we write before it will give an error, If we write after it will work Fine

    // addTwo(5) // It wil give an error => Cannot access 'addTwo' before initialization

    const addTwo = function(num){
        return num + 2
    }

    // console.log(addTwo(5)); // 7\


    // ************ this in JS ******************

    // this keyword always refers to the current context inside the Object it will not work in arrow functions and doesn't give the output in function which we want........
    const user = {
        username : "Vijayshankar",
        price : 999,

        welcomeMessage : function(){
            console.log(`${this.username}, Welcome to the Website.`); // Vijayshankar, Welcome to the Website.
            // console.log(this); // =>
                                         /*
                                         {
                                            username: 'Vijayshankar',
                                            price: 999,
                                            welcomeMessage: [Function: welcomeMessage]
                                          } 
                                          */
        }
    }

    // user.welcomeMessage()

    // After changing the username in the Object User
    // user.username = "Abhishek"
    // user.welcomeMessage() => 
                                /* 
                                    Abhishek, Welcome to the Website.
                                    {
                                        username: 'Abhishek',
                                        price: 999,
                                        welcomeMessage: [Function: welcomeMessage]
                                    }
                                */

//  Lets see what comes in the entire Global this
// console.log(this); // {}

// ******** this in Functions ***********

function chai1(){
    console.log(this);
}

// chai1() // This will return a various things which wedon't want now 

function chai2(){
    const username = "Vijayshankar"
    console.log(this);
}
// chai2() // This will give samevalue as above function with nothing helpfull........


// ******** this in arrow functions ***********
// const chai = function(){
//     let username = "Vijayshankar"
//     console.log(this.username);
// }
// chai() // undefined , Since this doesn't give the correct ans or it doen't work with functions....

const chai = () => {
    let username = "Vijayshankar"
    console.log(this.username);
}
// chai() // undefined, since this doesn't work with arrow functions....

// ************ Explicitly using return ******************

const addTwos = (num1, num2) => { // whenever we use this currly brackets in a function we have to give a return word
    return num1 + num2
}
// console.log(addTwos(3,4)); // 7


// const addTwo2 = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)
// console.log(addTwo2(5,4)); // 9



// *********** Immediately Invoked Function Expressions (IIFE) **************************

// It is used beacuse
    // 1. Sometimes Global Scope pollution has some effect on the functions so to tackle that pollution of variables from Gloabl in that function we use IIFE......
    // 2. Function Should Immediately execute......

// function chainew(){
//     console.log(`DB Connected..`);
// }
// chainew()

// (function chainew(){  // This is also called Named IIFE......
//     console.log(`DB Connected..`);
// })();  // here ";" is must important to apply or to end the IIFE effect



// // ******** IIFE in arrow functions **********
// ( () => {
//       return   console.log(`DB Connected Two`);
//     })();
    
    
    // // ******** IIFE in arrow functions with parametrs **********

    // ((name) => {
    //     console.log(`Connected to DB with ${name}`);
    // }) ("Vijayshankar");


//  ******** If Statemnet in JS ****************

if (true){
    // Whatever condition is written here will apply...
}

// Below is one way we can write the if statemnet but generally we don't do that way as it is not a good way of writing,,,
// if (true) console.log(`Whateber we want to print`),console.log(`print the second statement`); 


//  ******** Switch Statemnet in JS ****************

// const month = "march"

// switch (month) {
//     case "jan":
//          console.log(`Janauary`);
//         break;
//     case "feb":
//          console.log(`febraury`);
//         break;
//     case "march":
//          console.log(`march`);
//         break;
//     case "april":
//          console.log(`april`);
//         break;
//     case "may":
//          console.log(`may`);
//         break;

//     default:
//         break;
// }


//  ****************** Truthy / Falsy **********************

//  **** Truthy ******
// Here as we can see below userEmail has a string value therefore when we use it in if condition 
// It will assume it as true withouth comapring or measuring it to something.....

// const userEmail = "v@shankar.com"

// if(userEmail){
//     console.log(`got the email`);
// }else{
//     console.log(`did not receive email`);
// }


//  **** Falsy ******
// Here as we can see below userEmail has an Empty string value therefore when we use it in if condition 
// It will assume it as false withouth comapring or measuring it to something.....

// const userSecondEmail = ""

// if(userSecondEmail){
//     console.log(`got the email`);
// }else{
//     console.log(`did not receive email`);
// }

// List of Truthy and Falsy values...........

// falsy => false, 0 , -0, BigInt(`since it is written as 0n`), "", null, undefined, NaN

// Truthy => [], "0", "false", " ", {}, function(){}



//  How to check weather the array is empty or not 

// const emptyArray = []

// if(emptyArray.length === 0){
//     console.log(`Array is Empty`);
// }




//  How to check weather the Object is empty or not 

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log(`Object is Empty`);
// }




//  *************** Nullish Coalescing Operator(??) : it is used for null and undefined  *****************************

//  Suppose we are returning something from DB and if the value which we want is not coming/reciving(giving null/undefined)
//  and the whole program or next part is dependent on that value so in that case we will use this operator(??) so that 
// the program will run smothly without any unwanted errors, It takes the first value which it see's after null/undefined 

// let val1;
// val1 = 5 ?? 10 
// console.log(val1); // 5

// val1 = null ?? 10 
// console.log(val1); // 10

// val1 = undefined ?? 10 
// console.log(val1); // 10

// val1 = null?? 20 ?? 10 
// console.log(val1); // 20


//  ************************************** Ternary Operator *********************************************

//  condition ? true : false

const iphonePrice = 1000

// iphonePrice >=800 ? console.log(`Price is greater than 800`): console.log(`Price is  less than 800`);



//   ****************************     For       ************************************************

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log(`${element} is the best Number`);
//     }
//     console.log(element);
// } 

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10 ; j++) {
        // console.log(`Inner loop value: ${i}`); // it will give  LOOP of 0- 10 10 times....
        // console.log(`${i} * ${j} = ${i*j}`); // To write tables 0 to 10......
    } 
}

const myArray1 = ["Flash", "Batman", "Superman"]
for (let i = 0; i < myArray1.length; i++) {
    const element = myArray1[i];
    // console.log(element);
}

// To check the even Numbers in an given array....

// let myEmptyArrayBe = [3,4,5,6,8,10]

// function checkEvenNumbersINArray(array){
//     let emptyArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2 === 0) {
//             emptyArray.push(array[i])
//         }
        
//     }
//     return emptyArray
// }

// console.log(checkEvenNumbersINArray(myEmptyArrayBe))

//  ****************** Break & Continue *****************************

// Break
    
// It will break the loop and will go out of parent scope as soon as it detects the word break............

    for (let i = 0; i <=6; i++) {
        if(i == 3 ){
           // console.log(`Detected the value 3`);
            break
        }
        //console.log(`Value of i is ${i}`);
    }

    /* 
        Value of i is 0
        Value of i is 1
        Value of i is 2
        Detected the value 3
    */


// It will skip the iteration of that particular ith value for which the condition is true and will continue with next index as soon as it detects the word continue............

    for (let i = 0; i <=6; i++) {
        if(i == 3 ){
            // console.log(`Detected the value 3`);
            continue
        }
        // console.log(`Value of i is ${i}`);
    }

    /* 
        Value of i is 0
        Value of i is 1
        Value of i is 2
        Detected the value 3
        Value of i is 4
        Value of i is 5
        Value of i is 6
    */

//  *************************** While Loop ***********************************

let index = 0 
while (index <= 10) {
    // console.log(`Value is ${index}`);
    index = index + 2
}

let myArrayOfHeroes = ["Flash", "batman", "Superman"]

let arr = 0
while (arr < myArrayOfHeroes.length) {
    // console.log(`${myArrayOfHeroes[arr]}`);
    arr = arr +1
}


//  *************************** do While Loop ***********************************

let score = 0

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);



//  ***************** For of Loop *****************************

// This is  looping method which is ud=sed to loop through arrays mainly 
// Here the statement works like....... for ( const iterator[`like {i} in Normal for loop`] of array[Name of the array on which we have to work...])

let arrForOF = [1,2,3,4,5]

for (const num of arrForOF) {
    // console.log(`${num}`);
}

let greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " "){
        // console.log(`This is space!!!!!!`);
    }
    // console.log(`Each charachter of greetings: ${greet}`);
}


//  ******************* Map *******************************
//  Maps is like objects only which have key value pair, but in MAP we cannot put dublicate key it will not allow to store it

const map = new Map() // Declaration of a constant to change it into map as we does for Objects 

map.set('IN', "India_1")
map.set('IN', "India_2")
map.set('IND', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")

// console.log(map);
/*
 Map(4) {
  'IN' => 'India_1',
  'IND' => 'India',
  'US' => 'United States',
  'UK' => 'United Kingdom'
   */


//  **************** For Of Loop in Map ***************
//  taking the above map example

for (const key of map) {
    // console.log(key);
}
//  this gives us a seprate array for seprate key and value pair but we want to keep it in a single array........
/* 
[ 'IN', 'India' ]
[ 'IND', 'India' ]
[ 'US', 'United States' ]
[ 'UK', 'United Kingdom' ]
*/

//  For keeping key value pair into One array in for of Loop

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
/* 
IN :- India
IND :- India
US :- United States
UK :- United Kingdom
*/

//  Lets try can we try this for of loop on Objects...

let myObjject = {
    "game1" : 'NFS',
    "game2" : "GTA",
    "game3" : "Mario"
}

// for (const [key, value] of myObjject) {
//     // console.log(key, ":-" ,value); // myObjject is not iterable, We have some different method to iterate object
// }

//  For Objects we use FOR In Loop

//  **************** For in Loop in Objects *****************

for (const key in myObjject) {
    // console.log(`${key}`);
    /* game1
    game2
    game3 
    */
}

for (const key in myObjject) {
    // console.log(`${myObjject[key]}`);
    /* NFS
    GTA
    Mario 
    */
}

//  To get both key and value pair in objects

for (const key in myObjject) {
    // console.log(`${key} has value of ${myObjject[key]}` );
    /* game1 has value of NFS
    game2 has value of GTA
    game3 has value of Mario
    */
}


//  **************** For in Loop in Arrays *****************

const programing = ["js", "py", "java", "rb"]

for (const key in programing) {
    // console.log(key);
    /* 0
       1
       2
       3 */
}

//  In Above For in loop we got the keys in the array which is the index of the elemnts and the values to get the values we use the below syntax........

for (const key in programing) {
    // console.log(`${programing[key]}`);
    /* js
       py
       java
       rb */
}

//  Lets try For in loop in Map 

const map1 = new Map() // Declaration of a constant to change it into map as we does for Objects 

map.set('IN', "India")
map.set('IND', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")

for (const key in map1) {
    // console.log(`${key} has value ${map1[key]}`); // It doesn't print any thing since for in loop is not itterable in MAP........
}


//  ****************************** For Each ******************************

// It is used to get each item in an array.......

const coding = ["js", "java", "python", "rubby", "cpp"]

// coding.forEach( function (item) {
//     console.log(`${item}`);
// } )

coding.forEach( (item) => {
    // console.log(item);
} )
/* js
java
python
rubby
cpp */


//  Another way of forEach

function PrintMeWithA(item){
    // console.log(`${item} with A`);
}

coding.forEach(PrintMeWithA) // ***Here we have given the refrence of the function and we have not called the function
/*
js with A
java with A
python with A
rubby with A
cpp with A
*/

//  ForEach has three things 1.item 2.index of item 3.array[Whole array] as shown below
coding.forEach( (item, index, array) => {
    // console.log(item, index, array);
} )
/*
js 0 [ 'js', 'java', 'python', 'rubby', 'cpp' ]
java 1 [ 'js', 'java', 'python', 'rubby', 'cpp' ]
python 2 [ 'js', 'java', 'python', 'rubby', 'cpp' ]
rubby 3 [ 'js', 'java', 'python', 'rubby', 'cpp' ]
cpp 4 [ 'js', 'java', 'python', 'rubby', 'cpp' ]
*/

// *********** Foreach in Array of Objects....... ********************

const myCoding = [
    {
        langName : "JavaScript",
        langFileName: "js"
    },
    {
        langName : "Java",
        langFileName: "java"
    },
    {
        langName : "Python",
        langFileName: "py"
    },
]

//  Foreach to get all the langFileName

myCoding.forEach( (item) => {
    // console.log(item.langFileName);
    
} )
/*
js
java
py
*/

//  ***************************** filters ***********************

// In forEach we are not able to do anything on single item so to do operation on selctive item or single item we have filter

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);
/*
js
java
python
rubby
cpp

undefined
*/
//  Here as we can see values is not able to store anything with forEach loop so we get undefined for that and to overcome this issue we use filter which can store the result........

const myNums = [1,2,3,4,5,6,7,8,9,10]

//  1st way
// const myNewNums = myNums.filter( (num) => (num > 4) )

// 2nd way
const myNewNums = myNums.filter( (num) => {
    return num > 4
} )
// console.log(myNewNums); //[ 5, 6, 7, 8, 9, 10 ]

// Same above reult with forEach Method

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

//  ************************************************************************************************************************************************
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  To get the specific book which has genre => history by filter method

const myBooks = books.filter((book) => (book.genre === "History"))

// console.log(myBooks);
/* 
[
  {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    }
]
*/

//  To get the specific book which has genre => history by forEach method

const mineBooks = []
books.forEach( (book) => {
    if (book.genre === "History") {
        mineBooks.push(book)
    }
} )
// console.log(mineBooks);
/* 
[
  {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    }
]
*/

//  To get the specific book which has publish after 1995 by filter method

const publishYear = books.filter ( (book) => (book.publish > 1995) )

// console.log(publishYear);
/*
[
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    }
]
*/

//  To get the specific book which has publish after 1995 and has genre => history by filter method

const publishYearSecond = books.filter ( (book) => {return book.publish > 1995 && book.genre === "History"}) 

// console.log(publishYearSecond);

/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/

// ************ arrow function using map, adding 10 to all the numbers in array **************

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map( (num) => (num + 10) )
// console.log(newNumbers); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


// same above thing with forEach loop 
const justNewNumber = []
myNumbers.forEach( (num) => {
    return justNewNumber.push(num + 10)
} )
// console.log(justNewNumber); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


//  *************** Chaning in JS ************************
// Here we can write as many map/filter method to the array itterate it with a new change as we want, below are some exapmles

const myNumbersChanning = [1,2,3,4,5,6,7,8,9,10]

const newNumbersChanning = myNumbersChanning
                                .map( (num) => (num *10) )
                                .map( (num) => (num +1) )

// console.log(newNumbersChanning); // [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 10 ]

// channing above thing with adding filter also

const newNumbersChanningWithFilter = myNumbersChanning
                                .map( (num) => (num *10) )
                                .map( (num) => (num +1) )
                                .filter( (num) => (num >= 41) )

// console.log(newNumbersChanningWithFilter); // [ 41, 51,  61, 71, 81, 91, 101 ]



//  *********************** Reduce ***************************************************************************

const reduceArray = [1,2,3,4]

const myTotal = reduceArray.reduce( (acc, curval) => {
        // console.log(`accumulator - acc : ${acc} and currentValue - curval : ${curval}`);
        return acc + curval
}, 0 )

// console.log(myTotal);
/* 
accumulator - acc : 0 and currentValue - curval : 1
accumulator - acc : 1 and currentValue - curval : 2
accumulator - acc : 3 and currentValue - curval : 3
accumulator - acc : 6 and currentValue - curval : 4
10
*/

// 

const shoppingCart = [
    {
        courseName: "js course" ,
        price : 2999
    },
    {
        courseName: "py course" ,
        price : 999
    },
    {
        courseName: "web dev course" ,
        price : 3999
    },
    {
        courseName: "android dev course" ,
        price : 4999
    },
]

const myCartValue = shoppingCart.reduce( (acc, item) => {
        // console.log(`InitialCount : ${acc} and after adding ${item.courseName} my initial count changed to,`);
        return acc + item.price
}, 0)

// console.log(myCartValue);
/*
InitialCount : 0 and after adding js course my initial count changed to,
InitialCount : 2999 and after adding py course my initial count changed to,
InitialCount : 3998 and after adding web dev course my initial count changed to,
InitialCount : 7997 and after adding android dev course my initial count changed to,
12996
*/


