var x = "Hello JavaScript!";
var y = "How are you?"

//String functions

x.indexOf("J");
x.lastIndexOf("a");
x.search("JavaScript");
x.slice(3,5); //slice(startIndex,endIndex) //negative indexes count from back
x.substring(3,5); //substring(startIndex, endIndex)
x.substr(3,5); //substr(startIndex, length)
x.replace("Hello","Hi");
x.toUpperCase();
x.toLowerCase();
x.concat(" ",y); //first parameter is separator
x.charAt(2);
x.charCodeAt(3);
x.split(""); //Convert string to array
x.trim();
x.trimLeft();
x.trimRight();
x.valueOf();
//String properties

x.length;
x.constructor;
x.prototype; //used to add methods to object

var xArray = x.split("");
var yArray = y.split("")
//Array functions
xArray.join(); //convert array to string
xArray.push(".");
xArray.pop();
xArray.shift(); //pop one element without returning
delete x[0]; //delete leaving a hole
xArray.splice(0,1,"a","b"); //x.splice(add elements at index, no.of elements to remove, elements to add)
xArray.sort();
xArray.reverse();
xArray.sort(function(a,b){return b-a});
xArray.concat(yArray);
xArray.slice(1,3); //end index not included


//Conversions

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 1     // returns "51"      because 1 is converted to "1"
"5" - 1     // returns 4         because "5" is converted to 5
1+undefined // returns NaN
1+NaN       // returns NaN
" " - " "   // returns NaN

var y = "hi";   // y is a string
var x = + y;      // x is a number (NaN)
Number(false);     // returns 0
Number(true);      // returns 1
Number("3.14");    // returns 3.14
Number(" ");       // returns 0
Number("");        // returns 0
Number("99 88");   // returns NaN
Number("1.1.1");   // returns NaN
Number("null");   // returns 0
Number("underfined");   // returns NaN
Number([]);         //returns 0
Number([12]);       //returns 12

false.toString();     // returns "false"
true.toString();      // returns "true"
[1,2,3].toString(); //returns 1,2,3

Boolean("");        //returns false
Boolean(NaN);   //returns false
Boolean(null);  //returns false
Boolean(undefined);     //returns false

{}.toString();  //[object Object]


//hoisting
var x = 5;
console.log(x+y); //prints NaN
var y=7;
