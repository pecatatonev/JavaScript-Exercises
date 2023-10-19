function solve(groupOfPeople, typeOfGroup, day)
{
    let totalPrice = 0;
    switch(typeOfGroup)
    {
        case 'Students':
            switch(day)
            {
                case 'Friday':
                    totalPrice = groupOfPeople * 8.45;
                    break;
                case 'Saturday':
                    totalPrice = groupOfPeople * 9.80;
                    break;
                case 'Sunday':
                    totalPrice = groupOfPeople * 10.46;
                    break;
            }

            if(groupOfPeople >= 30)
            {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Business':
            if(groupOfPeople >= 100)
            {
                groupOfPeople -= 10;
            }
            switch(day)
            {
                case 'Friday':
                    totalPrice = groupOfPeople * 10.90;
                    break;
                case 'Saturday':
                    totalPrice = groupOfPeople * 15.60;
                    break;
                case 'Sunday':
                    totalPrice = groupOfPeople * 16;
                    break;
            }

            
            break;
        case 'Regular':
            switch(day)
            {
                case 'Friday':
                    totalPrice = groupOfPeople * 15;
                    break;
                case 'Saturday':
                    totalPrice = groupOfPeople * 20;
                    break;
                case 'Sunday':
                    totalPrice = groupOfPeople * 22.50;
                    break;
            }

            if(groupOfPeople >= 10 && groupOfPeople <= 20)
            {
                totalPrice -= totalPrice * 5/100;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, "Students", "Sunday")