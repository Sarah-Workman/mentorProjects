
//create a function that will automate calender so that it returns true only when it is a weekday and not vaction. 
//true,false = true  false,true = false false,false = false true,true = false
function addMeeting(isWeekday, onVacation){
   
    if(isWeekday === true && onVacation === false){
        return true;
    }
    else{
        return false;
    }
}