// Chap 21 t0 25
// Task # 01

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// fullName = firstName + lastName
// alert("You full name is" + [fullName])

// Task # 2

// var model = prompt("Enter your favorite mobile model")
// var charsInmodel = model.length
// alert(charsInmodel)

// Task # 3

// var text = "Pakistani"
// var a = text.indexOf("n") 
// document.write("Index of n is:", a)

// Task # 4

// var text = "Hello World"
// var a = text.indexOf("l")
// document.write("Last index of l is :", a)

// Task # 5

// var text = "Pakistnai"
// var a = text.charAt(3)
// document.write("Character at index 3:",a)

// Task # 6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// document.write("Welcome " + fullName + "!");


// Task # 7

// var a = "Hyderabad"
// var newText = a.replace("Hyderabad", "Islamabad")
// document.write("Text after replacement:" , newText)

// Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var text = message.replace (/and/g,"&")
// document.write(text)

// Task # 9

// var num = 472;
// document.write("Value: " + num.toString() + "<br>" + "Type: String" + "<br><br>");
// num = Number(num);
// document.write("Value: " + num + "<br>" + "Type: Number" + "<br><br>");


// Task # 10

// var a = prompt("Enter any value")
// var text = a.toUpperCase()
// document.write(text)


// Task # 11

// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>")
// var firstLetter = userInput.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = userInput.slice(1);
// otherLetters = otherLetters.toLocaleLowerCase();
// document.write("Title Case: " + firstLetter + otherLetters);
// Task # 12

// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var newNum = num.toString();
// document.write("Result: " + newNum.replace(".", ""));

// Task # 13

// var userName = prompt("Please Enter Your Username");
// userName = userName.split("");
// for (i = 0; i < userName.length; i++) {
//     if (userName[i] === String.fromCharCode(33) || userName[i] === String.fromCharCode(44) || userName[i] === String.fromCharCode(46) || userName[i] === String.fromCharCode(64)) {
//         alert("Please Enter Valid Username");
//     }else {
//         document.write("Correct");
//     }
// }
// Task # 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }


// Task # 15


// var password = prompt("Enter Your Password");
// if (password >= String.fromCharCode(65) || password <= String.fromCharCode(90) && password >= 0 || password <= 9) {
//     document.write(password);
// }

// Task # 16

// var university = "U\n n \n \n i\n v\n e\n r\n s\n i\n t\n y\n o\n f\n  K\n a\n r\n a\n c\n h\n i"
// var res = university.split()
// document.write(res)

// Task # 17

// var name = prompt("Ente an input")
// var res = name.charAt(name.length-1)
// console.log(res)

// Task # 18

