let rev = 0;
let numm = 12345678;
let last;

while (numm != 0) {
  last = numm % 10;
  rev = rev * 10 + last;
  numm = Math.floor(numm / 10);
}

console.log(rev);
