function solve(inStock, orderedStock){
    let currProduct;
    let currQuantity;
    let store = {
    }

    for (let index = 0; index < inStock.length; index++) {
        if(index % 2 === 0){
            currProduct = inStock[index];
        }
        else
        {
            currQuantity = inStock[index];
            store[currProduct] = Number(currQuantity);
        }
        
        
    }

    for (let index = 0; index < orderedStock.length; index++) {
        if(index % 2 === 0){
            currProduct = orderedStock[index];
        }
        else
        {
            currQuantity = orderedStock[index];
            if(store.hasOwnProperty(currProduct)){
                store[currProduct] += Number(currQuantity);
            }
            else{
                store[currProduct] = Number(currQuantity);
            }
        }
    }

    Object.keys(store).forEach(key => {
         console.log(`${key} -> ${store[key]}`)
    })
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])