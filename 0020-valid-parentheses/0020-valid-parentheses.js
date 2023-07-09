/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 1) {
    return false;
  }

  let pair = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in pair) {
      st.push(s[i]);
    } else {
      if (st.length === 0) {
        return false;
      } else {
        if (s[i] !== pair[st.pop()]) {
          return false;
        }
      }
    }
  }

  return st.length === 0;
};