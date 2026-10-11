
const noOfDigit = (val) => {
  val=Math.abs(val)
  let count=0
  do {
    count++;
    val = Math.floor(val / 10)
  } while (val > 0);
  // console.log("No oF Digit is : ",count)
  return count;
}
console.log(noOfDigit(111))
