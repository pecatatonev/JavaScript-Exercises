function solve(towns){
    const allTowns = [];

    for (let index = 0; index < towns.length; index++) {
        let town = towns[index];
        

        town = town.split(' | ');

        let city = town[0];
        let latitude = Number(town[1]).toFixed(2);
        let longtitude = Number(town[2]).toFixed(2);

        createTown(city,latitude,longtitude,allTowns);
    }

    allTowns.forEach(element => { 
        console.log(`{ town: '${element.city}', latitude: '${element.latitude}', longitude: '${element.longtitude}' }`)
    })

    function createTown(city, latitude, longtitude,allTowns){
        const allTown = {
            city,
            latitude,
            longtitude
        }

        allTowns.push(allTown);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])