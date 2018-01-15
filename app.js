function jediName(firstName, lastName) {
    const prefix = lastName.substring(0, 3);
    const suffix = firstName.substring(0, 2);

    return console.log(prefix + suffix);
}

//Write a function called beyond which takes a single argument, num and logs a different message depending on its value.
function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else {
        console.log('Staying home');
    }
}

function beyonder(num) {
    switch (true) {
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

function decode(word) {
    const newArray = word.split(" ");
    for (let i = 0; i < newArray.length; i++) {
        let newWord = newArray[i];
        let letterOne = newWord.substring(0, 1);


        if (letterOne === 'a') {
            console.log(newWord.substring(1, 2));
        } else if (letterOne === 'b') {
            console.log(newWord.substring(2, 3));
        } else if (letterOne === 'c') {
            console.log(newWord.substring(3, 4));
        } else if (letterOne === 'd') {
            console.log(newWord.substring(4, 5));
        } else {
            console.log(" ");
        }
    }

}

function monthDecoder(month) {
    switch (month) {
        case "January":
            console.log(`${month} has 31 days`)
            break;
        case "February":
            console.log(`${month} has 28 days`)
            break;
        case "March":
            console.log(`${month} has 31 days`)
            break;
        case "April":
            console.log(`${month} has 30 days`)
            break;
        case "May":
            console.log(`${month} has 31 days`)
            break;
        case "June":
            console.log(`${month} has 30 days`)
            break;
        case "July":
            console.log(`${month} has 31 days`)
            break;
        case "Auguest":
            console.log(`${month} has 31 days`)
            break;
        case "September":
            console.log(`${month} has 30 days`)
            break;
        case "October":
            console.log(`${month} has 31 days`)
            break;
        case "November":
            console.log(`${month} has 30 days`)
            break;
        default:
            console.log(`${month} has 31 days`)
            break;
    }
}



function rockGame(player1, player2) {
    if (player1 === 1 && player2 === 3) {
        console.log('Player 1 wins! Rock beats scissors.');
    }
    else if (player1 === 2 && player2 === 1) {
        console.log('Player 1 wins! Paper beats rock.');
    }
    else if (player1 === 3 && player2 === 2) {
        console.log('Player 1 wins! Scissors beats paper.');
    }
    else if (player1 === 3 && player2 === 1) {
        console.log('Player 2 wins! Rock beats scissors.');
    }
    else if (player1 === 1 && player2 === 2) {
        console.log('Player 2 wins! Paper beats rock.');
    }
    else if (player1 === 2 && player2 === 3) {
        console.log('Player 2 wins! Scissors beats paper.');
    }
    else 
        console.log('There is a draw.');
}

const player1 = Math.floor(Math.random() * 3);
const player2 = Math.floor(Math.random() * 3);

rockGame(player1, player2);

// rock = 1; paper = 2; scissors = 3;

//rock beats scissors -> 1 beat 3
//paper beats rock -> 2 bests 1
//scissors beats paper -> 3 beats 2







decode('craft block argon meter bells brown croon droop');
beyonder(Infinity);

// If num is infinite(either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.
// Try the same function with a switch statement.

jediName("Zhou", "Yen");

monthDecoder("January")