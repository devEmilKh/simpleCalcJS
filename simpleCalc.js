/* eslint-disable no-unused-vars */
function number(num, func) {
    if (func === undefined) {
          return num;
      } else {
          return func(num);
      }
  }
  
  
  function zero(func) {
      return number(0,func);
  }
  function one(func) {
      return number(1,func);
  }
  function two(func) {
      return number(2,func);
  }
  function three(func) {
      return number(3,func);
  }
  function four(func) {
      return number(4,func);
  }
  function five(func) {
      return number(5,func);
  }
  function six(func) {
      return number(6,func);
  }
  function seven(func) {
      return number(7,func);
  }
  function eight(func) {
      return number(8,func);
  }
  function nine(func) {
      return number(9,func);
  }
  

  function plus(right) {
    return function(left) { 
        return left + right;
     };
  }
  function minus(right) {
    return function(left) {
          return left - right;
      };
  }
  function multiply(right) {
    return function(left) { 
        return left * right; 
    };
  }
  function split(right) {
    return function(left) { 
        return left / right; 
    };
  }