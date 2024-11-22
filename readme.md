
                           Javascript
                          Assignment-9
1. Explain the scope in Javascript.

                   Scope determines the accessibility (visibility) of variables.
                   JavaScript variables have 3 types of scope:

*** Block scope:the scope of variables and functions that are defined within a block of code, such as within a pair of curly braces {}

*** Function scope:the variable declared within a function are visible only within that function\

*** Global scope :The Javascript global scope is the context where everything in a Javascript program executes by default. This scope includes all variables, objects, and references that are not contained within a customized scope defined by a programmer. Global scope is the entire Javascript execution environment.



2. What is a callback?
                     A callback function is a function passed as an argument to another function, which is invoked within the latter function, usually for asynchronous tasks or to customize behavior.

3. Explain context in JavaScript
                     JavaScript Execution Context is the environment in which JavaScript code is executed. It contains information about the variables, functions,  and objects that are available to the code being executed, as well as the scope chain and the value of the 'this' keyword


4. What is hoisting in JavaScript?
                    It is a mechanism were the declaration of variables and function are taken to the top of the scope before the execution of code. 

5. Explain lexical scope
                     .  The area where the variables and their values are accessibleduring the execusion of code.

6. What is scope chaining?
                          The scope chain in JavaScript is formed when functions are nested within other functions. Each function in JavaScript has access to its own variables, as well as variables from its parent functions. This forms a chain of scopes that allows inner functions to access variables from outer functions.

7. Explain closure.
             It is the combination of function  and its lexical enviornment within which the function is declared.

8. What is the difference between undefined and not defined in javascript.
                                        
  .  undefined :-  A variable that has been declared but not assigned a value is undefined .

  .  not defined :- A variable that has not been declared at all is not defined .

9. Explain spread and rest operator.

                              .  spread operator :-   The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.
  
  .   rest operator :-The Rest Operator
While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring. It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation.



10. Explain ‘this’ keyword in Javascript.

                             
  .  The 'this' keyword refers to the context where a piece of code, such as a function's body, is supposed to run .
