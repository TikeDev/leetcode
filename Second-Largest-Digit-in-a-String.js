1/**
2 * @param {string} s
3 * @return {number}
4 */
5var secondHighest = function(s) {
6    let sSet = new Set();
7    for (let c of s){
8      if (+c == c) sSet.add(+c);
9    }
10    if (sSet.size < 2) return -1;
11
12    sSet.delete(Math.max(...sSet))
13    return Math.max(...sSet)
14
15};
16