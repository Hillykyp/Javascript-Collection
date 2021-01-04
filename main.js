// @DAY 1 OF 100DaysOfCode

// Js is LOOSELY typed programming language.
// You dont have to define the datatype of variables as opposed to C++
// Js is DYNAMICALLY Typed
// It can change
// alert("Lets Learn Together");
document.write('The beginning of javascript Development.');
var firstName = "Hosea";
var lastName = "Kiplimo";

document.write("<br>")
document.write(firstName +lastName + "<br>");

const myName = "Hilly";
var num1 = 12;
var num2 = 10;
var age = num1 + num2;

document.write("My name is " + myName + ' and I am ' + age + ' years old' + "<br>" );
// === Equal to and equal to textEmphasisStyle: 
// == Equal top: 
// != Not Equal 
// !== Not equal to and not equal to type.
var x = 5;
if(x!= '5'){
    document.write(true);}
    else{
        document.write(false + "<br>");
    };

    // And && , Or ||, not !;

    // Using And &&
    // Both conditions must be true to return true.
    var t = 12; 
    var n = 5;
    if(t>10 && n<5){
document.write(true+ "<br>");
    }
    else{
        document.write(false+ "<br>");
    }

    // Using Or || 
    // Either of the conditions have to be textUnderlinePosition: 
var x = 5;
var n = 0;
    if(x==6 || n>1){
    document.write(false);
}
else{
    document.write(true + "<br>");
}
     
// Using Not !
// checks if it is true or false
 if(!(x==n)){
     document.write(true + "<br>");
 }
 else{
     document.write(false);
 };

 // Ternary operator
 // variable name =  (condition)? value1:value2
 var age = 2;
  var voteAble = (age > 18) ? "You can Vote" : "You are Underage";
  document.write(voteAble + "<br>");


  // Concatination operator
  // used to concatinate two or more strings together
  var txt1 = "Kimberly";
  var txt2 = "Natasha";
  var name1 = txt1 + " " + txt2;
  document.write(name1) + "<br>";

  // Typeof operator
  // It returns the Type of variable
  // Instanceof - Returns true if an object is an instance of object textEmphasisStyle: 
  
// Ifelse conditional statement
// The use of ifelse statement

// @DAY 2 OF 100DaysOfCode

// (1). Program to test if a number is odd or even
document.write("<h1> If - Else Statement</h1>");

var x = -11;
if(x%2==0){
    document.write("EVEN");
}
else{
    document.write("ODD" +'<br>');
}

// (2.) Find if a number is positive, Negative or 0
var x =8;
if(x>0){
    document.write("Positive Number"+'<br>');
}
else if(x<0){
    document.write("Negative Number");
}
else{
    document.write("The Number is Neither NEGATIVE nor POSITIVE");
}

// (3) Find if a number is Positive and Even
if(x%2==0 && x>0){
    document.write("Positive and Even"+'<br>');
}


// SWITCH statement
// (1.) Program to find days of the week by accepting numbers

var day = 7;
switch(day){
    case 1:
        document.write("Sunday");
        break;
    case 2:
            document.write("Monday")
            break;

    case 3:
            document.write("Tuesday")
            break;
    case 4:
            document.write("Wednsday")
            break;
    case 5:
            document.write("Thursday")
            break;
    case 6:
            document.write("Friday")
            break;
    case 7:
            document.write("Satarday"+'<br>')
            break;
    default:
        document.write("Wrong Day selected");

}

// @DAY 3 OF 100DaysOfCode
// (1.) Print table of 5 using for loop
// For loop is used when you know the number of iterations
document.write('<h1>For Loop</h1>') ;

for(var y=1;y<=10;y++){
    
    document.write((2*y)+'<br>'+'<br>');
}
document.write('<h1>For Loop Part 2</h1>') 

// (2.) Print first even numbers
for(var x=2;x<=10;x+=2){
document.write((x)+'<br>');
}

// @Day 4 OF 100Days OfCode
// While Loop
/*Q1.) Print the first 5 odd numbers using while loop */
// while loop is used when
document.write('<h1>While Loop</h1>') 
var y =1;
 while(y<=10){
     document.write(y+'<br>');
     y+=2;
 }

