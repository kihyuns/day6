// // 1번부터 10번까지 반복문으로
//
// const arr = []
//
// for (let i = 1; i < 11; i++) {
//
//     arr.push(i)
// }
// console.log(arr)

//[70 60 55 75 95 90 80 80 85]

const arr = [70, 60, 55, 75, 95, 90, 80, 80, 85] //평균 구하기

let sum = 0

for (let i = 0; i < arr.length; i++) {

    sum += arr[i]

}
let avg = sum/arr.length
console.log(avg)