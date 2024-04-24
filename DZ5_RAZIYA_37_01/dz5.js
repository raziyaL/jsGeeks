let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tegCount = {};


for(let tag of tags) {
    if (tegCount[tag]) {
        tegCount[tag]++;
    } else {
        tegCount[tag] = 1;
    }
}

let keys= Object.keys(tegCount)
let ar = keys.map(key =>[key, tegCount[key]])
console.log(ar.sort((n1, n2)=> n2[1]-n1[1]))




function userInfo(surname, name, otch){
    let nameIndex = name[0]
    let otchIndex = otch[0]
    return `${surname} ${nameIndex}. ${otchIndex}.`
}

console.log(userInfo('Bekova', 'Aidana', 'Bekovna'))

function books(...books){
    let nameBooks = books.filter(book =>book.includes('y'))
    let booksX = books.filter(book=>!book.includes('y'))

console.log(nameBooks)
console.log(booksX)
}
books('One day', 'Harry Potter', 'Mary Poppins','The Great Gatsby','Tom Sawyer', 'Sherlok Holmes', 'Alice in Wonderland' )



let users = [
    {
        name: 'Alice',
        BD: '12 February'
    },
    {
        name: 'John',
        BD: '3 may'
    },
    {
        name: 'Kate',
        BD: '9 September'
    },
    {
        name: 'Sam',
        BD: '17 August'
    },
    {
        name: 'Frank',
        BD: '25 December'
    }
]
let us = users.map(user => ({
    name: user.name,
    BD: user.BD
}));

us.forEach(user => {
    console.log(`user name ${user.name}, user's birthday ${user.BD}`);
});





