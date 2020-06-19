          ========================================
          || Name   = Mehdi Ali                 ||
          || RollNO = WM5318                    ||
          || Email  = yarpamehdi2000@gmail.com  ||
          ========================================


=====================================================
                    Chapter 1
=====================================================
1. Write a script to greet your website visitor using JS alert
box.

CODE
=====
 alert("welcome on our website")
--------------------------------------------------------------------

2. Write a script to display following message on your web page :

CODE
====
alert("Error! Enter invalid Password")
-------------------------------------------------------------------------


3. Write a script to display following message on your web page: (Hint : Use line break)
  CODE
  ====
   alert("welcom to Js Land... \nHappy Coding" )
   ---------------------------------------------------------------------------------------



4.Write a script to display following messages in sequence:
   CODE
   ====
   alert("welcome to Js land....")
   alert("Happy Codding!")
----------------------------------------------------------------------------------------------


5. Generate the following message through browser’s developer console:
CODE
====
alert("Hello! I can run JS through my web browser's console")
console.log(alert)
---------------------------------------------------------------------------------------------------------


6. Make use of alerts in your new/existing HTML & CSS project.
CODE
==== 



7. Practice placement of <script></script> element in following sections of your project in exercise 6:
   CODE
  ====

c. Body (inside your page’s HTML)
-----------------------------------------------------------------------------------------------------------






=====================================================================================================
                                            Chapter 2
=====================================================================================================


1. Declare a variable called username.
CODE
====
var username="mehdi";
alert(username)
-----------------------------------------------------------------------------------------------------------



2. Declare a variable called myName & assign to it a string that represents your Full Name.
CODE
====
var myName = prompt("Enter Your Full Name")
alert(myName)
-----------------------------------------------------------------------------------------------------------



3. Write script to
a) Declare a JS variable, titled message.

b) Assign “Hello World” to variable message

var message = "Hello World"

c) Display the message in alert box.

alert(message)
--------------------------------------------------------------------------------------------------------------


4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
CODE 
----
var Name = prompt("Enter name")
var Age = prompt("Enter Age")
var Certified = prompt("Your certificate")
alert(Name)
alert(Age)
alert(Certified)
--------------------------------------------------------------------------------------------------------------



5. Write a script to display the following alert using one JS variable:
code
-----
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)
----------------------------------------------------------------------------------------------------------



6. Declare a variable called email and assign to it a string that
represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box.(Hint: use
string concatenation)
code
-----
var email = "yarpamehdi2000@gmail.com"
alert("my Email Address is " + email)
----------------------------------------------------------------------------------------------------------


7. Declare a variable called book & give it the value “A
smarter way to learn JavaScript”. Display the following
message in an alert box:
var Book = "I am try to learn from the Book A smarter way to learn JavaScript"
alert(Book)
----------------------------------------------------------------------------------------------------------



8. Write a script to display this in browser through JS

document.write('Yah! i can write HTML content through JavaScript')
----------------------------------------------------------------------------------------------------------
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
----------------------------------------------------------------------------------------------------------




=====================================================================================================
                                            Chapter 3
=====================================================================================================

1. Declare a variable called age & assign to it your age. Show
your age in an alert box.
code
--------
var age = 15
alert("i am " + age + " " +"years old")
----------------------------------------------------------------------------------------------------------

2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.
----------------------------------------------------------------------------------------------------------

3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:
code
--------
var birthYear = (+ 2000)
document.write("my birth year is" + " "+ birthYear)
---------------------------------------------------------------------------------------------------------

4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

code
-------
var visitor = "Jhone Doe"
var product = "t-shirt"
var Quantity = "5"
document.write(visitor + " " + "ordered" +" " + Quantity +" " + product + " " + " on XYZ Clothing Store")
-----------------------------------------------------------------------------------------------------------






=====================================================================================================
                                            Chapter 4
=====================================================================================================

1. Declare 3 variables in one statement.
code
------

var a=1,
    b=2,
    c=3;
document.write(a+"<br>"+b+"<br>"+c)

