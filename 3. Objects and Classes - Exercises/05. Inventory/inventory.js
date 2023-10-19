function solve(input){
    let heroes= [];

    input.forEach(h => {
        const [name, level, items] = h.split(" / ");
        heroes.push({
                name,
                level,
                items
            });
    });

    heroes.sort((l1,l2) => l1.level - l2.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\n level => ${hero.level}\n items => ${hero.items}`)
    });
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])