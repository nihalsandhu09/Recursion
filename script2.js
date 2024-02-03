function fibonacci(n) {
    // Base case: fibonacci(0) = 0, fibonacci(1) = 1
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage:
  const fibResult = fibonacci(6);
  console.log(`Fibonacci of 6 is: ${fibResult}`);
  