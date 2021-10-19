// let multiplicateur = 5
// for (let index = 0; index < multiplicateur; index++) {
//     let result = multiplicateur*index
//     console.log(`${multiplicateur}x${index}= ${result}`);   
// }


//exo2
// let multiplicateur = 5
// for (let index = 0; index < multiplicateur; index=index+2) {
//     let result = multiplicateur*index
//     console.log(`${multiplicateur}x${index}= ${result}`);   
// }


//exo3
// let count = 0
// for (let index = 20; index >= count; index--) {
//     if (index%2==0) {
//     console.log(`tour ${index}`);    
        
//     }
// }


// exo4
// let nom =["1234", "1234567", "123", "123456", "12"]
// nom.forEach(el => {
//     let longPrenoms
//     if (nom.) {
        
//     }
// });


//exo5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61]
// let grossesSommes=[];
// sommes.forEach(el => {
//     if (el>60) {
//         grossesSommes.push()
//         console.log(grossesSommes);
//     }
// });

// exo6
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(el => {
    if (typeof(el)==true) {
        donnees.push(typeString)
        console.log(typeString);
    }
});