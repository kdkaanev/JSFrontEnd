function solve(input){
    let result;
    let typeInput = typeof(input);
    if(typeInput === 'number'){
        result = input * input * Math.PI
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`)
    }
}