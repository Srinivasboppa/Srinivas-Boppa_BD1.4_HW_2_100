Question 1: Body Mass Index (BMI) Calculator

Calculate the BMI given weight (kilograms) and height(meters)

Write an Express code snippet.

Declare an endpoint /bmi using the get keyword.

Declare 2 variables height & weight to take the inputs.

Use the formula to calculate the BMI and return the result in the expected format

API Call: http://localhost:3000/bmi?weight=70&height=1.75

Expected Output: Your BMI is 22.85

Answer:

Question 2: Calculate grocery checkout price

Create an endpoint that takes product, units & price as query parameters and returns total price to be paid.

Write an Express code snippet.

Declare an endpoint /checkout using the get keyword.

Declare 3 variables product, units & price to take the inputs.

Calculate the total price by multiplying units with price

For example: total_price = price * units

In the end, concatenate the values to return the result in the expected format.

API Call: http://localhost:3000/checkout?product=Fuse&units=2&price=40

Expected Output: Your total for 2 Fuse is 80

Answer:

Question 3: Calculate grade percentage

Create an endpoint that takes math, science & english as query parameters and returns grade in percentage

Write an Express code snippet.

Declare an endpoint /grade using the get keyword.

Declare 3 variables math, science & english to take the inputs.

Calculate the students grade in percentage ( Considering the maximum marks a student can get in a subject is 100 )

Add the 3 values & divide the result by 300

Now multiply the result with 100

For example: gradeInPercentage = ((subject1 + subject2 + subject3) / 300 ) * 100

Make sure you return the percentage as Integer.

In the end, concatenate the values to return the result in the expected format.

API Call: http://localhost:3000/grade?maths=70&science=82&english=75

Expected Output: Your grade in percentage is 76%

Answer:

Question 4: Return bill amount after applying discount

Create an endpoint that takes cartTotal & discount ( percentage ) as query parameters and returns the result

Write an Express code snippet.

Declare an endpoint /discounted-price using the get keyword.

Declare 2 variables cartTotal & discount to take the input.

Calculate the total price after applying discount

cartTotal - ( cartTotal * ( discount / 100 ) )

In the end, concatenate the values to return the result in the expected format.

API Call: http://localhost:3000/discounted-price?cartTotal=150&discount=5

Expected Output: Result: Your bill amount is 142.5

Answer:

Question 5: Split bill among friends

Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result

Write an Express code snippet.

Declare an endpoint /split-bill using the get keyword.

Declare 2 variables billAmount & numberOfFriends to take the input.

Calculate the split amount among all the friends

let splitAmount = billAmount / numberOfFriends

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.

API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3

Expected Output: Result: Each friend owes Rs. 50 against the bill

Answer:

Question 6: Convert Celsius to Fahrenheit

Create an endpoint that takes a temperature in Celsius and returns the temperature in Fahrenheit.

Write an Express code snippet.

Declare an endpoint /celsius-to-fahrenheit using the get keyword.

Declare 2 variables temperature to take the input.

Convert the temperature from celsius to fahrenheit

let fahrenheit = celsius * 9/5 + 32

In the end, concatenate the values to return the result in the expected format.

API Call: http://localhost:3000/celsius-to-fahrenheit?temperature=20

Expected Output: Result: 68 Fahrenheit

Answer:

Question 7: Calculate monthly salary

Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.

Write an Express code snippet.

Declare an endpoint /monthly-salary using the get keyword.

Declare 2 variables totalHours & hourlyWage to take the input.

Calculate the employee’s monthly salary

monthlySalary = hourlyWage * totalHours

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.

API Call: http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160

Expected Output: Result: Your monthly salary is ₹320000

Answer:

