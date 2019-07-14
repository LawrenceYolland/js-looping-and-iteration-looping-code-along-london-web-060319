// Code your solutions in this file

// For loop
function writeCards(array, eventName) {
    let newArray = new Array;
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    };
    return newArray;
};

// While loop
function countdown(num) {
    while (num!=-1) {
        console.log(num--);
    };
};
