// задание2

var color = prompt('choice color')

if ( color === "зеленый" ){
    alert( "вперед в путь");
}else if( color === "красный" ){
    alert( "стойте на месте" );
}else if( color === "желтый" ){
    alert( "ожидайте" );
}else{
    alert("неправильный выбор");
}


//задание 1

var userName = prompt('please enter your name')
var surname = prompt('please enter your surname')


if 
(
    userName.charAt(0) === userName.charAt(0).toLowerCase() && surname.charAt(0) === surname.charAt(0).toLowerCase()){
    userName = userName.charAt(0).toUpperCase() + userName.slice(1)  
     surname = surname.charAt(0).toUpperCase() + surname.slice(1)
}


alert( "Здравствуйте" + ' ' + userName + ' ' + surname + "!" )
    console.log( userName + ' '+ surname )


