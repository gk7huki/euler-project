var divisors = [11, 13, 14, 16, 17, 18, 19, 20];
var n = 0;
for (var i = 2520;; i += 2520) {
  var divisible = true;
  for (var j in divisors) {
    if (i % divisors[j] !== 0) {
      divisible = false;
    }
  }
  if (divisible) {
    n = i;
    break;
  }
}

console.log(n);
