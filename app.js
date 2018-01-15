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

function decode(word)
{
    const newArray = word.split(" ");
    for (let i = 0; i < newArray.length; i++)
    {
        let newWord = newArray[i];
        let letterOne = newWord.substring(0,1);
    

    if (letterOne === 'a')
    {
        console.log(newWord.substring(1,2));
    }
    else if (letterOne === 'b')
    {
        console.log(newWord.substring(2,3));
    }
    else if (letterOne === 'c')
    {
        console.log(newWord.substring(3,4));
    }
    else if (letterOne === 'd')
    {
        console.log(newWord.substring(4,5));
    }
    else
    {
        console.log(" ");
    }
    }

}

decode('craft block argon meter bells brown croon droop');
beyonder(Infinity);

// If num is infinite(either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.
// Try the same function with a switch statement.

jediName("Zhou", "Yen");


