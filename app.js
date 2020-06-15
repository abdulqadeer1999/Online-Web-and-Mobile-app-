// Chap 1 Task 1
// var a = ("welcome to My Website");
// alert(a);

// Task #2

// var a = ("Error! Please enter a valid password")
// alert(a)

// Task #3

// var a = ("Welcome to JS Land...\nHappy Coding!") 

// alert(a)

// Task #4

// var a = ("Welcome to JS Land...")
// var b = ("Happy Coding!","Prevent this page from creating additional dialogs")

// alert(a)
// alert(b)

// Task # 5

// var a = ("Hello... I can run JS through my web browser's console")
// console.log(a)



//  Chap # 2


//1- 

var username

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myName = "Abdul Qadeer"

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

        // 3(A)
var message

//3(B)

 message = "Hello World"


//3(c)

alert(message)


// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.


var name = "Jhone Doe"
var age = "15 years old"
var certificate = " Certified Mobile Application Development"

alert(name)
alert(age)
alert(certificate)

// 5. Write a script to display the following alert using one JS
// variable:

var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(pizza)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "abdulqadeersolangi007@gmail.com"
alert("My email address is " + email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "“A smarter way to learn JavaScript”."
alert("I am trying to learning from the book" + book)

// 8. Write a script to display this in browser through JS

document.write(" Yah! I can write HTML content through JAVASCRIPT ")

// 9. Store following string in a variable and show in alert and
// browser through JS

alert("“ ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ”")

// Chap # 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 21
alert("I am "+age+"  years old")

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visits = 14
alert( "You have visited this site "+visits+" times.")

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 1999
document.write("My birth year is "+birthYear+" Data type of my declared variable is number ")

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


//a 
var visitor = "John Doe"
var product = "t-shirt"
var Quantity = 5

document.write(visitor+ "ordered "+ Quantity+"  "+ product+" on XYZ Clothing store")

// Chap # 4

//Q1 Declare 3 variables in one statement.

var a,b,c

// Q2 Declare 5 legal & 5 illegal variable names.

//legal
 var a
 var data
 var Data
 var a_1
 var firstName


 //illegal

//  var 1
//  var 1st_name
//  var &name
//  var %age 
//  var *multiply 

//  Q3 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


document.write(" <h1> Rules for naming JS variables </h1> <br/><br/> <p> A variable name can contain only letters, numbers, $, and _.For example $my_1stVariable <br/>Variables must begin with a letters,$ or _. For example $name, _name or name . Variable names are case sensitive. <br/> Variable names should not be JS keywords. <br/> </p>   ")


Chap # 5
/ 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a = 12
var b = 13
var c = a+b 
document.write("sum of "+a+" and "+b+" is "+c+"<br/>")

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

 c = a-b 
document.write("subraction of "+a+" and "+b+" is "+c+ "<br/>")

c = a*b 
document.write("multiplication of "+a+" and "+b+" is "+c+ "<br/>" )


c = a/b 
document.write("division of "+a+" and "+b+" is "+c+ "<br/>" )

c = a%b 
document.write(" modulus of "+a+" and "+b+" is "+c+ "<br/>" )

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var a 
document.write("Value after variable declaration is: " +a+ "</br>")
a = 5
document.write("Initial value: " +a+ "</br>")
a++
document.write("Value after increment is: " +a+ "</br>")
a= a+7
document.write("Value after addition is: " +a+ "</br>")
a--
document.write("Value after decrement is: " +a+ "</br>")
a = a%3
document.write("The remainder is: " +a+ "</br>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var a = 600
var total = a*5
document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR </br>")

// 5. Write a script to display multiplication table of any
// number in your browser.

document.write("<h2> Table of 4 </h2>")
document.write(
    "4 x 1 =" +4*1+ "<br/>" +
    "4 x 2 =" +4*2+ "<br/>" +
    "4 x 3 =" +4*3+ "<br/>" +
    "4 x 4 =" +4*4+ "<br/>" +
    "4 x 5 =" +4*5+ "<br/>" +
    "4 x 6 =" +4*6+ "<br/>" +
    "4 x 7 =" +4*7+ "<br/>" +
    "4 x 8 =" +4*8+ "<br/>" +
    "4 x 9 =" +4*9+ "<br/>" +
    "4 x 10 =" +4*10+ "<br/>"
)


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.

var c = 25
var f =(c* 9/5)+32
document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
var f = 70
var c =(f-32) * 5/9
document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var item1 = 650
var item2 = 100
var qtyitem1 = 3
var qtyitem2 = 7
var charges = 100
var total = item1*qtyitem1+item2*qtyitem2+charges

document.write(
    "<h1> Shopping Card </h1>"+
    "price of item 1 is "+item1+
    "<br/>Quantity of item 1 is "+qtyitem1+
    "<br/> Price of item 2 is "+item2+
    "<br/>Quantity of item 2 is "+qtyitem2+
    "<br/>Shipping Charges" +charges+
    "<br/> <br/> <br/>Total cost of your order is "+total

)


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980
var marksObtained = 804
var percentage = 804/980 *100

document.write(
    "<h1> Marks Sheet </h1>" +
    "Total marks :" +totalMarks+
    "<br/>Marks obtained :" +marksObtained+
    " <br/> Percentage :" +percentage

)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var dollar = 104.80 * 10
var sar = 28 * 25
var pkr = dollar+sar 

document.write("<h1> Currency in PKR </h1> Total Currency in PKR:" +pkr)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 1
num = ((num+5)*10)/2


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

var currentYear = 2020
var birthYear = 1992
var age = currentYear-birthYear
document.write("<h1>Age Calculator</h1>currentYear: "+currentYear+"</br>birthYear: "+birthYear+"</br>currentage"+age)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.



var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius * radius

document.write (
    "<h1>The Geometrizer </h1>"
    +"Radius of a circle :" +radius+
    "<br/> The circumference is : "+circumference+
    "<br/> The area is : "+area

)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

var snack = "chocolate chip"
var age = 15
var maxAge = 65
var amntPerDay = 3
var total = (maxAge -age)*amntPerDay

document.write(
    "<h1> The Life Time Calculator</h1>" +
    "Favourite Snack : "+snack+
    "<br/> Current age: " +age+
    "<br/> Estimated Maximum Age: "+maxAge+
    "<br/> Amount old snacks Per day: "+amntPerDay+
    "<br/> You will need: "+total+" "+snack+
    "to last you untill the ripe old age of" +maxAge

)

Chap 6 to 9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write(
    "Result: <br/> The value of a is:" +a+
    "<br/> ----------------"+

    "<br/><br/> The value of ++ a is:"+(++a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a++ is:"+(a++)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of  --a is:"+(--a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a-- is:"+(a--)+
         "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
        ) 


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

var a = 2
var b = 1
var result = --a - --b + ++b + b--;

document.write(" a is ="+a)
document.write("<br/> b is = "+b)
document.write("<br/> result is ="+result +"</br> </br>")

// 3. Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Enter your Name")
alert("Hello" +userName+" have a good day")

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = prompt("Enter a number for Table","5")
var a = Number(table);
var num = 1
document.write(
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"

)

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )



             Chap 9 to 11


             // 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter Your City Name")

if (city === "Karachi"| city === "Karachi"){
    alert("Welcome to city of lights")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender")
if  (gender === "Male"| gender ==="male"){
    alert("Good Morning Sir")
}

if  (gender === "Female"| gender ==="female"){
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

 var light = prompt("Enter Traffic SIgnal Light Color")
 if (light=== "Red"| light ==="red"){
     alert("Must Stop")
 }

 if (light=== "Yellow"| light ==="yellow"){
    alert("Ready to move")
}

if (light=== "Green"| light ==="green"){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car

var fuel = prompt("Enter Your Remaining Fuel Levl")
if (fuel === "0.25"){
    alert("Please refill the fuel in your car")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }





// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var totalMarks = 300;
var sub1 = prompt("Enter Your First Subject Marks")
var sub2 = prompt("Enter Your Second Subject Marks")
var sub3 = prompt("Enter Your Third Subject Marks")
var sub1Marks = Number(sub1)
var sub2Marks = Number(sub2)
var sub3Marks = Number(sub3)
var markObtained = sub1Marks+sub2Marks+sub3Marks
var percentage = markObtained/totalMarks*100

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

if (percentage >= 60){
    grade = "B";
    remarks = "You Need to improve";
}
if (percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks sheet</h1>"+
    "<br/>Total Marks :"+totalMarks+
    "<br/>Marks Obtained :"+markObtained+
    "<br/>Percentage :"+percentage+"%"+
    "<br/>Grade :"+grade+
    "<br/>Remarks :"+remarks

)

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var number = 10
var userInput = +prompt("Enter the number")
if (number==userInput){
    alert("BINGO! Correct Answer")
}

else if (userInput+1==number){
    alert("Close enough to the correct answer")
}

else{
    alert("You lost!")
}



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt("Enter a Number to check is divisible by 3")

if (num % 3 === 0){
    alert("Your Given Number is Divisible by 3")

}else {
    alert("Your Given Number is not Divisble by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = prompt("Enter a number: ")
if(num % 2 === 0){
    alert(num +" is a even number")
}else{
    alert(num +" is a odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("Enter the temperature")
var t = Number(temp)

if (t > 40){
    alert("It is too hot outside")
}

if (t > 30){
    alert("The weather today is Normal")
}

if (t > 20){
    alert("Today's weather is cool")
}

if (t > 10){
    alert("OMG! Today's weather is a cool")
}

// 11.
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var a = prompt("Enter First number")
var b = prompt("Enter Second number")
var operator = prompt("Enter an operator operation(+,-,*,/,%)")
var num1 = Number(a)
var num2 = Number(b)

if (operator === "+"){
    alert ("Your Ans is "+(num1+num2))
}

if (operator === "-"){
    alert ("Your Ans is "+(num1-num2))
}

if (operator === "*"){
    alert ("Your Ans is "+(num1*num2))
}

if (operator === "/"){
    alert ("Your Ans is "+(num1/num2))
}

if (operator === "%"){
    alert ("Your Ans is "+(num1%num2))
}


Chap 12 to 13

  
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("you have done something wrong")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var number1 = +prompt("Enter first Integar");
// var number2 = +prompt("Enter second Integar");
// if (number1> number2) {
//     alert(number1 + " is larger than" + number2)
// }
// else if (number1 < number2 ) {
//     alert(number2 + " is larger than" + number1)

// }
//  else alert(number1 + " and " + number2 + " are equal");



// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number");

//  if (number > 0 ) {
//     alert("The given number is Positive")

// }

// else if (number < 0 ) {
//     alert("The given number is Negative")

// }

// else alert( "The given number is zero");



// // 4. Write a program that takes a character (i.e. string of
// // length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter a character");
// if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//     alert("true")
// }
// else alert("false");



// // 5. Write a program that

// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise.
// var password = "abc123";
// var userPassword = prompt("Enter your password");
// if (userPassword === null || userPassword === ""){
//     alert("please enter your password");
// }

// else if (userPassword === password) {
//     alert("correct! the password you entered matches the original password");
// }

// else alert("incorrect password");


// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hour = 13;
// if (hour <18) {
//     greeting = "good day";
// }
// else greeting = "good evening";

// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 1900 = 7pm. Implement the
// // following case using if, else & else if statements


// var time = +prompt("what time is it?");
// if(time >= 0000 && time <1200){
//     alert("good morning");
// }
// else if(time >= 1200 && time <1700){
//     alert("good afternoon");
// }
// else if(time >= 1700 && time <1100){
//     alert("good evening");
// }
// else if(time >= 2100 && time <2359){
//     alert("good night");
// }

Chap 14 to 16

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var literalArray = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.


var objectArray = [];

// 3. Declare and initialize a strings array.

var stringArray = ["karachi", "lahore", "islamabad"];

// 4. Declare and initialize a numbers array.

var numberArray = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.

var booleanArray = [true,false];

// 6. Declare and initialize a mixed array.

var mixedArray = ["a",123,"true","karachi"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}


// 8.
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
}



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var color = ["Red","Yellow","Green"]
document.write(color+"<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color+"<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color+"<br/>");
color.shift()
document.write(color+"<br/>");
color.pop()
document.write(color+"<br/>");
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var score = [320,230,480,120]
document.write("Score of students :" +score+"<br/>");
score.sort()
document.write(" Ordered Score of students :" +score);

// 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["karachi","lahore","quetta","peshawar"];
document.write("cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("selected cities list: <br/>"+selectedCities)

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This","is","my","cat"]
document.write("array/; <br/>"+arr+"<br/>")
var join = arr.join(" ")
document.write("string: <br/>"+join) 

// 13.
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var phone = ["apple","samsung","motorla","nokia","sony & haier"]
document.write(
    "<select>"+
    "<option>"+phone[0]+"</option>"+
    "<option>"+phone[1]+"</option>"+
    "<option>"+phone[2]+"</option>"+
    "<option>"+phone[3]+"</option>"+
    "<option>"+phone[4]+"</option>"+
    "</select>"
)

Chap 17 to 20


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var num = [[],[],[]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:



num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")


// 3. Write a program to print numeric counting from 1 to 10.


for (var i = 1; i <= 10; i++){
    document.write(i+"<br/>")
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number  & length should be
// taken as an input from user.

var table = +prompt("Enter a number  to show its multiplication table");
var length = +prompt("Enter Multiplication table" );
document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
for(var i = 1; i <= length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br/>")
}
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var arr = fruits.length
for(var i = 0; i <arr; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <=15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var a = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min
)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}