// Lesson video's code

function power(n, d) {
  let sum = 1;
  for (let i = 0; i < d; i++) {
    sum *= n;
  }
  return sum;
}

power(3, 5); //243

function sign(n) {
  if (n > 0) {
    return 1;
  } else if (n < 0) {
    return -1;
  } else {
    return 0;
  }
}
sign(0);

function number(A, B, C) {
  let D = B ** 2 - 4 * A * C;
  if (D > 0) {
    return "2ta ildiz";
  } else if (D < 0) {
    return "ildiz yoq";
  } else {
    return "1ta ildiz";
  }
}
number(1, -6, 9); // 1ta ildiz

function areacylce(R) {
  let S = Math.PI * R ** 2;
  return S;
}
areacylce(10); //314.*****

function sumrange(A, B) {
  let sum = 0;
  for (let i = A; i < B; i++) {
    sum += i;
  }
  return sum;
}
sumrange(8, 10); //27

function calc(A, B, S) {
  switch (S) {
    case "+":
      return A + B;
    case "-":
      return A - B;
    case "*":
      return A * B;
    case "/":
      return A / B;
    default:
      return 0;
  }
}
calc(7, 8, "+"); // 15

function iseven(K) {
  return K % 2 === 0;
}
iseven(10); //true

function sortabc(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  let = mid;
  if (a != max && a != min) {
    mid = a;
  } else if (b != max && b != min) {
    mid = b;
  } else {
    mid = c;
  }
  return `${min}, ${mid}, ${max}`;
}
sortabc(10, 5, 8); // 5,8 ,10

function ispower(K, N) {
  let sum = 1;
  while (sum < N) sum *= K;
  return sum;
}
ispower(3, 9); //true

function isprime(N) {
  let deviders = 0;
  for (let i = 2; i <= N; i++) {
    if (N % i == 0) {
      deviders++;
    }
  }
  return deviders == 1;
}
isprime(83); // true

function numberoff(N) {
  let primes = 0;
  for (let i = 2; i <= N; i++) {
    if (isprime(i)) {
      primes++;
    }
  }
  return primes;
}
numberoff(10); // 4

function digit(K, N) {
  let s = string(K);
  if (s.length < N) {
    return -1;
  }
  return s[N - 1];
}
digit(105782, 5); // 8

function invers(N) {
  return string(N).split("").reverse().join("");
}
invers(56814); // 42865

function palidrom(N) {
  return N == invers(N);
}
palidrom(121); //true

function factorial(N) {
  if (N < 0) {
    return 1;
  }
  let sum = 1;
  for (let i = 1; i <= N; i++) {
    sum *= 1;
  }
  return sum;
}
factorial(3); // 6

function getsum(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 == 0) sum += i;
  }
  return sum;
}
getsum(15); //45

function sumadd(N) {
  let odd = 0,
    even = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  return `${even}, ${odd}`;
}
sumadd(10); // 30 , 25

function invert(h, m, s) {
  return (h * 60 + m) * 60 + s;
}
invert(0, 6, 40); //400

function dectime(h, m, s) {
  let time = invert(h, m, s) - 1;
  let h = Math.floor(time / 60 / 60);
  let s = time % 60;
  let m = (time - 5) / 60 - h * 60;
  return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${
    10 ? "0" : ""
  }${s}`;
}
dectime(0, 6, 40);

// DOC homework

// Function 1:
function power(a, n) {
  return Math.pow(a, n);
}

// Function 2:
function mean(a, b) {
  let arithmetic = (a + b) / 2;
  let geometric = Math.sqrt(a * b);
  return `${arithmetic}, ${geometric}`;
}

// Function 3:
function sign(n) {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}

// Function 4:
function numberOfRoots(A, B, C) {
  let D = B * B - 4 * A * C;
  if (D > 0) return 2;
  if (D === 0) return 1;
  return 0;
}

// Function 5:
function areaCircle(R) {
  return Math.PI * R * R;
}

// Function 6:
function sumRange(A, B) {
  if (A > B) return 0;
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
}

// Function 7:
function calc(A, B, S) {
  if (S === "+") return A + B;
  if (S === "-") return A - B;
  if (S === "*") return A * B;
  if (S === "/") return B !== 0 ? A / B : 0;
  return 0;
}

// Function 8:
function isEven(K) {
  return K % 2 === 0;
}

// Function 9:
function sortABC(a, b, c) {
  let arr = [a, b, c].sort((x, y) => x - y);
  return `${arr[0]}, ${arr[1]}, ${arr[2]}`;
}

// Function 10:
function isPowerN(K, N) {
  while (K > 1) {
    if (K % N !== 0) return false;
    K /= N;
  }
  return K === 1;
}

// Function 11:
function isPrime(N) {
  if (N < 2) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

// Function 12:
function numberOfPrime(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

// Function 13:
function digitNth(K, N) {
  let str = K.toString();
  if (N > str.length) return -1;
  return parseInt(str[str.length - N]);
}

// Function 14:
function inverseNumber(N) {
  return parseInt(N.toString().split("").reverse().join(""));
}

// Function 15:
function isPalindrom(N) {
  return N.toString() === N.toString().split("").reverse().join("");
}

// Function 16:
function factorial(N) {
  if (N < 0) return 1;
  let fact = 1;
  for (let i = 1; i <= N; i++) fact *= i;
  return fact;
}

// Function 17:
function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) sum += i;
  }
  return sum;
}

// Function 18:
function sumOddEven(N) {
  let sumOdd = 0,
    sumEven = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) sumEven += i;
    else sumOdd += i;
  }
  return `${sumEven}, ${sumOdd}`;
}

// Function 19:
function invertTime(H, M, S) {
  return H * 3600 + M * 60 + S;
}

// Function 20:
function decTime(H, M, S) {
  let total = H * 3600 + M * 60 + S - 1;
  if (total < 0) total = 0;
  let h = Math.floor(total / 3600);
  let m = Math.floor((total % 3600) / 60);
  let s = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
    s
  ).padStart(2, "0")}`;
}

// Function 21:
function isLeapYear(Y) {
  return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
}

// Function 22:
function monthDays(M, Y) {
  return new Date(Y, M, 0).getDate();
}

// Function 23:
function prevDate(D, M, Y) {
  let date = new Date(Y, M - 1, D - 1);
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
}

// Function 24:
function nextDate(D, M, Y) {
  let date = new Date(Y, M - 1, D + 1);
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
}

// Function 25:
function getDividersNumberAndSum(N) {
  let sum = 0,
    count = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      sum += i;
      count++;
    }
  }
  return `${count}, ${sum}`;
}
