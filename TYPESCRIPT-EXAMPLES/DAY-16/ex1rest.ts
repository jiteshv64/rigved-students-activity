// here x and y would by of any type
function sum1(x, ...y) {
  let result = x;
  for(let i of y) {
    result = result + i ;
  }
  return result;
}

// here x and y must have numbers
function sum2(x: number, ...y: number[]) : number {
  let result = x;
  for(let i of y){
    result = result + i;
  }
  return result;
}

let r = sum1(10, "20", "30", 40);
document.write(`<p>Result : ${r}</p>`);

let r2 = sum2(10, 20, 30, 40);
document.write(`<p>Result : ${r2}</p>`);