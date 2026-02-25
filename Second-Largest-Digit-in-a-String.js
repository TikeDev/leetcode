1/**
2 * @param {string} s
3 * @return {number}
4 */
5var secondHighest = function(s) {
6    let sSet = new Set();
7    for (let c of s){
8      if (+c == c) sSet.add(+c);
9    }
10
11    if (sSet.size < 2) return -1;
12
13    return Array.from(sSet).sort((a, b) => b-a)[1];
14};
15
16/*
17Input: alphanumeric string
18Output: 2nd largest digit that appears in s, -1 if doesn't exist
19
20- filter for numbers
21- if length === 1 return -1
22- sort them desc, add to set
23- if set.size < 1 return -1, return 2nd in set, 
24
25"dfa12321afd" => 2
26"abc1111" => -1
27
28*/