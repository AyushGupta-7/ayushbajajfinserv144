export const fibonacci = (n) => {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
};

export const filterPrimes = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter(isPrime);
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const hcf = (arr) => arr.reduce((a, b) => gcd(a, b));

export const lcm = (arr) =>
  arr.reduce((a, b) => (a * b) / gcd(a, b));
