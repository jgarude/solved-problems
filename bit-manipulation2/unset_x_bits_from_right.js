const checkSetBitsCount = (N) => {
  let count = 0;
  for (let i = 0; i < N.toString(2).length; i++) {
    if ((N & (1 << i)) !== 0) {
      count = count + 1;
    }
  }
  return count;
};

checkSetBitsCount(20);
