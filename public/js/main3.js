//1
let multi = 5;
for (let i = 1; i <= 9; i++) {
    console.log(`${multi} x ${i} = ${multi*i}`);
}

console.log('____');
//2
for (let i = 1; i <= 9; i += 2) {
    console.log(`${multi} x ${i} = ${multi*i}`);
}

console.log('____');
///3

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}

console.log('____');
//4
let coding = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "mexence", "zulma"]
let longPrenom = [];
let petitPrenom = [];
coding.forEach(el => {
    if (el.length >= 5) {
        longPrenom.push(el)
    } else {
        petitPrenom.push(el)
    }
});

console.log(longPrenom);
console.log(petitPrenom);

console.log('____');
//5
let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grossesSommes = [];
let petiteSommes = [];

sommes.forEach(el => {
    if (el > 60) {
        grossesSommes.push(el)
    } else {
        petiteSommes.push(el)
    }
});

console.log(grossesSommes);
console.log(petiteSommes);

console.log('____');

//6
let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, ['tableau'], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach((el,i) => {
    if (typeof el == 'string') {
        console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
        typeString.push(el)
        // donnees.splice(i, 1)
        
    } else if (typeof el === 'number') {
        console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
        typeNumber.push(el)
        console.log(donnees);
        // donnees.splice(i, 1)

    } else if (typeof el == "object") {
        console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
        typeObject.push(el)

    } else {
        console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
        typeAutre.push(el)
    }
});

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);
console.log(donnees);