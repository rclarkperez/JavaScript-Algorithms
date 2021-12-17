function rot13(str) {
 let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", " ", "?", "!", "."]
 let rot13alphabet = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M", " ", "?", "!", "."]
 let strArr = str.split('')
 let translation = [];
 for (let i =0; i< strArr.length; i++) {
  for (let j =0; j <abc.length; j++) {
    if(abc[j] === strArr[i]) {
      translation.push(rot13alphabet[j])
    }
  } 
 }
 return translation.join('');
 }
