
// when a non number is ran by isNaN it should come back as true then return "Provide Integers", else if it comes back false it should combine the numbers. 
function doubleSum(x,y){
    if(x === isNaN() || y === isNaN()){
        return "Provide Integers"
    }else{
        return x + y;
    }
}