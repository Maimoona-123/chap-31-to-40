// Chap 31 to 34  ( DATE & TIME );


// Q-1

var date = new Date();
console.log (date);


// Q-2

var obj = new Date ().toString();
console.log (obj);


// Q-3

var date = new Date ();
var hours = date.getDay();

console.log (hours);


// Q-4

var d = new Date();
var day = d.getDay();
var dayName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

console.log ( dayName[d.getDay()]);


// Q-5


var currentDate = new Date() ;
var year = currentDate.getFullYear();
var day = currentDate.getDay();
var month = currentDate.getMonth();
var hours = currentDate.getHours();
var mint = currentDate.getMinutes();
var second = currentDate.getSeconds();
var millisec = currentDate.getMilliseconds();

console.log (currentDate);


// Q-6

var later = new Date(2020, 11, 31);
var laterAlt = new Date ("December 31, 2020");
console.log (later);
console.log (laterAlt);


// Q-7


var date = new Date(1992, 1, 2);
var dateAlt = new Date ("Febuary 2, 1992");
console.log (date);
console.log (dateAlt);


// Q-8

var milliseconds = new Date ('1980,0,1')-
new Date ('1970-01-01')
console.log (milliseconds);


// Q-9

var date = new Date ('2022-01-01') - date.setFullYear(2025);
console.log (date);

// Q-10

var date = new Date('2022-06-15')
console.log ("Original Date:", date);


// Q-11

var date = new Date ('2022-06-15');
var week = date.getDay();
console.log (week);


// Q-12

// var date = new Date();
// var newMint = prompt ("Enter new minutes (0-59):")
// date.setMinutes(newMint);

// console.log ("Updated Time:", date);


// Q-13

// var birthYear = +prompt ("Enter your Birthday");
// var date = new Date();
// var birth = new Date () (birth)
// var time = birth;
// var years = Math.floor();
// console.log ('your age is: $ {Calculate age(birthDate)} ');



// chap 35 to 37  (FUNCTIONS);



// Q-1

// function greet (){
//     alert ("Welcome Users...")
// }

// greet ();



// Q-2


function askName() {
    var ask = prompt("Enter name")
    var answer = ask
    alert ( answer );
  }
  
  askName();


// Q-3


function one(){
    console.log ("Hello");
}

function sec(){
    a = 4;
    b = 5;
    var add = (a+b)
    console.log (add)

}


function mainfunction (){
    one()
    sec()
}

mainfunction();


// Q-4

function display(){
    var enter = prompt ("Enter your name")
    alert (enter)
}

display();


// Q-5

function connect (a,b,c){
    return [a,b,c].join('')
}
console.log (connect ( true , " Maimoona ", 67 ))


// Q--6

function parameter (program1, program2){
    var result = program1 + program2
    return result;
}

var concenter = parameter (" messy " , " Houses ")
console.log (concenter);



// Q_7


function multiply (a,b,c){
    var multiply = a*b*c
    return multiply
}

console.log (multiply);



// Q-8

function sum (a,b){
    var mixture = a+b;
    return mixture;
}

var asdtg = sum (10,7);
console.log (asdtg);



// Chap 38  (LOCAL VS GLOBAL VARIABLES)

// Q_1

function demolocalvar (){
    var localvar = "I'm a local variable!";
    console.log (localvar);
}

demolocalvar();


// Q-2

var globalVar = "I'm a Global";

function acessGlobal (){
    console.log (globalVar);

}

acessGlobal();



// Chap 39 to 40 (SWITCH STATEMENT);

// Q-1



// var userInput = prompt("Enter your day of week");

// userInput = userInput.slice(0, 3).toLowerCase();

// switch (userInput) {
//   case "mon":
//     alert("Monday is working day..");
//     break;
//   case "tue":
//     alert("tuesday is working day");
//     break;

//   case "wed":
//     alert("Wednesday is working day");
//     break;

//   case "thu":
//     alert("thursday is working day");
//     break;

//   case "fri":
//     alert("friday is working day");
//     break;

//   case "sat":
//     alert("saturaday is weekend..");
//     break;

//   case "sun":
//     alert("sunday is family day");
//     break;

//   default:
//     alert(" Today is another day....");


// }


// Q-2

// var city = prompt ( "Enter your city name")

// switch (city){

//     case "Karachi":
//     alert("The city of lights")
//     break

//     case "new york":
//         alert ("You're in the big Apple!..")
//         break

//         case "london":
//         alert ("you're in British capital..")
     
// }



















