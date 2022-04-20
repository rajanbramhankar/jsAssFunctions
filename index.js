console.log("working");

//Create one function with zero parameter having a console statement;

function element() {
    console.log("Question 1");
    
}
element();

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b) {
    console.log(`${a} + ${b} = ${a+b}`);
};

sum(3,4);

//Create one arrow function

let arrow = (A) =>{
    console.log(A);
};

arrow("Que 3.")

// Print output: 
var x = 21;
var girl = function () {
    console.log(x); 
    var x = 20;
};
girl ();//undefined

//Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//Print output

var x = 21;
a();//not defined
b();//not defined
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

//Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  answer = factorial(4);
  console.log(answer);





