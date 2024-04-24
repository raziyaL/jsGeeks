const input = document.createElement("input");
const increment = document.createElement("button");
const decrement = document.createElement('button')
const reset = document.createElement('button')

input.value = 0
increment.innerHTML = 'incr'
decrement.innerHTML = 'decr'
reset.innerHTML = 'reset'

function valueColor(){
    const number = parseInt(input.value)
    if(number > 0){
        input.style.color = 'green'
    }else if(number < 0){
        input.style.color = 'red'
    }else{
        input.style.color = 'grey'
    }
}

function incrementValue ()  {
    input.value = parseInt(input.value) + 1;
    valueColor()
}
function decrementValue ()  {
    input.value = parseInt(input.value) - 1;
    valueColor()
}
function resetValue ()  {
    input.value = '0';
    valueColor()
}
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';


increment.addEventListener('click', incrementValue);
decrement.addEventListener('click', decrementValue);
reset.addEventListener('click', resetValue);
input.addEventListener('input', valueColor);
document.body.append(input, increment, decrement, reset)
valueColor()





const squareDiv = document.createElement('div');
squareDiv.style.margin = '0 auto'
squareDiv.style.width = '500px'
squareDiv.style.height = '100%'
squareDiv.style.border = '3px solid black'

const greenCircle = document.createElement('div');
greenCircle.style.border = '3px solid black'
greenCircle.style.width = '50%'
greenCircle.style.height = '35vh'
greenCircle.style.borderRadius = '50%'
greenCircle.style.margin = '10px auto'
greenCircle.style.backgroundColor = 'green'
const greenText =  document.createElement('h1');
greenCircle.append(greenText)
greenCircle.addEventListener('click',()=>{
    greenText.innerHTML = 'Go!'
    greenCircle.append(greenText)

})
const redCircle = document.createElement('div');
redCircle.style.border = '3px solid black'
redCircle.style.width = '50%'
redCircle.style.height = '35vh'
redCircle.style.borderRadius = '50%'
redCircle.style.margin = '10px auto'
redCircle.style.backgroundColor = 'red'
const redText = document.createElement('h1');
redCircle.append(redText)
redCircle.addEventListener('click',()=>{
    redText.innerHTML = 'Stop!'
    redCircle.append(redText)

})
const yellowCircle = document.createElement('div');
yellowCircle.style.border = '3px solid black'
yellowCircle.style.width = '50%'
yellowCircle.style.height = '35vh'
yellowCircle.style.borderRadius = '50%'
yellowCircle.style.margin = '10px auto'
yellowCircle.style.backgroundColor = 'yellow'
    const  yellowText = document.createElement('h1');
yellowCircle.append(yellowText)
yellowCircle.addEventListener('click',()=>{
    yellowText.innerHTML = 'Wait!'
    yellowCircle.append(yellowText)
})

document.body.append(squareDiv);
squareDiv.append(greenCircle, redCircle, yellowCircle)

