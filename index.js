'use strict'

let view;
function initialize() {
    let called = 0
    return () => {
      if (called > 0) {
        return;
      } else{
        called ++;
        view = 'View'
        console.log(`view has been set ${called} times.`)
      }
    }
}

const callOnce = initialize()
callOnce()
callOnce()
callOnce()
callOnce()
console.log(view);

// Without change "var" keyword to "let", we can solve this problem using
// IIFE (Immediately Invoked Function Expression)
const array = [1,2,3,4]
for (var i = 0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function() {
      console.log('index' + closureI)
    }, 3000)
  })(i)
}

