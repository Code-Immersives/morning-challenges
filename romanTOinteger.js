// 1	I
// 2	II
// 3	III
// 4	IV
// 5	V
// 6	VI
// 7	VII
// 8	VIII
// 9	IX
// 10 X

const romanToInt = (s) => {
  let roman = {
    I: 1,
    V: 5,
    X: 10
  }
  let romanArray

  if (s.length === 1) {
    for (a in roman) {
      if (a === s) return roman[a]
    }
  }else if (s.length > 1) {
    romanArray = s.split('') // [ "I", "V" ]
    let lastRoman = romanArray[romanArray.length - 1]
    let firstRoman = romanArray[0]
    if(roman[firstRoman] > roman[lastRoman]){


    }
  }else{
    return "submit a roman numeral "
  }
}


const romanToInt = (s) => {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let total = 0  // "XXXIX" 39
  for(let i = 0; i < s.length ; i++){
      if(roman[s[i]]  >= roman[s[i+1]]){
        total += roman[s[i]]
      }else if ( roman[s[i]] < roman[s[i+1]]){
        total -= roman[s[i]]
      }else{
        total += roman[s[i]]
      }
  }
  return total
}

console.log(romanToInt('IV'))  // => 4
console.log(romanToInt('I'))  // => 1
console.log(romanToInt('V'))  // => 1
console.log(romanToInt('X'))  // => 1
