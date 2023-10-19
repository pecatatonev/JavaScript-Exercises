function printCharactersInRange(char1, char2){

    let biggestChar;
    let smallestChar;
    if(char1.charCodeAt(0) > char2.charCodeAt(0)){
        biggestChar = char1.charCodeAt(0);
        smallestChar = char2.charCodeAt(0);
    }
    else
    {
        biggestChar = char2.charCodeAt(0);
        smallestChar = char1.charCodeAt(0);
    }

    const array=[]
    for(let i = smallestChar + 1; i < biggestChar; i++){
        let char =String.fromCharCode(i)
        array.push(char);
    }

    console.log(array.join(' '));
}

printCharactersInRange('C',
'#')