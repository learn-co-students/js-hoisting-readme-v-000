# Hoisting

## Objectives
+ Explain what hoisting is
+ Explain why hoisting is important to remember
+ Avoid the unintended consequences of function and variable hoistin


## What Is Hoisting

Hoisting is when variables and/or function declarations are hoisted or lifted to the top of the scope in which they were defined. JavaScript was originally intended to be written in a single file. When you're working on a large code base in a single file, you can't always define variables in the order in which you need them, which is why hoisting can be helpful.

Because we now write JavaScript in multiple files for large applications, hoisting can primarily get us into trouble.

## Variable Hoisting

While talking about hoisting, it's important to remember that JavaScript has function-level scope, which means that functions have access to variables that are defined outside of it, but any variables defined inside of a function are not accessible outside.

This is very different from Ruby. Let's take this example in Ruby:

```ruby
def my_method
  puts word
  word = "cake"
end
```
This code would blow up with the undefined method or variable error because we're using the variable `word` before it's defined.

Let's take the same example in JavaScript:

```js
function myFunction(){
  console.log(word)
  var word = "cake";
}
```
This JavaScript would print out `undefined`. That's because variable hoisting just raises the **variable declaration**. JavaScript reads the above code like this:

```js
function myFunction(){
  var word;
  console.log(word);
  var word = "cake";
}
```

We see `undefined` printed in the console because JavaScript reads the variable as declared, but not defined.

Let's start with an example of JavaScript accessing a variable inside a function that was defined outside:

```js
var snack = "granola bar";
function eat(){
  console.log(snack);
}
eat();
// prints out "granola bar" and returns undefined
```

Let's modify the function a little bit: 
```js
var snack = "granola bar";
function eat(){
  console.log(snack);
  var snack = "snickers";
}
eat();
// prints out undefined, returns undefined
console.log(snack);
// prints out "granola bar"
```

In the example above, we first define the variable `snack` to store `"granola bar"`. Then we define a function `eat`. Inside the function, we `console.log(snack)` (which we would expect to print out `"granola bar"` because of the variable definition outside the function). The following line, we define `snack` to store `"snickers"`.

That line, makes JavaScript read our function like this:

```js
function eat(){
  var snack;
  console.log(snack);
  var snack = "snickers";
}
```

So our function will print out to the console `undefined`. Our function returns `undefined` because we have explicitly given it a return value.

Outside the function, we call `console.log(snack)` which prints out `"granola bar"` because variables defined inside a function are scoped to that function.

Variable hoisting is important to remember because you want to define all variables at the top of the scope in which you need them. Define all variables at the top of your functions.

## Function Hoisting

### Function Declarations

Let's first start with an example in Ruby:

```ruby
eat

def eat
  puts "time to eat cake!!"
end
```

This code would immediately blow up in Ruby because we're trying to use the method `eat` before it's defined.

Let's translate that code to JavaScript:

```js
eat();

function eat(){
  console.log("time to eat cake!")
}
```

The above JavaScript executes correctly. The function prints out `"time to eat cake!"`. That's because JavaScript hoists the function to the top of it's scope, which in this case is the main scope of the program. JavaScript translate the above code to the following:

```js
function eat(){
  console.log("time to eat cake!")
}
eat();
```

### Function Expressions
Function expressions are handled differently than function declarations. Let's take an example:

```js
eat():

var eat = function(){
  console.log("time to eat cake!");
}
```

The above code errors with `Uncaught SyntaxError`. This is because function expressions are not hoisted to the top of the scope. JavaScript reads the above code like this:

```js
var eat;
eat();
eat = function(){
  console.log("time to eat cake!");
}
```

## Instructions

Make sure you run the tests in `spec/hoisiting_spec.js`. You'll be coding your solutions in `hoisting.js`. You'll find a bunch of pre-written broken code. Your job is to fix the code to pass the tests.

+ Use your knowledge of variable hoisting to get the function `callMe` to return `"maybe"`.

+ Use your function hoisting expertise to fix the function `thisIsCrazy` to `console.log` the string `"hey!!!"`.

+ Fix the code inside the function `sayMyName` to get the function to print out to the console `"Kristin"`.


## Resources

+ [Jon Grover's Hoisting Video](https://www.youtube.com/watch?v=nmlJIOnahBA&list=PLj148bJp5wiwI0291sD0vdXiwn1u6aQkc&index=3)
+ [Adequately Good](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
+ [Tuts Plus](http://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092)

