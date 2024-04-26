const input = document.querySelector('#userNumber')
const button = document.querySelector('#showButton')
const message = document.querySelector('#message')

const randomNum = Math.floor(Math.random() * 100 ) + 1;

let click = 0;

console.log(randomNum)

button.addEventListener('click',() => {
    click++;

    const userGuess = parseInt(input.value)

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        message.textContent = 'please enter a valid number'
        message.style.color = 'red'
        return
    }

    if(userGuess < randomNum){
        message.innerHTML = 'число больше'
        message.style.color = 'green'
    }else if(userGuess > randomNum){
        message.innerHTML = 'число меньше'
        message.style.color = 'red'
    } else{
        message.innerHTML = 'you win!'
        message.style.color = 'black'
        message.innerHTML += '<br>Количество попыток ' + click
        input.disabled = true
        button.disabled = true
    }
})

