var n = 600851475143;
var largest = 0;

while (n%2 === 0) {
  largest = 2;
  n /= 2;
}

for (var i=3; i<=Math.sqrt(n); i+=2) {
  while (n%i === 0) {
    largest = i;
    n /= i;
  }
}

if (n > 2) {
  largest = n;
}

console.log(largest);
