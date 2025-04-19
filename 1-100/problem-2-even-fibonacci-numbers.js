function fiboEvenSum(n) {
  let fibo=[];
  let fiboSum = 0;
  for(let i=0;i<n;i++){
    if(i === 0){
      fibo[i] = 1;
    }else if(i === 1){
      fibo[i] = 2;
    }else{
      fibo[i] = fibo[i-1] + fibo[i-2];
    }
    if(fibo[i] % 2 === 0 && fibo[i] <= n){
      fiboSum+=fibo[i];
    }
  }
  console.log(fiboSum);
  return fiboSum;
}

fiboEvenSum(100000);