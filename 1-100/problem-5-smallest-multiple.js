 //2520 /1 /2 /3 /4 /5 /n... rest: 0

function restZero(number,divisor){
  for(let i = 1; i<= divisor; i++){
    if(number % i != 0){
      return false;
    }
  }
  return true;
}

function smallestMult(n) {
  let count = 1;
  while(true){
    if(restZero(count,n)){
      break;
    }
    count++;
  }
  console.log(count);
  return count;
}

smallestMult(10);