// print the first Even numbers using while loop
 document.write('<h1>While Loop 2</h1>');
 var x=2
 while(x<10){
     document.write(x+'<br>');
     x+=2;
 }
 document.write('<h1>While Loop 3</h1>') 

 // print multiples of 5
 while(y<=10){
     document.write(y);
     y=2*y;
     y++;
 }

 document.write('<h4>Do while loop</h4>');
 // Do while loop
 // The first statement is executed before checking the condition
 var k = 6;
 do{
    document.write('Hilly'+'<br>');
    k++;
 }while(k<5);

 var cars = ['Bmw','Saab','Ford'];
 var i=0;
 var text="";
 for(;cars[i];){
     document.write(text)
     text +=cars[i] +'<br>';
     i++;
 }

 // For loop example
 for(x=1;x<=100;x++){
     if(x%3 && x%5){
         document.write(x);
     }
    
     else {
     if(x%3==0){
         document.write('Ping'+'<br>');
     }
     if(x%5==0){
         document.write('Pong');}
     }
     document.write('<br>');
    }

    // Challenge 1
    // (1.) Display largest number among two integers
    // var x = window.prompt("Enter the Value of X :", "0");
    // var y= window.prompt("Enter The value of Y :", "0");
    if(parseInt(x,10)> parseInt(y,10)){
        // document.write("X is Greater:" + x);
    }
    else if(parseInt(y,10) > parseInt(x,10)){
        // document.write('Y is Greater:' + y);
        
    }
    else{
document.write("The values " +x+"and "+ y+ " are equal.")
    }
    document.write('<br>');
    // Challenge 2
    // (2.) Find sign of product of three numbers -
    // if x is greater than 0 == + else -

    var a=-2;
    var b=-5;
    var c=-6;
    var multi =a*b*c;
    if(multi>0){
        document.write('The sign is:' + '+');
        
    }else{
        document.write('The Sign is: ' + '-');
    }
document.write('<br>');
    // Challenge 3
    // (3.) Sort three numbers and display in alertbox
    // compare and display in ascending order: 
    var d=0;
    var e=-4;
    var f=2;
    if((d>e && d>f) || (e>f && e>d)){
alert();
    }

    // Challenge 4
    // (4.) condition statement to find largest of 5 numbers display alert box to show results
var g= 5;var h=10; var i=-2; var j =0;
    if((g>h || g>i) && (g>j||g>f)){
document.write('Greatest Number: ' + g);
    }
    else if((h>g || h>i) && (h>j || h>f)){
        document.write('Greatest number is: ' + h);
    }

    // challenge 5
    // (5.) For loop that iterate from 0 to 15. and check if current number is odd or even
    // sample output "0 is even"
    document.write('<br>');
for(i=0;i<=15;i++){
    if(i%2==0){
        document.write(i + " Even ");
        document.write('<br>');
    }
    
    else if(i%2==1){
        document.write(i + " ODD ");
        document.write('<br>');
    }
    else {
        document.write(i);
    }
}


    // challenge 6
    // program to compute average of students marks and display corresponding gridTemplateAreas: 
    /*David=80,Vinoth=77, Divya=88,Ishitha=95, Thomas=68    Grades <60= F, <70=D, <80=C, <90=B, <100A*/
// marks
// students
document.write('<br>')
var m=99;

    if(m<60){
        document.write("Your Grade is: F");
    }
    else if(m<70){
        document.write("Your Grade is D");
    }
    else if(m<80){
        document.write("Your Grade is C");
    }
    else if(m<90){
        document.write("Your Grade is B");
    }
    else if(m<100){
        document.write("Your Grade is A");
    }
    else{
        document.write("You have entered the wrong mark");
    }


  // challenge 7
  /*Program that iterates through integers 1 to 100. For Multiples of 3 Print Fizz insted of numbers. For multiples of 5 Buzz. BOTH multiples of 3 and 5 FIZZBUZZ*/
document.write('<br>');
for(x=1;x<100;x++){
    if(x%3==0){
        document.write('FIZZ');
    }
    else {
    if(x%5==0){
        document.write('BUZZ');
    }
    if(x%3==0 && x%5==0){
        document.write('FIZZBUZZ')
    }
}
    document.write('<br>');

    }



  // Challenge 8
  // happy  numbers


  // Challange 9
  // Armstrong numbers  


// Challange 10 
// construct the following patternusing nested for loop

/*
*
* *
* * *
* * * *
* * * * *
*/
 
for(i=1;i<=5;i++){
    document.write('*');
}
// Challenge 11
// program to compute Gcd of 2 positive integers


// Challenge 12
// Program to sum the Multiples of 3 and 5 under 1000


// Functions
