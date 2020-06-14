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
