function doubleSum(x,y){
    try { if(x === Number && y === Number){
        return x + y; }
         else if(x === isNaN || y === isNaN){
             return "Provide integers";
         }
        
    } catch (error) {
        return "Provide integers"
        
    }
           
}