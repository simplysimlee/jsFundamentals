//  Value of this

//Every execution context also has a special variable this.It points to an object to which the current code that’s being executed belongs.


/** CASE 1 **/

var globalThis = this

function myFunc () {  
  console.log('globalThis: ', globalThis);
  console.log('this inside: ', this);
  console.log(globalThis === this);
}

myFunc()

// globalThis: Window {...}
// this inside: Window {...}
// true
// here the there is no leading parent


//then this gets set to a leading parent object of a function call.
// If there is no leading parent object, this defaults to the global object (undefined in strict mode).
/** CASE 2 --> Leading parent **/

var globalThis = this

var myObj = {
  myMethod: function () {    
    console.log('globalThis: ', globalThis)
    console.log('this inside: ', this)
    console.log(globalThis === this)
    console.log(myObj === this)
  }
}

myObj.myMethod()

// globalThis: Window { ... }
// this inside: { myMethod: f }
// false
// true

/** Case 3 - **/

var myObj = {
  myMethod: function () {    
    console.log(this)
  }
}

var myFunc = myObj.myMethod
myFunc()

// this --> window
// when the function was executed at line 55 — not when it was created inside myObj, 
 //  not when it was assigned to myFunc — but when it was invoked, it did not have a reference to a parent object. This is why this defaulted to Window.