2. Declare 5 legal & 5 illegal variable names.
code
-----------
Legal variables:

        var firstname;
        var first_name;
        var first-name;
        var firstName;
        var firstname99;

Illegal variables:

 	     var first name;
           var 99firstname;
           var firstname_;
           var first+name;
           var first < name;
----------------------------------------------------------------------------------------------



3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
code
------
var a="variable contain only numbers,$,and _"
b) Variable names can only contain _letters_____, __$____,
___underscore___ and __string____.
c) Variables must begin with a __aplhbat____, __$____ or
__letter___. For example $name, _name or name
----------------------------------------------------------------------------------------------------






=====================================================================================================
                                            Chapter 5
=====================================================================================================

1. Write a program that take two numbers & add them in a
   new variable. Show the result in your browser.

   code
   ----
      var a = prompt('enter your first number')
      var b = prompt('enter your second number')
      var c = (+a) + (+b)
      document.write('Sum of ' + a + " " + "and" +" " + b + " " + "is " + c)
--------------------------------------------------------------------------------------------------------


      2. Repeat task1 for subtraction, multiplication, division &
      modulus.

    code
    ---
      var a = prompt('enter your first number')
      var b = prompt('enter your second number')
      var c = (+a) - (+b)
      document.write('Subtraction of ' + a + " " + "and" +" " + b + " " + "is " + c)    
      
      var d = prompt('enter your first number')
      var e = prompt('enter your second number')
      var f = (+d) * (+e)
      document.write('multiply of ' + d + " " + "and" +" " + e + " " + "is " + f) 

      var g = prompt('enter your first number')
      var h = prompt('enter your second number')
      var i = (+g) / (+h)
      document.write('division of ' + g + " " + "and" +" " + h+ " " + "is " + i) 

      var j = prompt('enter your first number')
      var k = prompt('enter your second number')
      var l = (+j) % (+k)
      document.write('mode of ' + j + " " + "and" +" " + k + " " + "is " + l) 

---------------------------------------------------------------------------------------------------------


3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”

code
----

var a 
document.write("value after variable declaration is : " + a + "<br>")
a = 5
document.write("Initial value is : " + a + "<br>")
a = ++a
document.write("Value after increment is : " + a + "<br>")
a = a + 7
document.write("Value after addition is : " + a + "<br>")
a = --a
document.write('Value after Decrement is : ' + a + '<br>')
a = a%3
document.write('The Remainder is : ' + a)

------------------------------------------------------------------------------------------------

4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:

code
----

var oneticket = 600
var totalticket = prompt("how many ticket you want")
var totalcost = (+oneticket) * (+totalticket)
document.write('The total cost to by ' + totalticket + " to a movies is : " + totalcost + "PKR")

-----------------------------------------------------------------------------------------------------

5. Write a script to display multiplication table of any
number in your browser. E.g

code
---

document.write('Table of 4' + '<br>')
var a = 4
for(var i = 1; i<=10; i++){
   document.write(a + " X " + i + " = " + ((+a)*(+i)) + '<br>')
}

-----------------------------------------------------------------------------------------------------


6. The Temperature Converter: It’s hot out! Let’s make a
   converter based on the steps here.
   a. Store a Celsius temperature into a variable.
   b. Convert it to Fahrenheit & output “NNoC is NNoF”.
   c. Now store a Fahrenheit temperature into a variable.
   d. Convert it to Celsius & output “NNoF is NNoC”.

   code    
   -----
      var fr = prompt('enter value')
      var cel = ((+fr) - 32)*5/9
      document.write(fr +"°F is " + cel + "°C" )

      var cel = prompt('enter value')
      var fr = ((+cel)*9/5)+32
      document.write(cel +"°C is " + fr + "°F" )
     
-----------------------------------------------------------------------------------------------------


7. Write a program to implement checkout process of a
   shopping cart system for an e-commerce website. Store
   the following in variables
   a. Price of item 1
   b. Price of item 2
   c. Ordered quantity of item 1
   d. Ordered Quantity of item 2
   e. Shipping charges
   Compute the total cost & show the receipt in your browser.

   code
   ----

