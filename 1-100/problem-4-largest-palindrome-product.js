function isPalindrome(n){
  let reverse = "";
  let nString = n.toString();

  for(let i = nString.length-1; i>=0; i--){
    reverse += nString[i];
  }
  if(nString === reverse){
    return true;
  }else{
    return false;
  }
}



function largestPalindromeProduct(n) { 
  let largestPalindrome = 0; 
  let largestNumberString = "";
  for(let i = 0; i < n; i++){
    largestNumberString += "9";
  }
  let largestNumber = parseInt(largestNumberString);
  for(let i = largestNumber; i > 1; i --){
    for(let j = largestNumber; j>1; j--){
      let product = i*j;
      if(isPalindrome(product)){
        if(largestPalindrome < product) {
          largestPalindrome = product;
        }
        console.log(`${i}x${j} = ${product}: `+largestPalindrome);
      }
    }
  }
  return largestPalindrome;
}
largestPalindromeProduct(3);