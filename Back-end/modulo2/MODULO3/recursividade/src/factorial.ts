export const factorial = (n: number): number => {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
  // exmplo com n=2 => 2* 1 *1
  // exmplo com n=3 => 3* 2* 1 *1
  // exmplo com n=4 => 4* 3* 2* 1 *1
};