var price_of_item_1 = prompt('Enter price of item 1')
document.write('Price of item 1 is ' + price_of_item_1 + '<br>')
var quantity_of_item_1 = prompt('Quantity of item 1')
document.write('Quantity of item 1 is ' + quantity_of_item_1 + '<br>')
var price_of_item_2 = prompt('Enter Price of item 2')
document.write('Price of item 2 is ' + price_of_item_2 + '<br>')
var quantity_of_item_2 = prompt('Quantity of item 2')
document.write('Quantity of item 2 is ' + quantity_of_item_2 + '<br>')
var shipping_charges = 100
document.write('Shipping Charges '+ shipping_charges + '<br><br><br>')
var total_cost_of_item_1 = (+price_of_item_1)*(+quantity_of_item_1)
var total_cost_of_item_2 = (+price_of_item_2)*(+quantity_of_item_2)
var total_cost = total_cost_of_item_1 + total_cost_of_item_2 + shipping_charges
document.write('Total Cost of Your Order is ' + total_cost)

--------------------------------------------------------------------------------------------------

8. Store total marks & marks obtained by a student in 2
   variables. Compute the percentage & show the result in
   your browser
      
      code
      ----

      var total_martks = 980
      document.write('Total Marks : ' + total_martks + '<br>')
      var obtain_marks = 804
      document.write('Obtain Marks : ' + obtain_marks+ '<br>')
      var percentage = obtain_marks/total_martks * 100
      document.write('Percentage : ' + percentage)
--------------------------------------------------------------------------------------------------

9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
   script to convert the total currency to Pakistani Rupees.
   Perform all calculations in a single expression.
   (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
   and 1 Saudi Riyal = 28 Pakistani Rupee)

   code
   ----
     
     var dollar = 10
     var riyals = 25
     var Exchange_Rate_of_dollar = 10*104.80 ,Exchange_Rate_of_riyals = 25 * 28
     var Total_currency_in_pakistan = (+Exchange_Rate_of_dollar) + (+Exchange_Rate_of_riyals)
     document.write('Total Currency in PKR : ' + Total_currency_in_pakistan)
--------------------------------------------------------------------------------------------------

10. Write a program to initialize a variable with some
    number and do arithmetic in following sequence:
    a. Add 5
    b. Multiply by 10
    c. Divide the result by 2
    Perform all calculations in a single expression
    
    code
    ----

       var arithmetic_operation = ((5 + 5) * 10) / 2
       document.write(arithmetic_operation)
--------------------------------------------------------------------------------------------------

11. The Age Calculator: Forgot how old someone is?
    Calculate it!
    a. Store the current year in a variable.
    b. Store their birth year in a variable.
    c. Calculate their 2 possible ages based on the stored
    values.
    Output them to the screen like so: “They are either NN or NN
    years old”

    code
    -----

var current_year = prompt('Enter Current Year') , birth_Year = prompt('Enter Birth Year')
var hows_old_are = (+current_year) - (+birth_Year)
document.write('Current year : ' + current_year + '<br>')
document.write('Birth Yeer : ' + birth_Year+ '<br>')
document.write("Your Age is : " + hows_old_are)

--------------------------------------------------------------------------------------------------


12. The Geometrizer: Calculate properties of a circle.
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and
    output “The circumference is NN”.
    (Hint : Circumference of a circle = 2 π r , π = 3.142)
    Calculate the area based on the radius, and output “The
    area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
code
-----

var radius = prompt('Enter Radius')
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius *radius
document.write('Radius of Circle is : ' + radius + "<br>")
document.write('The Circumference is : ' + circumference + "<br>")
document.write('The Area is : ' + area)

--------------------------------------------------------------------------------------------------

13. The Lifetime Supply Calculator: Ever wonder how
    much a “lifetime supply” of your favorite snack is?
    Wonder no more.
    a. Store your favorite snack into a variable
    b. Store your current age into a variable.
   c. Store a maximum age into a variable.
   d. Store an estimated amount per day (as a number).
   e. Calculate how many would you eat total for the rest of
   your life.
   Output the result to the screen like so: “You will need
   NNNN to last you until the ripe old age of NN”.
code
----


