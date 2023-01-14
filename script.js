// define variables
let checkBtn = document.querySelector('.checkBtn')
let message = document.querySelector('.message')


// make event listener for check btn
checkBtn.addEventListener('click', function(){
    check()
})

//default message displayed on page 
message.textContent = `Lets see what the future brings!`


function check(){
    let userInput = document.querySelector('.inputField').value.toLowerCase()
    if (userInput == 'monday' || userInput == 'tuesday') {
        console.log(userInput)
        message.textContent = `It is ${userInput}! BORRING!!`
    }

    else if (userInput == 'wednesday'){
        message.textContent = `It is ${userInput}! Ehhhhh :/`
    }

    else if (userInput == 'thursday'){
        message.textContent = `It is ${userInput}! Almost ;)`
    }

    else if (userInput == 'friday'){
        message.textContent =  `It is ${userInput}! It's lit!`
    }

    else if (userInput == 'saturday' || userInput == 'sunday') {
        message.textContent = `It is ${userInput}! It's the weekend!`
    }
}