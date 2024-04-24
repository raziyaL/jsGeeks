var  numArray = (arrays) => {
    var count = 0
    var sum = 0
    for (var array of arrays){
        if(array > 0){
            sum += array;
            count++
        }
    }
    if(count === 0){
        console.log('fsfs')
    }else{
        var endCount = sum / count;
        console.log(endCount)
    }
}
numArray([2, -78, -45, -4, -7, -6, -10, 26, 30, 8])



//2
var square = (array) =>{
    var sumNum =0
    for (var i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumNum += array[i] ** 2;
        }
    }
    return sumNum;
    }
    array=[1, 2, 3, 4, 5, 6, 7, 8]
    result=square(array)
console.log(result)




//3
var files = (array)=>{
    for (var i = 0; i<array.length; i++) {
        var text = array[i].toLowerCase()
        if (text.includes('a') && text.includes('t')) {
            console.log(array[i])
        }
    }
}

files(['android', 'ios', 'frontend', 'javaScript', 'TAst', 'bascket']);







var btn = document.querySelector('#btn')
var span = document.querySelector('#span')
var count = 0
function plus () {
    count++
    span.innerHTML  = count
    console.log(count)
}
plus()
btn.onclick = () => plus()