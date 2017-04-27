var palindrome = function(n) {
  var s = n.toString();
  if (s === s.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

var max = 0;
for (var i = 100; i < 1000; i++) {
  for (var j = i; j < 1000; j++) {
    var product = i * j;
    if (palindrome(product) && max < product) {
      max = product;
    }
  }
}

console.log(max);
