
// create a function that will return true only when both banks have contacted or when both banks have not contacted, else return false. 
function bankContactSyncronization(firstBank, secondBank){
      let tests = [firstBank === true && secondBank === true, firstBank === false && secondBank === false];
    

    
  //what I can't do...
  //1)I can't have two returns without a if check 
  //2)if I give the expression a true,false it ignores the first one. 
  //3)if I place the expression in a variables and return the variables...
  // it returns true for the test2 and not test1. 
  //4) If I put the expression in an array it test both expressions and returns two answers for each test. 
  //So say both bank did not contact, it would say [true, false]. Would two answers be appropriate here?

  
        return tests;

}

 
