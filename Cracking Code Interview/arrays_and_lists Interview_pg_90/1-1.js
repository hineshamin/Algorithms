s = 'hello';

//Brute Force
// function uniqueString(s) {
//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

//If can use another data structure
// function uniqueString(s) {
//   return new Set(s).size === s.length;
// }

//Sort and then search
console.log(s.sort());

console.log(uniqueString(s));
