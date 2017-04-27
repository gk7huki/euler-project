var fib = function(n) {
  if (n < 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
};

var sum = 0;
for (var i=2; i<40; i+=3) {
  var f = fib(i);
  if (f > 4000000) {
    break;
  }
  sum += f;
}

console.log(sum);
