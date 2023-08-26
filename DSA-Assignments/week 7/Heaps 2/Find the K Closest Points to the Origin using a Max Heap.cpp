class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        return quickSelect(points, k);
    }
    
    vector<vector<int>> quickSelect(vector<vector<int>> &points, int k){
        int left = 0, right = points.size()-1;
        int pivotIndex = points.size();
        
        while(pivotIndex != k){
            pivotIndex = partition(points, left, right);
            if(pivotIndex < k)
                left = pivotIndex;
            else
                right = pivotIndex-1;
        }
        
        return vector<vector<int>>(points.begin(), points.begin()+k);
    }
    
    int partition(vector<vector<int>> &points, int left, int right){
        vector<int> pivot = choosePivot(points, left, right);
        int dist = squareDistance(pivot);
        
        while( left <= right){
            if(squareDistance(points[left])>=dist){
                swap(points[right], points[left]);
                right--;
            }else{
                left++;
            }
        }
        if(squareDistance(points[left])<dist)
            left++;
        return left;
    }
    
    vector<int> choosePivot(vector<vector<int>>& points, int start, int end){
        int mid = (end - start)/2;
        return points[mid];
    }
    
    int squareDistance(vector<int> A){
        return A[0]*A[0] + A[1]*A[1];
    }
};