--------------------------------------------------------------------------------------------------












=====================================================================================================
                                            Chapter 6-9
=====================================================================================================




1. Write a program to take a number in a variable, do the
   required arithmetic to display the following result in your
   browser:

   code
   ----
     document.write("<b>Result:</b>" + "<br><br>")
     var a = prompt('Enter the value of a')
     document.write('The value of a is : ' + a + "<br>" + "----------------------------------"+ "<br>")
     a = ++a
     document.write('The value of ++a is : ' + a + "<br>")
     document.write('Now value of a is : ' + a + "<br>"+ "<br>")
     a = a++
     document.write('The value of a++ is : ' + a + "<br>")
     a = a+1
     document.write('Now value of a is : ' + a + "<br><br>")
     a = --a
     document.write('The value of --a is : ' + a + "<br>")
     document.write('Now value of a is : ' + a + "<br><br>")
     a = a--
     document.write('The value of a-- is : ' + a + "<br>")
     a = a-1
     document.write('Now value of a is : ' + a + "<br><br>")

--------------------------------------------------------------------------------------------------

2. What will be the output in variables a, b & result after
   execution of the following script:
   var a = 2, b = 1;
   var result = --a - --b + ++b + b--;
   Explain the output at each stage:
   --a; = 1
   --a - --b; = 1 - 0 = 1
   --a - --b + ++b; = 1 + 2 = 3
   --a - --b + ++b + b--; = 3 
   code
   -----  

var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write('a is : ' + a + "<br>")
document.write('b is : ' + b+ "<br>")
document.write('result is : ' + result)

--------------------------------------------------------------------------------------------------

3. Write a program that takes input a name from user & greet the user.

var user = prompt('Please Enter your Name')
document.write('<b>Welcome To Our Website Mr</b> ' + user )

--------------------------------------------------------------------------------------------------

4. Write a program to take input a number from user &
   display it’s multiplication table on your browser. If user
   does not enter a new number, multiplication table of 5
   should be displayed by default.


var a = + prompt('Enter a number')
if(a===0){
    b = 5
    for(i = 1; i<=10; i++){
      document.write(b + ' X ' + i + ' = ' + (+b) * (+i) + '<br>')       
    }
    
}
else{
    for(j=1;j<=10;j++){
        document.write(a + ' X ' + j + ' = ' + (+a) * j + '<br>' )
    }
}

--------------------------------------------------------------------------------------------------


