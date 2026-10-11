
let a = [10, 1, 20, 30, 44, 20, 15, 60];
let b = [5, 4, 8, 9, 99, 88, 4, 5]
let c=[]
let swap
let sum = 0
for (let i = 0; i < a.length; i++){

  //sum of array
  // sum = sum+b[i]+a[i]

  //find the small elem in array
  if (a[0] > a[i]) {
    swap = a[i]
  }

  //find big no in array
  // if (a[i] < a[i + 1]) {
  //   swap=a[i+1]
  // }
}

//remove small no in array
a.map((val) => {
  if (swap < val) {
    c.push(val)
  }
})
// console.log(a)
console.log(c)
  // console.log(swap)
