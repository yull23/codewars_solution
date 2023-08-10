const sequenceSum = (begin, end, step) => {
  //   No loop

  //   if (end <= begin) return 0;
  //   let n = Math.floor((end - begin) / step) + 1;
  //   let newEnd = (n - 1) * step + begin;
  //   return ((newEnd + begin) * n) / 2;

  //   with loop

  //   sum=0;
  //   for(let i=begin;i<=end;i+=step){
  //     sum+=i;
  //   }
  //   return sum;

  //   with recursion
  if (begin <= end) {
    return begin + sequenceSum(begin + step, end, step);
  }
  return 0;
};
// test
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
