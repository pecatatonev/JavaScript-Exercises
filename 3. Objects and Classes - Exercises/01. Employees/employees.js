function solve(employees){
    
    let allEmployees = [];

    for (let index = 0; index < employees.length; index++) {
        let name = employees[index];
        createEmployee(name,allEmployees);
    }

    allEmployees.forEach(element => { 
        console.log(`Name: ${element.name} -- Personal Number: ${element.personal_number}`)
    });
   
    

    function createEmployee(name,allEmployees)
{
    const employee = {
        name,
        personal_number: name.length
    };

    allEmployees.push(employee);
}
}



solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])