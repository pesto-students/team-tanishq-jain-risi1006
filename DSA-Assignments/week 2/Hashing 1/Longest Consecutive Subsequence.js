//put every digit in a set
//now traverse into given array and check if we get n-1 or n+1 in the set and 
//keep on deleting element if that exists and keep on maintaing max length

/*
Time complexity
Insertion in set - O(n)
Iteration in array and finding existing element and deletion - O(1)*O(n) -> O(n)


Overall complexity - 2xO(n) => O(n)
*/