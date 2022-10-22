let statistics = {
    redCars: 21,    // 21
    blueCars: 45,   // 45
    greenCars: 12,  // 
    raceCars: 5,    // 5
    blackCars: 40,  // 
    rareCars: 2     // 2
};

// Given the above Object, write a for...in loop that will iterate through it 
// and print out the value of the property if the property starts with the letter r, 
// or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
for(item in statistics){
    if( (item[0]=='r') || (statistics[item]%2==1)){
        console.log(statistics[item]);
    }
}