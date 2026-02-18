1/**
2 * @param {string} queryIP
3 * @return {string}
4 */
5var validIPAddress = function(queryIP) {
6
7  if (queryIP.length > 39 || queryIP === "") return "Neither";
8
9  let IPv4Nums = queryIP.split(".");
10  let IPv6Nums = queryIP.split(":");
11
12  if (IPv4Nums.length > 1 && IPv6Nums.length > 1) return "Neither";
13
14  // IPv4Nums
15  if (IPv4Nums.length === 4){
16    console.log("IPv4");
17    if (queryIP.length > 15) return "Neither";
18  //"172.16.254.1"
19
20    for(let word of IPv4Nums){
21      if (word === "") return "Neither";
22      if (word.length > 3) return "Neither";
23      if (word.length > 1 && word[0] === "0") return "Neither";
24
25      let wordDigs = word.split("");
26      for (let dig of wordDigs){
27        if (dig < "0" || dig > "9") return "Neither";
28      }
29
30      if (Number(word) < 0 || Number(word) > 255) return "Neither";
31    } 
32    return "IPv4";
33  }
34
35  // IPv6Nums
36  else if (IPv6Nums.length === 8) {
37    console.log("IPv6");
38
39    for(let word of IPv6Nums){
40      console.log(word);
41      if (word === "") return "Neither";
42      if (word.length > 4) return "Neither";
43      // check for hex
44      let wordChars = word.split("");
45      console.log(wordChars);
46      for (let char of wordChars){
47
48        if(!((char >= "0" && char <= "9") || (char.toLowerCase() >= "a" && char.toLowerCase() <= "f"))) return "Neither";
49      }
50    } 
51    return "IPv6";
52  }
53
54 return "Neither";
55};
56
57/*
58Input: string
59IPv4, each digit 0-255 w NO leading zeros
60IPv6, each digit sep by ONE :, hex string (case ins), length between 1 and 4, leading zeros allowed
61
62Output: format of string (or "Neither")
63
64Pseudocode:
65- first, check for IPv4 max 15
66 - split("."), check for elements with "", return "Neither"
67 - ["172", "16", "254", "1"]
68 - for each element
69  - check leading zeros: split("0")
70  - check if Number(num) >= 0 && Number(num) <= 255
71
72- IPv6 max 39
73  - split(":"), check for empty
74  - for each element
75    - every char alphanum (A-F) case ins, length betwen 1-4
76
77- return "Neither"
78
79Examples:
80Input: queryIP = "172.16.254.1"
81Output: "IPv4"
82Explanation: This is a valid IPv4 address, return "IPv4".
83
84Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
85Output: "IPv6"
86Explanation: This is a valid IPv6 address, return "IPv6".
87
88
89*/