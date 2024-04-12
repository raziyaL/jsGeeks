// задание1
var tegs = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
    var tegCount = {}
for(var teg of tegs){
    if (tegCount[teg]){
        tegCount[teg]++;
    }else{
        tegCount[teg] = 1
    }
}
console.log(tegCount)
// задвние2
var array =  [2,3,4,5,234,654,45,789,876]


var sum = 0
var count = 0

for (var arraySum of array){
    if(sum += arraySum){
        count ++;
    }
    var numberSum = sum / count
}
console.log(numberSum)
//3
var book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    pages: 218
}
for(var key in book){
    console.log(`${ key }: ${ book [ key ]}`)
}
//4
var num =[42,17,89,53,29,6,89,16,37,55,23,8,41,37,2,5]
for(i = 0; i < num.length; i++){
    if (num[i] % 2 === 0 ){
        console.log(num[i])
    }
}


