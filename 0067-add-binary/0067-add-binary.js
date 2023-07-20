/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//   let tempA = BigInt(0), tempB = BigInt(0);
//   let i = 0, j = 0;
//   while(i < a.length || j < b.length) {
//       if (i !== a.length) {
//           tempA = tempA * BigInt(2) + BigInt(a[i]);
//           i++;
//       }

//       if(j !== b.length) {
//           tempB = tempB * BigInt(2) + BigInt(b[j]);
//           j++;
//       }
//   }
//   return (tempA + tempB).toString(2);

  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};