const people = ["shin","note","punim"];
const one = 1;
const str = "hello world";
const b = true ;

const employee = { 
    first: "shin",
    last: "wp"
};
 
function sayhello(person) {

    console.log("hello " + person.last);
}

console.log(typeof people);
console.log(typeof sayhello);
console.log(employee instanceof Array);

sayhello(employee);
