
// call a function that will return true only when both banks have contact or when both banks have not contact 
function bankContactSyncronization(firstBank, secondBank){
    let acme = firstBank;
    let foo = secondBank;

    if(acme & foo == true){
        return true;
    }else if(acme & foo == false){
        return true;
    }else{acme || foo == true, false}{
        return false;
    }

}