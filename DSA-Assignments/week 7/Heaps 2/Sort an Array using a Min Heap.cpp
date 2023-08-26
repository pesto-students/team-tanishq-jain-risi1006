/*
Author : Ritesh Singh
*/
#include<bits/stdc++.h>
using namespace std;

int32_t main()
{
    vector<int> arr = {1, 4, 5, 6, 2, 5, 9};
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for(int ele : arr){
        minHeap.push(ele);
    }

    vector<int> sortedArr;
    while(!minHeap.empty()){
        sortedArr.push_back(minHeap.top());
        minHeap.pop();
    }

    return sortedArr;
}