function addToZero (x,y) {
    if(x + y === 0){
        return true
    } else {
        return false
    }
}

let addtoZeroRuntime = "linear time, O(n)"/console.log(addToZero(3,2))
console.log(addToZero(0,0))





let isUnique = (str) => {
    const hash = {};
    for (const i in str) {
      if (hash[str[i]]) return false;
      hash[str[i]] = true;
    }
    return true;
  };
  
  console.log(isUnique('Louisiana'));
  console.log(isUnique('Dad'));







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

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

  console.log(isPangram("Butters is tan."))



  



  let randomArray = ["Kitties", "are", "better", "thank", "Goodness"]

  newArr = randomArray.sort(function(a, b) {return b.length - a.length})[0].length;
  console.log(newArr)

  
 