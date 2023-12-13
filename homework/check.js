let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true];
let value3 = ['Mars', 9, 'Apple'];

let result = value1.concat(value2).concat(value3);

for (let n = 0; n < result.length; n++) {
    for (let i = n+1; i < result.length; i++) {
        if(result[n] === result[i]) {
            console.log(result[n]);
        }
    }
}