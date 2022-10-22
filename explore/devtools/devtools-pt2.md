# Question 1
> The bug that we face is that the datatype of num1 and num2 are both strings and we are trying to add them with the expectation that they will add like numbers. 

> (Ex: Our current issue is that '1'+'1' = '11' but we are expecting '1'+'1' = 2).

# Question 2
> A fix would be to convert num1 and num2 to a number data type and then add them into result.
> So instead of: 
> - let result = num1 + num2 

> [We can put a '+' infront of num1 and num2 to convert the strings to numbers:](https://stackoverflow.com/questions/8976627/how-to-add-two-strings-as-if-they-were-numbers)
> - let result = +num1 + +num2 
 