6. Take
   a) Take three subjects name from user and store them in 3
   different variables.
   b) Total marks for each subject is 100, store it in another
   variable.
   c) Take obtained marks for first subject from user and
   stored it in different variable.
   d) Take obtained marks for remaining 2 subjects from user
   and store them in variables.
   e) Now calculate total marks and percentage and show the
   result in browser like this.(Hint: user table)
   



   document.write('<b>subjects    Total_Marks    Obtain_Marks    Percentage</b>' + '<br>')
      var subject1 = prompt('Enter your first subject name'),
          subject2 = prompt('Enter your second subject name'),
          subject3 = prompt('Enter your third subject name')

       var Total_Marks1 = 100,Total_Marks2 = 100,Total_Marks3 = 100 
    
       var Obtain_marks1 = prompt('Enter your first subject Numbers'),
           Obtain_marks2 = prompt('Enter your second subject Numbers'),
           Obtain_marks3 = prompt('Enter your third subject Numbers')
    
       var percentage_of_subject_1 = (+Obtain_marks1)/(+Total_Marks1)*100
       var percentage_of_subject_2 = (+Obtain_marks2)/(+Total_Marks2)*100
       var percentage_of_subject_3 = (+Obtain_marks3)/(+Total_Marks3)*100

    document.write(subject1 + " &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;" + Total_Marks1 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Obtain_marks1 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage_of_subject_1 + "%" + '<br>')
    document.write(subject2 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Total_Marks2 + "&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Obtain_marks2 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage_of_subject_2 + "%" + '<br>')
    document.write(subject3 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Total_Marks3 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Obtain_marks3 + "&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage_of_subject_3 + "%" + '<br>')
      var Total_marks = (+Total_Marks1) + (+Total_Marks2) + (+Total_Marks1),
          Obtain_Marks = (+Obtain_marks1) + (+Obtain_marks2) + (+Obtain_marks3), 
          Percentage = (+ Obtain_Marks)/(+Total_marks)*100
          Percentage = Percentage.toFixed(2)
      document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + Total_marks + " &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  + Obtain_Marks + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + Percentage)
    

--------------------------------------------------------------------------------------------------













=====================================================================================================
                                            Chapter 9-11
=====================================================================================================




1.  Write a program to take “city” name as input from user. If
    user enters “Karachi”, welcome the user like this:
    “Welcome to city of lights”



var city = prompt('Enter your city name')
    city = city.toLowerCase()

if(city === "karachi"){
   alert('“Welcome to city of lights”')
}
else{
   alert('Enter correct city Name')
}
--------------------------------------------------------------------------------------------------



2. Write a program to take “gender” as input from user. If the
   user is male, give the message: Good Morning Sir. If the
   user is female, give the message: Good Morning Ma’am.



var gender = prompt('Enter your Gender')
    gender = gender.toLowerCase()

    if(gender ==="male"){
       alert("Good Morning Sir.")
    }
    else if(gender === "female"){
       alert("Good Morning Ma'am")
    }
    else{
       alert('your are other')
    }

--------------------------------------------------------------------------------------------------


3. Write a program to take input color of road traffic signal
   from the user & show the message according to this table:


var signal = prompt("Enter Traffic Light Color")
    signal = signal.toLowerCase()
    if(signal === "red"){
       alert('Must Stop')
    }
    else if(signal === "yellow"){
       alert('Ready To Move')
    }
    else if(signal === 'Green'){
       alert('Move Now')
    }
    else{
       alert('Enter red or yellow or green ')
    }

--------------------------------------------------------------------------------------------------

4. Write a program to take input remaining fuel in car (in
   litres) from user. If the current fuel is less than 0.25litres,
   show the message “Please refill the fuel in your car”

var fuel =prompt('Enter your remaining fuel')
    if(fuel < 0.25){
         alert('“Please refill the fuel in your car”')
    }
    else{
       alert('you have fuel')
    }



--------------------------------------------------------------------------------------------------
5. Run this script, & check whether alert message would be
   displayed or not. Record the outputs.


 a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
Yes It is true.

b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
This is False

c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
condition 1 is false
if (c === 13){
alert("condition 2 is true");
}
condition 2 is True
if (++c < 14){
alert("condition 3 is true");
}
condition 3 is False
if(c === 14){
alert("condition 4 is true");
}
condition 4 is True

d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
this is True

e. 
if (true){
   alert("True");
   }
   if (false){
   alert("False");
   }

f. 
if("car" < "cat"){
   alert("car is smaller than cat");
   }
   Yes
   
--------------------------------------------------------------------------------------------------

6. Write a program to take input the marks obtained in three
   subjects & total marks. Compute & show the resulting
   percentage on your page. Take percentage & compute
   grade as per following table:


document.write("<b>Marks Sheet</b>" + "<br>") 
var Obtain_marks1 = prompt("Enter  subject 1 marks ")
var Obtain_marks2 = prompt("Enter  subject 2 marks ")
var Obtain_marks3 = prompt("Enter  subject 3 marks ")
var Total_Marks = prompt('Enter total marks')


var Total_obtain_marks = (+Obtain_marks1) + (+ Obtain_marks2) + (+Obtain_marks3) 
document.write('Total Marks : ' + Total_Marks +'<br>')
document.write('Obtain Marks : ' + Total_obtain_marks+'<br>')

var Percentage = (Total_obtain_marks/Total_Marks)*100
    Percentage = Percentage.toFixed(2)
    document.write('Percentage : ' + Percentage + ' %'+'<br>')

    if(Percentage >=80){
        document.write('Grade : A+<br>Remarks : Excellent')
    }
    else if(Percentage >=70){
        document.write('Grade : A<br>Remarks : Good')
    }
    else if(Percentage >=60){
        document.write('Grade : B<br>Remarks : You Need To Improve')
    }
    else if(Percentage <60){
        document.write('Grade : Fail<br>Remarks : Sorry')
    }
    else if(Percentage > 100){
        alert('Enter correct marks')
    }


--------------------------------------------------------------------------------------------------


7. Guess game:
   Store a secret number (ranging from 1 to 10) in a variable.
   Prompt user to guess the secret number.
   a. If user guesses the same number, show “Bingo! Correct
   answer”.
   b. If the guessed number +1 is the secret number, show
   “Close enough to the correct answer”.


var secret = 3
var secretn = prompt("Enter a Number between 1 to 10")

if(secretn === 3){
    alert("“Bingo! Correct answer”.")
}
else{
       alert('“Close enough to the correct answer”')
}

--------------------------------------------------------------------------------------------------

8. Write a program to check whether the given number is
   divisible by 3. Show the message to the user if the number
   is divisible by 3.

var   num =parseInt(prompt("Enter the number"))
if(num%3==0 ){
    alert('Number is divisible by 3')
}
else{
    alert("it is not divisible by 3")
}



--------------------------------------------------------------------------------------------------


9. Write a program that checks whether the given input is an
   even number or an odd number

var num = prompt("enter a number")

if(num%2==0){
    alert("it is even number")
}
else{
    alert('it is odd number')
}


--------------------------------------------------------------------------------------------------


10. Write a program that takes temperature as input and
    shows a message based on following criteria
    a. T > 40 then “It is too hot outside.”
    b. T > 30 then “The Weather today is Normal.”
    c. T > 20 then “Today’s Weather is cool.”
    d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt('enter a temperature')
    if(temp>40){
        alert('it is too hot outside')
        }
    else if(temperature>30){
        alert('The Weather today is normal')
    }
    else if(temperature>20){
        alert('Today’s Weather is cool.')
    }
    else if(temperature>10){
        alert('OMG! Today’s weather is so Cool.')
    }
    else{
        alert('enter temperature')
    }


--------------------------------------------------------------------------------------------------



11. Write a program to create a calculator for +,-,*, / & %
    using if statements. Take the following input:
    a. First number
    b. Second number
    c. Operation (+, -, *, /, %)
    Compute & show the calculated result to user.


var firstnumber = prompt('enter first number')
var Operation = prompt('select any operation like + - * / %')
var secondnumber = prompt('enter second number')
if(Operation === "+"){
    alert((+firstnumber)+(+secondnumber))
}
if(Operation === "-"){
    alert((+firstnumber)-(+secondnumber))
}
if(Operation === "*"){
    alert((+firstnumber)*(+secondnumber))
}
if(Operation === "/"){
    alert((+firstnumber)/(+secondnumber))
}
if(Operation === "%"){
    alert((+firstnumber)%(+secondnumber))
}
--------------------------------------------------------------------------------------------------








=====================================================================================================
                                            Chapter 12-13
=====================================================================================================


1.   Write a program that takes a character (number or string)
     in a variable & checks whether the given input is a
     number, uppercase letter or lower case letter. (Hint: ASCII
     codes:- A=65, Z=90, a=97, z=122).

var num = prompt("Enter a any character")
   
   if(num >=32 && num <=47)
   {
       alert("its a symbol")
   }
   if(num >=48 && num <=57)
   {
       alert("its a Number")
   }
   if(num >=58&& num <=64)
   {
       alert("its a Operation")
   }
   if(num >=65&& num <=90)
   {
       alert("its a UpperCase")
   }
   if(num >=91&& num <=96)
   {
       alert("its a character")
   }
   if(num >=97&& num <=122)
   {
       alert("its a LowerCase")
   }

--------------------------------------------------------------------------------------------------

2. Write a JavaScript program that accept two integers and
   display the larger. Also show if the two integers are equal.

var num1 = prompt('Enter first number')
var num2= prompt('Enter second number')
if((+num1)>(+num2)){
    alert('The larger number of ' + num1 +" and " + num2 +" is " +num1)
}
else if((+num2)>(+num1)){
    alert('The larger number of ' + num1 +" and " + num2 +" is " +num2)
}
else{
    alert("Boths are equal")
}


--------------------------------------------------------------------------------------------------

3. Write a program that takes input a number from user &
   state whether the number is positive, negative or zero.

var num1 = parseInt(prompt("Enter a number"))
if(num1>0)
{
    alert("it is positive")
}
else if(num1<0){
    alert('it is negative')
}

--------------------------------------------------------------------------------------------------
4. Write a program that takes a character (i.e. string of
    length 1) and returns true if it is a vowel, false otherwise
    


    function isVowel(argument){

        
        var argument = argument.toLowerCase();
    
        var vowels = (['a', 'e', 'i', 'o', 'u']);
    
        for (var i = 0; i <= vowels.length; i++){
            if (argument != vowels[i]) {
                continue;
            }
            return true;
        }
        return false;
    }
--------------------------------------------------------------------------------------------------



5. Write a program that
   a. Store correct password in a JS variable.
   b. Asks user to enter his/her password
   c. Validate the two passwords:
   i. Check if user has entered password. If not, then
   give message “ Please enter your password”
   ii. Check if both passwords are same. If they are
   same, show message “Correct! The password you
   entered matches the original password”. Show
   “Incorrect password” otherwise.


var password = 12345
var user = Number(prompt('Enter password'))
if(user ===""){
    alert('Please enter your password')
}
else if(user === password){
    alert('Correct! The password youentered matches the original password')
}
else{
    alert('Incorrect password')
}

--------------------------------------------------------------------------------------------------


6. This if/else statement does not work. Try to fix it:
   var greeting;
   var hour = 13;
   if (hour < 18) {
   greeting = "Good day";
   else
   greeting = "Good evening";
   }


var greeting;
   var hour = 13;
   if (hour < 18) {
   alert(greeting = "Good day")
   }
   else{
        alert(greeting = "Good evening")
   }

--------------------------------------------------------------------------------------------------


7. Write a program that takes time as input from user in 24
   hours clock format like: 1900 = 7pm. Implement the
   following case using if, else & else if statements



var time = parseInt(prompt('Enter time'))

if(time>=0000 && time<1200){
    alert('Good Morning')
}
else if(time >=1200&& time<1700){
    alert('Good AfterNoon')
}
else if(time>=1700&&time<2100){
    alert("Good Evenning")
}
else if(time>=2100&&time<2359){
    alert('Good Night')
}
else{
    alert('Enter Correct time')
}














=====================================================================================================
                                            Chapter 14-16
=====================================================================================================



1. Declare an empty array using JS literal notation to store
   student names in future.


var student = [];
   student[0] = "Mehdi",
   student[1] ="ali"
   document.write(student)

--------------------------------------------------------------------------------------------------


2. Declare an empty array using JS object notation to store
   student names in future.


var myarry= new Array();


--------------------------------------------------------------------------------------------------


3. Declare and initialize a strings array.


var array = ['mehdi','ali','mastan','adnan','zulfiqar']

document.write(array)

--------------------------------------------------------------------------------------------------

4. Declare and initialize a numbers array.

var arry = [1,2,3,4,56,7,5]
document.write(arry)

--------------------------------------------------------------------------------------------------

5. Declare and initialize a boolean array.

var myArr = [];
var value = 2;
for(var i = 0; i < value; i++) {
   myArr.push(false);
}
alert(myArr);

--------------------------------------------------------------------------------------------------

6. Declare and initialize a mixed array.

var array = [1,'mehdi' , 56 ,"hello pakistan"]
 document.write(array)

--------------------------------------------------------------------------------------------------

7. Declare and Initialize an array and store available
   education qualifications in Pakistan (e.g. SSC, HSC, BCS,
   BS, BCOM, MS, M. Phil., PhD). Show the listed
   qualifications in your browser like:

document.write('<b>Qualifications</b>'+"<br>")

var qualifications = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6) MS","7) M.PHIL","8) PHD"]
for(i=0;i<qualifications.length;i++)
document.write(qualifications[i]+"<br>")

--------------------------------------------------------------------------------------------------

8. Write a program to store 3 student names in an array.Take
   another array to store score of these three students.
   Assume that total marks are 500 for each student, display
   the scores & percentages of students like:


var studentname = ['Mehdi Ali','Mastan ali' ,'Adnan karim']
var score = [320,230,480]
document.write('Score of ' + studentname[0] + " Is " + score[0] + ' . ' + "Percentage : " + (score[0]/500)*100 + "%" + "<br>")
document.write('Score of ' + studentname[1] + " Is " + score[1] + ' . ' + "Percentage : " + (score[1]/500)*100 + "%" + "<br>")
document.write('Score of ' + studentname[2] + " Is " + score[2] + ' . ' + "Percentage : " + (score[2]/500)*100 + "%" + "<br>")


--------------------------------------------------------------------------------------------------


9. Initialize an array with color names. Display the array
   elements in your browser.
   a. Ask the user what color he/she wants to add to the
   beginning & add that color to the beginning of the array.
   Display the updated array in your browser.
   b. Ask the user what color he/she wants to add to the end
   & add that color to the end of the array. Display the
   updated array in your browser.
   c. Add two more color to the beginning of the array.
   Display the updated array in your browser.
   d. Delete the first color in the array. Display the updated
   array in your browser.
   e. Delete the last color in the array. Display the updated
   array in your browser.
   f. Ask the user at which index he/she wants to add a color
   & color name. Then add the color to desired
   position/index. . Display the updated array in your
   browser.
   g. Ask the user at which index he/she wants to delete
   color(s) & how many colors he/she wants to delete. Then
   remove the same number of color(s) from user-defined
   position/index. . Display the updated array in your
   browser.


