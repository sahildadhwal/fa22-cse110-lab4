# Question 1:
    - Line 12 returns 3.
> Why: This is because the length of the input array was 3. Thus, the loop will run as long as i < 3 where i is initially 0. 
> So it will run for iterations i=0, i=1, and i=2. 

> It is also important to note that i is initialized as type var rather than let. This is what allows the scope of i to exist beyond the for loop.

# Question 2:
    - Line 13 returns 150.
> Why: On line 13, the console will output whatever the latest value is for discountedPrice.
> It is noticable that the problem is idential to the previous problem. 
> As I mentioned in the previous problem solution, the for loop will run for a total of 3 iterations, with i=2 being the last one.
> Since Line 7 is the only location where the content of discountedPrice is altered, we only need to focus on the last instance when Line 7 is changed, and that would be when i=2.
> So when i=2 we get var discountedPrice = prices[2] * (1 - discount);
> Since the input for prices is [100, 200, 300] and discount is 0.5, we get var discountedPrice = 300 * (1 - 0.5); 
> and this is equal to 300*0.5 which is 150.

> It is also important to note that discountedPrice is initialized as type var rather than let. This is what allows the scope of discountedPrice to exist beyond the for loop.


# Question 3:
    - Line 14 returns 150.
> Why: On line 14, the console will output whatever the latest value is for finalPrice.
> It is noticable that the problem is idential to the previous problem. 
> As I mentioned in the previous problem solution, the for loop will run for a total of 3 iterations, with i=2 being the last one.
> Since Line 8 is the only location where the content of finalPrice is altered(other than its initialization at Line 4), we only need to focus on the last instance when Line 8 is changed, and that would be when i=2.
> So when i=2 we get finalPrice = Math.round(discountedPrice* 100) / 100; where, as determined in the previous question, discountedPrice when i=2 is 150.
> So we get finalPrice = Math.round(150 * 100) which is equal to 15000/100 and this is equal to 150.

> It is also important to note that discountedPrice is initialized as type var rather than let. This is what allows the scope of discountedPrice to exist beyond the for loop.


# Question 4:
    - This function will return [ 50, 100, 150 ]
> Overall, this function is given an array of prices and a discount value. 
> The function steps through each value in the prices array and calculates the price with the discount. (If an item is 70% off, you pay 30%, so the function will calculate 30% of the original price).
> Then, the calculated value is pushed onto a new discounted array. Once all of the content of the original prices array have been converted into the discounted array, the discounted array is then returned.
> Thus, since the input in this particular example was ([100, 200, 300], 0.5)), what is returned would be the discounted values.
> The discounted array equals [ (100*(1-0.5)), (200*(1-0.5)), (300*(1-0.5)) ]
> This is [ 50, 100, 150 ]. Also, it is important to note, the function rounds any decimals in these discounted values to the nearest whole number (This example does not include decimals).

# Question 5:
    - Line 12 returns and ERROR!
> This is because we are trying to use i even though i is out of scope.
> i is initialized with let on Line 6. That means that we only have access to i inside the for loop that it was defined in.

# Question 6:
    - Line 13 returns and ERROR!
> This is because we are trying to use discountedPrice even though discountedPrice is out of scope.
> discountedPrice is initialized with let on Line 7 which is inside the for loop. That means that we only have access to discountedPrice inside the for loop that it was defined in.


# Question 7:
    - Line 14 returns 150.
> Although finalPrice was initialized by let and has a limited scope, the scope is still big enough to include all of the components that use finalPrice.
> Questions 5 and 6 had issues with the scope being to small to use the specific variables, however, in this case, the scope of finalPrice can be accessed and changed by the for loop and the latest value of finalPrice from the loop can still be outputed to the console after the for loop concludes. 

# Question 8:
    - This function returns [ 50, 100, 150 ]
> While some of the components that alter discounted are out of scope when discounted is returned (such as i and discountedPrice),
> Since those specific components are not called/used outside of their respective scopes, there is no error.
> All variables were in scope as they are declared/used which does not cause any errors, unlike the previous question.


# Question 9:
    - Line 11 returns an ERROR!
> This is because we are trying to use i even though i is out of scope.
> i is initialized with let on Line 6. That means that we only have access to i inside the for loop that it was defined in.

# Question 10:
    - Line 12 returns 3.
> It returns 3 because length was defined as const length = prices.length; and since prices consisted of 3 elements, length is 3 which is what was returned.
> Also, it is good to note that on Line 12, the length was in scope.


# Question 11:
    - The function returns [ 50, 100, 150 ].



> While some of the components that alter discounted are out of scope when discounted is returned (such as i and discountedPrice),
> Since those specific components are not called/used outside of their respective scopes, there is no error.
> All variables were in scope as they are declared/used which does not cause any errors, unlike the previous question.
> Also, none of the const variables were "reassigned", which is another reason why there were no errors.
 
# Question 12:
> A: student.name

> B: student['Grad Year']

> C: student.greeting()

> D: student['Favorite Teacher'].name

> E: student.courseLoad[0]

# Question 13:
> A: '32'

> B: 1

> C: 3

> D: '3null'

> E: 4

> F: 0

> G: '3undefined'

> H: NaN

# Question 14:
> A: true

> B: false

> C: true

> D: false

> E: false

> F: true

# Question 15:
    - Explain the difference between the == and === operators.
> The == operand does not consider the data types of the 2 elements that are being compared.
> The === operand does consider the data types of the 2 elements compared.
> This explains why in Question 14, C was true (2 == ‘2’) and D was false (2 === ‘2’).


# [Question 16](https://github.com/sahildadhwal/fa22-cse110-lab4/blob/main/expose/javascript/part2-question16.js)

# Question 17:
    - If the function above is called with the following parameters modifyArray([1,2,3], doSomething), the result will be [2,4,6].
> This is because modifyArray returns whatever content is held in the array newArr. 
> newArr contains the contents of what is pushed into it in the for loop in modifyArray. 
> The for loop iterates the length of the input array(so 3 iteratoions in this case. i=0, i=1,i=2).
> For each iteration, the function doSomething is called on the current element(array[i]).
> The function doSomething just multiplies the input by 2. So, the value that is pushed into newArray is just the current element times 2.
> Therefore, since the input is [1,2,3], the newArray that is returned will have each element multiplied by 2. So, [2, 4, 6]

# [Question 18](https://github.com/sahildadhwal/fa22-cse110-lab4/blob/main/expose/javascript/part2-question18.js)

# Question 19:
> 1

> 4

> 3

> 2
