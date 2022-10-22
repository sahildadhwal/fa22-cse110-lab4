{/* Q1, Q2
function sumValues (num1, num2, add) {
    if (add) {
        var result = 0;
        result = num1 + num2;
        console.log ('values added: ', result);
    } else return;
    
    console.log('final result: ', result);
}
sumValues (10, 10, true);
*/

/* Q3, Q4

function sumValues (num1, num2, add){ 
    
    if (add) {
        let result = 0;
        
        result = num1 + num2;
        
        console.log ( 'values addeddd: ', result);
        
    } else return;
    
    console.log ( 'final result: ', result);
}
sumValues (10, 10, true);
*/

/* Q5, Q6
function sumValues (num1, num2, add) {
    if (add){
        const result = 0;
        
        result = num1 + num2;
        
        console.log( 'values added: ', result);
        
    } else return;
    console.log('final result: ', result);
}
sumValues (10, 10, true);
*/}

{/*
// Question 1
function discountPrices (prices, discount) {
    
    var discounted = [];
    
    var finalPrice = 0;
    
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices [i] * (1 - discount) ;
        finalPrice = Math.round(discountedPrice* 100) / 100;
        discounted.push(finalPrice) ;
    }
    console.log(i);
    
    // console.log(discountedPrice) ;
    // console.log(finalPrice)
    return discounted;
}
discountPrices( [100, 200, 300], 0.5) ;


// Question 2
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount) ;
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice) ;
    }
    
    // console . log(i);    
    console.log(discountedPrice)
    // console.log(fina!Price) ;
    return discounted;
}
discountPrices ( [100, 200, 300], 0.5);




// Question 3 AND 4
function discountPrices (prices, discount) {
    var discounted = [];
    var finalPrice = 0;
    
    for (var i = 0; i < prices.length; i++) {    
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice* 100) / 100;
        discounted.push(finalPrice );
    }
    // console.log(i);
    // console.log(discountedPrice) ;
    //console.log(finalPrice) ;
    
    return discounted;
}
console.log(discountPrices ( [100, 200, 300], 0.5) );





//Question 5, 6, 7, 8
function discountPrices (prices, discount) {
    let discounted = [];
    let finalPrice = 0;
    
    for (let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math. round (discountedPrice* 100) / 100;
        discounted.push(finalPrice) ;
    }
    
    //console.log(i);
    // console.log (discountedPrice) ;
    //console.log(finalPrice) ;
    
    console.log(discounted) ;
    return discounted;
}
discountPrices( [100, 200, 300], 0.5) ;


// Question 9, 10, 11
function discountPrices (prices, discount) {
    const discounted = [];
    const length = prices.length;
    
    for (let i = 0; i < length; i++) {
        const discountedPrice = prices [i] * (1 - discount);
        discounted.push(discountedPrice) ;
    }
    //console.log (i) ;
    //console.log(length) ;
    
    // console.log(discounted) ;
    // console.log('3' + 2)
    // console.log('3' - 2)
    // console.log(3 + null)
    // console.log('3' + null)
    // console.log(true + 3)
    // console.log(false + null)
    // console.log('3' + undefined)
    // console.log('3' - undefined)
    
    
    // console.log('2' > 1)
    // console.log('2' < '12')
    // console.log(2 == '2')
    // console.log(2 === '2')
    // console.log(true == 2)
    // console.log(true === Boolean(2))
    
    return discounted;
    
}
discountPrices ( [100, 200, 300], 0.5);



// Question 17
function modifyArray ( array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push (callback (array [i]));
    }
    return newArr;
}
function doSomething (num){
    return num * 2;
}
// modifyArray ( [1,2, 3], doSomething) ;
console.log(modifyArray ( [1,2, 3], doSomething))
*/}


function printNums () {
    console.log(1) ;
    setTimeout (function(){ console.log(2); }, 1000) ;
    setTimeout (function(){ console.log(3); }, 0);
    console. log (4) ;
}
    printNums();
