//  Value of this

//Every execution context also has a special variable this.It points to an object to which the current code that’s being executed belongs.
//then this gets set to a leading parent object of a function call.
// If there is no leading parent object, this defaults to the global object (undefined in strict mode).

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
