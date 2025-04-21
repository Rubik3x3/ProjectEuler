// 10 / 2 = 5
// 27 / 2 no entero
// 27 / 3 = 9
// 27 / 4 = 7 sí es primo 

//¿n es primo?
// si n es primo, return n
// si n no es primo

function isPrime(n){
  if(n <= 1){
    return false;
  }
  for(let i = 2; i<=(n/2); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  if(isPrime(number)){
    console.log(number);
    return number;
  }else{
    let count = 2;
    while(number > count){
      if(number % count === 0){
        let result = number / count;
        if(isPrime(result)){
          console.log(result);
          return result;
        }
      }
      count++;
    }
  }
}

largestPrimeFactor();