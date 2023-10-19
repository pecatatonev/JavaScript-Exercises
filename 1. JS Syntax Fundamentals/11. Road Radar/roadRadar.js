function solve(speed, area)
{
    let IsInTheLimit = true;
    switch(area)
    {
        case 'motorway':
            if(speed <= 130)
            {
                console.log(`Driving ${speed} km/h in a ${'130'} zone`);
            }
            else
            {
                let diff = speed - 130;
                if(diff > 40)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'130'} - ${'reckless driving'}`);
                }
                else if(diff > 20)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'130'} - ${'excessive speeding'}`);
                }
                else
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'130'} - ${'speeding'}`);
                }
                
            }
            break;
        case 'interstate':
            if(speed <= 90)
            {
                console.log(`Driving ${speed} km/h in a ${'90'} zone`);
            }
            else
            {
                let diff = speed - 90;
                if(diff > 40)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'90'} - ${'reckless driving'}`);
                }
                else if(diff > 20)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'90'} - ${'excessive speeding'}`);
                }
                else
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'90'} - ${'speeding'}`);
                }
                
            }
            break;
        case 'city':
            if(speed <= 50 )
            {
                console.log(`Driving ${speed} km/h in a ${'50'} zone`);
            }
            else
            {
                let diff = speed - 50;
                if(diff > 40)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'50'} - ${'reckless driving'}`);
                }
                else if(diff > 20)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'50'} - ${'excessive speeding'}`);
                }
                else
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'50'} - ${'speeding'}`);
                }
                
            }
            break;
        case 'residential':
            if(speed <= 20)
            {
                console.log(`Driving ${speed} km/h in a ${'20'} zone`);
            }
            else
            {
                let diff = speed - 20;
                if(diff > 40)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'20'} - ${'reckless driving'}`);
                }
                else if(diff > 20)
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'20'} - ${'excessive speeding'}`);
                }
                else
                {
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${'20'} - ${'speeding'}`);
                }
                
            }
            break;
    }
}

solve(200, 'motorway');