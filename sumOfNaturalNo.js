const sumOfNo = (val) => {
  let sum=0
  for (let i = 1; i <= val; i++){
    sum += i;
  }
    console.log("sum",sum)
  return val*(val+1)/2
}
console.log(sumOfNo(10))
