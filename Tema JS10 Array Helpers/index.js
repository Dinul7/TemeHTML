/*Creaza o funcție care primeste 2 parametri, un array, si un numar, si returneaza un alt array care reprezinta numerele din primul array care sunt divizibile cu numarul specificat.
Ex: 
  Input: filtreazaDivizibile([1,2,3,4,5,6,7,8], 2) 
  Output [2,4,6,8] */

// function filtreazaNumerele(array,nr){
//     let numereFiltrate=[]
//     array.forEach(function(arr){
//         if(arr%nr==0){
//             numereFiltrate.push(arr)
//         }
//     })
//     console.log(numereFiltrate)
// }

// filtreazaNumerele([1,2,3,4,5,6,7,8],2)


/*Creaza o functie care primeste ca parametru 2 array-uri, primul va fi un array cu mai multe
 numere, al doilea un array cu mai putine numere. Scopul functiei este sa afle daca toate elementele
  din array-ul mic sunt prezente in array-ul mare, si sa returneze true sau daca nu sunt, sa returneze false.

Exemple:
  Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [1, 2, 3]) 
  Output true

  Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [1, 2, 13]) 
  Output false

  Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [10, 13]) 
  Output false */

// function verificaIncluziuneArray(arrMare,arrMic){
//     let raspuns;
//     arrMic.forEach(function(el){
//         // console.log(el)
//         if(arrMare.includes(el)){
//            return raspuns=true;
//         }else{
//             return raspuns=false;
//         }
//     })
//     console.log(raspuns)
// }

// verificaIncluziuneArray ([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3]);
// verificaIncluziuneArray([1,2,3,4,5,6,7,8], [1, 2, 13])
// verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [10, 13]) 



function stergeElement(arr,element){
  let newArr=[]

 arr.filter(function(el){
  if(el != element){
    newArr.push(el)
  }
 })
 console.log(newArr)
}

stergeElement([1,2,3,4], [3]) 
/* */