/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocal(letters){
    let count = 0
    let result = []
    for(let i=0; i<letters.length; i++){
        if(letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u" ){
            count++
            result.push(letters[i])
        }
    }

    return result
}

const vocal2=(letters)=>{
    let count = 0
    let result = []
    for(let i=0; i<letters.length; i++){
        if(letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u" ){
            count++
            result.push(letters[i])
        }
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocal(word).length + "(" + vocal(word) + ")");
console.log(vocal2(word).length + "(" + vocal2(word) + ")");


//Risultato atteso se si passa 'javascript': 3 (a, a, i)