// var text = "The quick brown fox jumps over the lazy dog"
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "the") {
//         console.log("found");
//         break;
//     }
// }

// Chap 26 to 30
// Task # 1

// var a = prompt("Enter a number")
// var round = Math.round(a)
// var round1 = Math.ceil(a)
// var round2 = Math.floor(a)
// console.log( round1,round2,round)

// Task # 2

// var num = prompt("Enter a negative floating point number")
// var float = num
// var float1 = Math.round(num)
// var float2 = Math.ceil(num)
// var float3 = Math.floor(num)
// console.log(float,float1,float2,float3)

// Task # 3

// var num = +prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// Task # 4

// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice) + "<br>");
// var dice1 = Math.random(dice) * 6;
// document.write("Random dice value: " + Math.ceil(dice1) + "<br>");
// var dice2 = Math.random(dice1) * 6;
// document.write("Random dice value: " + Math.ceil(dice2));


// Task # 5

// var headuser = prompt("Enter random coin value 1");
// var tailuser = prompt("Enter random coin value 2");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 0) {
//     alert("Heads" + random coin value 1 + "Tails")
// } else {

//     alert("Tails" + random coin value 2 + "Heads")
// }

// Task # 6

// var a = Math.floor(Math.random() * 101);
// console.log(a)

// Task # 7

// var a = prompt("Enter your weight ")
// var b = parseInt(a)
// console.log(b)

// Task # 8


// var a  = prompt("Enter a random number from 1 to 10")
// if (a ===10){
//     alert("Congrats")
// }else{
//     alert("Try Again !")
// }

// Chap 31 to 34

// Task # 1

// var a = new Date();
// document.write(a)

// Task # 2

// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfToday = monthNames[theMonth];
// alert("Current Month is " + nameOfToday)

// Task # 3

// var a = new Date();
// var n = a.getDay();
// alert(n)


// Task # 4

// var a = ["Saturday" , " Sunday"]
// if (a === "Saturday"){
//     alert("It is fun Day")
// }else if(a=== "Sunday"){
//     alert("It is fun Day")
// }else{
//     alert("Wrong")
// }

// Task # 5

// var month = prompt("Enter date of the month")
// if(month <=15){
//     alert("first fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// Task # 6

// var a = new Date()
// var b = new Date(value)
// var c = new Date(dateString)
// var d = new Date(year, month[ day[ hourminutes[, seconds[ milliseconds]]]]])
// console.log(d)    task rehyal ahin

// Task # 7
// var time = new Date();
// time = time.getHours();
// if (time < 12) {
//     alert("It's AM");
// }else {
//     alert("It's PM")
// }

// Task # 8

// var laterDate = new Date(2020, 11, 31, 00, 00, 00, 0)
// console.log("Later Date:" ,laterDate)

// Task # 9

// var ramadan = new Date("June 18, 2015");
// var ramadanMili = ramadan.getTime();
// var date = new Date();
// var dateMili = date.getTime();
// var dif = dateMili - ramadanMili;
// dif = dif / (1000*60*60*24);
// document.write(Math.floor(dif) + " days have passed since 1st Ramadan, 2015");

// Task # 10

// var begDate = new Date("Jan 01, 2015");
// var begDateMili = begDate.getTime();
// var refDate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On reference date " + refDate + ", <br>")
// var refDateMili = refDate.getTime();
// var dif = refDateMili - begDateMili;
// dif = dif / (1000*60);
// document.write(Math.ceil(dif) + " seconds has passed since beginning of 2015");


// Task # 11

// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var hour = new Date("Jun 18, 2020 11:30:00");
// document.write("1 hour ago, it was " + hour);

// Task # 12

// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var year = new Date("Jun 18, 1920 11:30:00");
// document.write("100 years back , it was " + year);


// Task # 13

// function getAge(DOB) {
//     var today = new Date();
//     var birthDate = new Date(DOB);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age = age - 1;
//     }

//     return age;
// }

// document.write(getAge("8/17/1999"));

// Task # 14

// document.write("<h1>K-Electric Bill</h1> <br>");
// var name = prompt("Enter your name");
// document.write("Costumer Name: " + "<strong>" + name + "</strong>" + "<br>")
// var month = "June";
// document.write("Month: " + "<strong>" + month + "</strong>" + "<br>");
// var numOfUnits = +prompt("Enter consumed units");
// document.write("Number of units: " + "<strong>" + numOfUnits + "</strong>" + "<br>");
// var charges = 16;
// document.write("Charges per unit: " + "<strong>" + charges + "</strong>" + "<br><br>");
// var netAmount = numOfUnits * charges;
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br>");
// var latePay = 350;
// document.write("Late Payment Surcharge: " + "<strong>" + latePay + "</strong>" + "<br>");
// var grossAmount = netAmount + latePay;
// document.write("Gross Amount Payable (after Due Date): " + "<strong>" + grossAmount + "</strong>");


// Chap # 35 to 38


// Task # 1

// function date() {
//     document.write(new Date());
// }
// date()

// Task # 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));




// Task # 3


// var sum;
// function greet(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// greet(+prompt("Enter first number"), +prompt("Enter second number"));

// Task # 4

// function calc(num1, opr, num2) {
//     if (opr === " +") {
//         return num1 + num2
//     }
//     else if (opr === " - ") {
//         return num1 - num2
//     }
//     else if (opr === "*") {
//         return num1 * num2
//     }
//     else {
//         return "Incorrect"
//     }
// }

// var result1 = calc(7,"+",5);
// var result2 = calc(9,"-",7);
// var result3 = calc(5 "*",2);

// console.log(result1)
// console.log(result2)
// console.log(result3)

// Task # 5

// function square(argu) {
//     document.write("Input is: " + argu + "<br>")
//     document.write("Square is: " + argu * argu);
// }
// square(+prompt("Enter number for square"));

// Task # 6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

// Task # 6

// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);


//   Task # 7

// function range(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
//   }
//   var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
//   console.log(result);



// Task # 8

// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//   console.log(pythagorean(4, 3));

// Task # 9

// var length = prompt("Enter first number for the length of your rectangle.");
// var width = prompt("Enter second  number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.write('The area of your rectangle is ' + area(length, width));

// Task # 10

// function palindrome(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

//     }
// }
// palindrome(prompt("Enter word"));

// Task # 11

// function titleCase(string) {
    //     string = string.split(" ");
    //     for (var i = 0; i < string.length; i++) {
    //         var firstLetter = string[i].slice(0, 1);
    //         firstLetter = firstLetter.toUpperCase();
    //         var otherLetters = string[i].slice(1);
    //         otherLetters = otherLetters.toLowerCase();
    //         var result = firstLetter + otherLetters;
    //         document.write(result + " ");
    //     }
    //     // var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox").replace("jumps", "Jumps").replace("over", "Over").replace("the", "The").replace("lazy", "Lazy").replace("dog", "Dog");
    //     // document.write(capitalized);
    // }
    // titleCase("the quick brown fox jumps over the lazy dog" + "<br>");
    // // titleCase(prompt("Enter some text"));


    // Task # 12

    // function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');


// Task # 13

