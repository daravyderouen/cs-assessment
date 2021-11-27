let arr = [3, 0, -3];
let arr2 = [2, 4, 6];
function addToZero (arr) {
    let sum = arr.reduce((a,b) => a+b,0)
    for(let i = 0; i <arr.length; i++){
        if (sum ==0){
         return true   
        }
        
    } 
        return false
    }
    
console.log(addToZero(arr))//prints true
console.log(addToZero(arr2))//prints false





let isUnique = (str) => {
    const hash = {};
    for (const i in str) {
      if (hash[str[i]]) return false;
      hash[str[i]] = true;
    }
    return true;
  };
  
  console.log(isUnique('Louisiana'));//prints false
  console.log(isUnique('Dad'));//prints true







  function isPangram (string) {
      let strArr = string.toLowerCase();
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

      for (let i = 0; i < alphabet.length; i++) {
          if(strArr.indexOf(alphabet[i]) < 0) {
              return false;
          }
      }

      return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));//prints true

  console.log(isPangram("Butters is tan."))//prints false







  let randomArray = ["Kitties", "are", "better", "thank", "Goodness"]

  newArr = randomArray.sort(function(a, b) {return b.length - a.length})[0].length;
  console.log(newArr)//prints 8

  
 