var  color = ['Red' ,'Blue','Green','Yellow']
document.write(color + "<br>")
color.unshift('White')
document.write(color+ "<br>")
color.push('Black')
document.write(color+"<br>")
color.unshift('pink','purpule')
document.write(color+ "<br>")
color.shift()
document.write(color+"<br>")
color.pop()
document.write(color+"<br>")
color.splice(3,0,'Black','White')
document.write(color+"<br>")
color.splice(3,2,"")
document.write(color+"<br>")

--------------------------------------------------------------------------------------------------

10. Write a program to store student scores in an array &
    sort the array in ascending order using Array’s sort
    method.

var array = [320,230,480,120]
document.write('Score of Students : '+array+"<br>")
array.sort()
document.write('Ordered Score of Students: ' +array)

--------------------------------------------------------------------------------------------------


11. Write a program to initialize an array with city names.
    Copy 3 array elements from cities array to selectedCities
    array
document.write('Cities list:'+"<br>")
var array = ['karachi','lahore','islamabad','peshawer','quetta']
document.write(array+'<br>')
document.write('Selected Cities list:' +'<br>')
array = array.slice(2,4)
document.write(array)

--------------------------------------------------------------------------------------------------

12. Write a program to create a single string from the
    below mentioned array:
    var arr = [“This ”, “ is ”, “ my ”, “ cat”];
    (Use array’s join method)

document.write('<b>Array:</b>'+'<br>')
var array = ['This','is','cat']
document.write(array+"<br>")
array = array.join(" ")
document.write('<b>String:</b>'+'<br>')
document.write(array)

--------------------------------------------------------------------------------------------------

13. Create a new array. Store values one by one in such a way
    that you can access the values in the order in which they
    were stored. (FIFO-First In First Out)

var colors = new Array();                //create an array
var count = colors.push("A", "B");       //push two items
console.log(count);  //2
console.log(colors);/*  w  w w .j ava2s .c o  m*/

count = colors.push("black");           //push another item on
console.log(count);  //3
console.log(colors);

var item = colors.shift();              //get the first item
console.log(item);                            
console.log(colors.length);  //2
console.log(colors);

document.write('<b>Devices :</b>'+"<br>")
var array = ['keyboard','mouse','printer','monitor']
document.write(array)
array=array.shift()
for(var i = 0;i<array.length;i++){
    
    document.write(array[i].length-1)
}

--------------------------------------------------------------------------------------------------









=====================================================================================================
                                            Chapter 17-20
=====================================================================================================