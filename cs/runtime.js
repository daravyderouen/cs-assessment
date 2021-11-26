const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);//(a)-letter refers to in reference on which order I am running the test
const smallArray = getSizedArray(100);//(b)
const mediumArray = getSizedArray(1000);//(c)
const largeArray = getSizedArray(10000);//(d)
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
//perf.start();                     // Starts timer
//doublerAppend(extraLargeArray);
//let resultsAppend = perf.stop();  // Stops timer and save time results

//step 1(3a) Trying with tinyArray
//perf.start();                     // Starts timer
//doublerAppend(tinyArray);
//let resultsAppend = perf.stop();  // Stops timer and save time results

//step 1(3ab) Trying with tinyArray
//perf.start();                     // Starts timer
//doublerAppend(smallArray);
//let resultsAppend = perf.stop();  // Stops timer and save time results


//step 1(3ac) Trying with tinyArray
//perf.start();                     // Starts timer
//doublerAppend(mediumArray);
//let resultsAppend = perf.stop();  // Stops timer and save time results

//step 1(3dc) Trying with tinyArray
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results



// Try it with second function
//perf.start();
//doublerInsert(extraLargeArray);
//let resultsInsert = perf.stop();

// Step 1(3a)
//perf.start();
//doublerInsert(tinyArray);
//let resultsInsert = perf.stop();

// Step 1(3b)
//perf.start();
//doublerInsert(smallArray);
//let resultsInsert = perf.stop();

// Step 1(3c)
//perf.start();
//doublerInsert(mediumArray);
//let resultsInsert = perf.stop();


// Step 1(3d)
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();






//console.log('Results for the extraLargeArray');
//console.log('Results for the tinyArray') //step 1(3a)
//console.log('Results for the smallArray') //step 1(3b)
//console.log('Results for the mediumArray') //step 1(3c)
console.log('Results for the largeArray') //step 1(3d)
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
