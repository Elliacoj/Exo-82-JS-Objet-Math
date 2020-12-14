console.log(Math.floor(34.589456));
console.log(Math.floor(68.412784));
console.log(Math.ceil(39.456));
console.log(Math.ceil(27.34876541));
console.log(Math.round(5.68));
console.log(Math.round(5.41));
console.log(Math.trunc(6.12457));
console.log(Math.trunc(9.568124));

function valeur(exo) {
    if(exo === "exo9") {
        return Math.min(5, 1 , 12, -1, 45) ;
    }
    else if(exo === "exo10") {
        return Math.min(9, 12, 16, 44, 3);
    }

    else if(exo === "exo11") {
        return Math.max(5, 1, 12, -1, 45);
    }

    else if(exo === "exo12") {
        return Math.max(9, 12, 16, 44, 3);
    }
}
console.log(valeur("exo9"));
console.log(valeur("exo10"));
console.log(valeur("exo11"));
console.log(valeur("exo12"));

console.log(Math.abs(-6));
console.log(Math.abs(-56));