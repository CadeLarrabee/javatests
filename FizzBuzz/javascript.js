function fizzbuzz(inputNum){
    for(let i = 1; i < inputNum; i++)
    {
        if(i%3==0){
            console.log("Fizz");
        }
        if(i%5==0){
            console.log("Buzz");
        }
        console.log(i);
    }
}
fizzbuzz(parseInt(prompt("Fizzbuzz Number?")));
console.log("test");