function solve(input){
let parking = new Set();

for (let index = 0; index < input.length; index++) {
    const [command, number] = input[index].split(", ");

    if(command === "IN"){
        parking.add(number);
    }
    else if(command === "OUT"){
        parking.delete(number);
    }
    
}

const carNumbers = Array.from(parking).sort();

if(carNumbers.length == 0){
    console.log("Parking Lot is Empty");
}
else{
    carNumbers.forEach(e => console.log(e))
}
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])