1/**
2 * @param {number[]} houses
3 * @param {number[]} heaters
4 * @return {number}
5 */
6var findRadius = function(houses, heaters) {
7  let maxDist = 0;
8  
9  for (let house of houses){
10    let minHouseDist;
11    for (let heater of heaters){
12      let dist = Math.abs(house - heater);
13      if (minHouseDist != undefined)
14        minHouseDist = Math.min(dist, minHouseDist);
15      else 
16        minHouseDist = dist;
17    }
18    
19    maxDist = Math.max(minHouseDist, maxDist);
20  }
21
22  return maxDist;
23};
24/*Input: positions of houses[] and heaters[] on a horizontal line
25Output: minimum radius standard of heaters so heaters cover all house
26let mindists = [];
27
28- for each house, create obj
29  - house: house[i]
30  - dist[]: calc dists from each heater abs(house[i]-heater[i])
31  - calc mindists.push([Math.min(...dist)])
32
33- 
34
35Input: houses = [1,2,3,4], heaters = [1,4]
36{ house: 1, dist: [abs(1-1) => 0, abs(1-4) => 3], mindist: 0}
37{ house: 2, dist: [abs(2-1) => 1, abs(2-4) => 2], mindist: 1}
38{ house: 3, dist: [abs(3-1) => 2, abs(3-4) => 1], mindist: 1}
39{ house: 4, dist: [abs(4-1) => 3, abs(4-4) => 0], mindist: 0}
40max of mindist = 1
41
42{ house: 1, mindist: [abs(1-2) => 1]}
43{ house: 5, mindist: [abs(5-2) => 3]}
44max of mindist = 3
45
46houses = [1,5], heaters = [2]
47dist1 = 1
48dist2 = 3
49radius: 3
50
51
52*/