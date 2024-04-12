//задание1

var array = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
for( i = 0; i < array.length; i ++ ){
    if(array[i] % 2 === 0){
        console.log(array[i])
    }
}
//задание 2

var cinema = {
    movies: [
         {
            name: 'Avatar',
            genre: 'fantasy',
            premierData: '17-12-2009',
            time: 178,
            actors: ['zoe soldana', 'sam wortington', 'Sigourney Weaver',],
            price: 280,
            format: '3D'
        },
         {
            name: 'Titanic',
            genre: ['romanric', 'adventure',],
            premierData: '19-12-1997',
            time: 194,
            actors: ['leonardo dicaprio', 'keyt winslet', 'billi zeyn',],
            price: 250,
            format: '2D' 

        }
    ]
}
console.log(Object.entries(cinema.movies))
console.log(cinema.movies[1].name)
console.log(cinema.movies[0].name)
console.log(cinema.movies[0].actors)


// задание 3

var number = prompt('enter enyone number')
switch(parseInt(number)){
    case 1: 
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VШ");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    case 10:
        console.log("X");
        break;
    case 11:
        console.log("XI");
        break;
    case 12:
        console.log("XII");
        break;
    case 13:
        console.log("XIII");
        break;
    case 14:
        console.log("XIV");
        break;
    case 15:
        console.log("XV");
        break;
    default:
        console.log('неверное число')
}