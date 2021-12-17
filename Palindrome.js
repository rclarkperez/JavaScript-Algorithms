function palindrome(str) {
  let strArr = str.toLowerCase().replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split('');
  let reverseStr = [];
  for (let i=0; i<strArr.length; i++ ){
    reverseStr.unshift(strArr[i]);
  }
  if(strArr.join('') === reverseStr.join('')) {
  return true;
  }
  else {
    return false;
  }
}
