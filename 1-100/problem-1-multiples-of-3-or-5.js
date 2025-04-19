function multiplesOf3Or5(number) {
  let sum = 0;

  for(let i=3;i<number;i+=3){
    sum+=i;
  }
  for(let j=5;j<number;j+=5){
    if(j % 3 != 0){
      sum+=j;
    }
  }
  return sum;
}

multiplesOf3Or5(10);