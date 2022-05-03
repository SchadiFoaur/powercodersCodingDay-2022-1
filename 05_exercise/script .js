let list = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];
function getLastValue(arry) {
  arry.map((arry) => arry.toLowerCase());
  arry.sort();
  let last = arry[arry.length - 1];
  return last;
}
console.log(getLastValue(list));
