// let i=1
// var ans =new Promise( (res, rej) => {
//   if (5 <= i) {
//     return res()
//   }
//   return rej()
// }
// )

// ans.then(() => {
//   console.log("resoleve")
// }).catch(() => {
//   console.log("reject")
// })

let human = {
  canFly:false,
  canTalk:true
}
let students = {
  isStudent:true
}
students.__proto__ = human
console.log(students.canFly)
