//SOAL 1
var number1 = prompt('number1')
var number2 = prompt('number2')
var hasilBagi = number1 / number2
var hasilKuadrat = Math.pow(number1,number2)
console.log('Hasil Bagi:', hasilBagi)
console.log('Hasil Kuadrat:', hasilKuadrat)
alert(`Hasil Bagi:  ${hasilBagi}`)
alert(`Hasil Kuadrat: ${hasilKuadrat}`)


//SOAL 3
let hariIni = new Date()
console.log('Tanggal Hari Ini: ', hariIni.toDateString())
alert(`Tanggal Hari Ini: ${hariIni.toDateString()}`)

let kemarin = new Date()
kemarin.setDate(kemarin.getDate() - 1)
console.log('Tanggal Kemarin: ', kemarin.toDateString())
alert(`Kemarin: ${kemarin.toDateString()}`)

let besok = new Date()
besok.setDate(besok.getDate() + 1)
console.log('Tanggal Besok :', besok.toDateString())
alert(`Besok: ${besok.toDateString()}`)


//SOAL 5
let text = prompt('Masukan Kata Apapun')
console.log('Jumlah Text: ', text.length)
alert(`Jumlah huruf dalam kata ${text} adalah: ${text.length}`)


