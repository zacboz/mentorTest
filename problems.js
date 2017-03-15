//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {

  reverseIt: function(str){
    var s;
    s = str.split('');
    s = s.reverse();
    s = s.join('');
    return s;
  },

  //finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (duplicates.indexOf(arr[i]) === -1) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  //finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str){
    var words = str.toLowerCase().split(' ');
    for(var i = 0; i < words.length; i++){
      var letters = words[i].split('');
      for(var j = 0; j < letters.length; j++){
        letters[0] = letters[0].toUpperCase();
      }
      words[i] = letters.join('');
    }
    return words.join(' ');
  },

  //finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str){
    return (str.match(/[aeiou]/ig)||[]).length;
  },

  //finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    if(num <= 0){
      return false;
    } else {
      for(var i = 2; i < num; i++){
        if(num % i === 0){
          return false;
        }
      }
      return true;
    }
  }

  //finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not
}
