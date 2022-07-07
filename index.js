// var a = 'binar'
// var a = 'binar2'
// console.log(a);
//var bisa di declare ulang : result = binar2


// let b = 'binar3'
// let b = 'binar4'
// console.log(b);
//let tidak bisa di declare ulang : result error


// const c = 'binar5'
// const c = 'binar6'
// console.log(c);
//const tidak bisa di declare ulang : result error


//PRIMITIVE DATA TYPE
let nama = 'Dian'
console.log('nama: ', typeof(nama))

let usia = 30
console.log('usia: ', typeof(usia))

let menikah = true
console.log('menikah: ', typeof(menikah))

let sekolah
console.log('sekolah: ', typeof(sekolah));

let sekolah2 = null
console.log('sekolah2: ', typeof(sekolah));


var x = 'Apa Kabar'; 
console.log(x.length); 
console.log(x.indexOf('Dunia')); 
console.log(x.substr(5, 3)); 
console.log(x.slice(5, 8)); 
console.log(x.split(' '));



let a = parseInt('123');
let b = parseFloat('123');
let c = parseInt('1234.5678'); 
let d = parseFloat('1234.5678'); 
let e = parseInt('Halo Dunia'); 
let f = parseFloat('Halo Dunia'); 
console.log(a) 
console.log(b) 
console.log(c) 
console.log(d) 
console.log(e) 
console.log(f) 
console.log(typeof(a))



var usiaAyah= 60; 
var usiaBunda= 45;
console.log(usiaAyah* usiaBunda); // *= 
console.log(usiaAyah/ usiaBunda); // /=
console.log(usiaAyah+ usiaBunda);// +=
console.log(usiaAyah-usiaBunda); // -=
console.log(usiaAyah% usiaBunda); // %=



let time = new Date() 
console.log(time.getFullYear()) 
console.log(time.getMonth()) 
console.log(time.getDate()) 
console.log(time.getDay()) 
console.log(time.getHours()) 
console.log(time.getMinutes()) 
console.log(time.getSeconds()) 
console.log(time.getMilliseconds())