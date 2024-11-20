const myCount = document.getElementById("count");
console.log(myCount.innerText);
const evenOdd = document.getElementById("evenOdd");
const center = document.getElementById("center")
let a = 0;
function getEvenOdd() {
  if (a % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
function incr() {
  a++;
  evenOdd.innerText = getEvenOdd();
  myCount.textContent = a;
  center.innerText="";
}
function decr() {
  if(a-1<0){
    alert("Negative Number is not allowed.")
    return
  }
  a--;
  evenOdd.innerText = getEvenOdd();

  myCount.textContent = a;
}
function reset() {
  a = 0;
  evenOdd.innerText = "Odd/Even";

  myCount.textContent = a;
  center.innerText="Start Now";
}
