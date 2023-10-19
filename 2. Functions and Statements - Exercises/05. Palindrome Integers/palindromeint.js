 function palidromeNumbers(numbers){
    const array=[];
   
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        function reversedNum(number) {
            return (
              parseFloat(
                number
                  .toString()
                  .split('')
                  .reverse()
                  .join('')
              ) * Math.sign(number)
            )                 
          }
        if(number === reversedNum(number)){
            array.push('true')
        }
        else array.push('false')
    }

    console.log(array.join("\r\n"))
}

 palidromeNumbers([32,2,232,1010])