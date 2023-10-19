function solve(input) {
const ticketLines = Number(input.shift());

const riders = [];

for (let index = 0; index < ticketLines; index++) {
  const tickets = input.shift().split("|");

  const rider = tickets[0];
  let fuelCapacity = Number(tickets[1]);
  if(fuelCapacity > 100){
    fuelCapacity = 100;
  }
  const position = tickets[2];
  riders.push(CreateRiders(rider, fuelCapacity, position));
  
}

let line = input.shift();

while(line != "Finish"){
  const lineParams = line.split(" - ");
  
  const command = lineParams[0];
  switch (command) {
    case 'StopForFuel':
      const rider = lineParams[1];
      const minimumFuel = Number(lineParams[2]);
      const changedPosition = lineParams[3];
      
      const neededRider = riders.find((r) => r.rider === rider);
      if(neededRider.fuelCapacity < minimumFuel){
        neededRider.position = changedPosition;
        console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
      }
      else{
        console.log(`${rider} does not need to stop for fuel!`)
      };
      break;

      case 'Overtaking':
      const rider1 = lineParams[1];
      const rider2 = lineParams[2];

      const neededRider1 = riders.find((r) => r.rider === rider1);
      const neededRider2 = riders.find((r) => r.rider === rider2);

      if(neededRider1.position < neededRider2.position){
        const position = neededRider1.position;
        neededRider1.position = neededRider2.position;
        neededRider2.position = position;
      }

      console.log(`${rider1} overtook ${rider2}!`)
      break;
      case 'EngineFail':
      const riderFail = lineParams[1];
      const lapsLeft = lineParams[2];

      const neededRiderFail = riders.find((r) => r.rider === riderFail);
      riders.splice(riders.indexOf(neededRiderFail), 1);

      console.log(`${riderFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
      break;
  }
  line = input.shift();
}

riders.forEach((r) =>{
  console.log(`${r.rider}
  Final position: ${r.position}`)
})

function CreateRiders(rider, fuelCapacity, position){

  const riderInfo = {
    rider : rider,
    fuelCapacity: fuelCapacity,
    position : position,
  };

  return riderInfo;
}
}

solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);