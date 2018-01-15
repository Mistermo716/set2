function jediName(firstName, lastName)
{
    const prefix = lastName.substring(0,3);
    const suffix = firstName.substring(0,2);

    return console.log(prefix + suffix);
}

//Write a function called beyond which takes a single argument, num and logs a different message depending on its value.
function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    }
    else if (num > 0) {
        console.log('To infinity');
    }
    else if (num < 0) {
        console.log('To negative infinity');
    }
    else {
    console.log('Staying home');
    }
}

function beyonder(num) {
    switch(true) {
        case num === Infinity:
            console.log('And beyond');
            break;
        case num > 0:
            console.log('To infinity');
            break;
        case num < 0:
            console.log('To negative infinity');
            break;
        default:
            console.log('Staying home');
    }
}

beyonder(Infinity);

// If num is infinite(either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.
// Try the same function with a switch statement.

jediName("Zhou", "Yen");


