/*
1. Convert 0 to -1
2. keep on taking prefix sum in a variable and put values as a key into a map and the value would be the index
3. put only if key doesn't exist. 
4. if key already exists then find curr index - map[key] and update the ans



Time Complexity - 
1. Iterating in an array and calculating prefix sum - O(n)
2. searching and insertion in hash table - O(1)

Overall time complexity - O(n)

*/