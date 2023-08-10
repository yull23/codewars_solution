function theVar(theVariables) {
  return theVariables.charCodeAt(0) + theVariables.charCodeAt(2) - 96 * 2;
}

// test
console.log(theVar("d+g"));
