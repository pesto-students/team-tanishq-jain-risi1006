/*

1. convert vowel to 1 and consonants to -1;
2. Take a hash map and iterate into an array and calculate prefix sum
3. If sum exists then update lenght with max(index-map[key], currLen);
4. else map[key] = index;

Time Complexity - 
a. Iterating and finding prefix sum - O(n)
b. searching and key insertion - O(1)

Overall complexity - O(n);

*/