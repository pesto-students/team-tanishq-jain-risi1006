/*

1. Make a min heap
2. iterate into the array, if heap is empty or heap size is less than k, then insert else
3. if top is lesser then current element, then pop the top element and insert current element in the heap
4. return top of the heap

TC - 
1. Iteration of the array - O(n)
2. heapify operation - O(logk)
overall tc - nlogk

SC - we have a heap of size k then 
O(k)

*/