/*
1. take a min heap, insert all first element of each row with index number
2. take out the topmost element in the heap and decrease k by 1 and if k!=0, then push next element that row.
3. if k == 0 then return the topmost element of heap


TC - 
Heap size = rows of matrix(let M)
in worst case, k can be the last element 
hence total insertions = M+N (let N = number of columns)

hence total insertions tc = total insertions * heapify
= (M+N)logM



SC - size of heap = O(M) {let M = total number of rows}
*/