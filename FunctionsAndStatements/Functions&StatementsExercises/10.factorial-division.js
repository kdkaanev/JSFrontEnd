function factorialDivision(num1,num2){
    let result = 0
    result = rFact1(num1) / rFact2(num2)
    console.log(result.toFixed(2))
    function rFact1(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact1( num - 1 ); }
}
    function rFact2(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact2( num - 1 ); }
}
}
