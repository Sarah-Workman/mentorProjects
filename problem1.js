
// create a function that will return true only when both banks have contacted or when both banks have not contacted, else return false. 
function bankContactSyncronization(firstBank, secondBank){
     return firstBank === secondBank;

     /* Taking if(fristBank === false,true && secondBank === false,true) and changing to the correct syntax you get:
     if ((firstBank === false && secondBank === false || fristBank === true && secondBank === true)). We take that logic of 
     "does the first bank value equal the second bank value" from that expression and use return firstBank === secondBank. 
     The code is a one line expression that meets our deliverables. One lines are easier to read and process faster. 
     */
    

}

 
