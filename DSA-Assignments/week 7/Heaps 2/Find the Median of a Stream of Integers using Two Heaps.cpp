class MedianFinder {
public:
    //(first) 1, 2, 3, || (second) 4, 5, 6
    //to access middle element if it is broken into two parts then first must be returning max and second must return min
    //so first one is taken as max heap, and second one as min heap
    
    priority_queue<int> first;
    priority_queue<int, vector<int>, greater<int>> second;
    unordered_map<int, int> invalidate;
    MedianFinder() {

    }
    
    void addNum(int num) {
        if(invalidate[num] > 0){
            invalidate[num]--;
            return;
        }
        if(!second.empty() and second.top()<num){
            second.push(num);
            if(second.size() > first.size()+1){
                first.push(second.top());
                second.pop();
            }
        } else {
            first.push(num);
            if(first.size() > second.size()+1){
                second.push(first.top());
                first.pop();
            }   
        }
    }
    
    double findMedian() {
        if(first.size()>second.size())
            return (double)first.top();
        else if(second.size()>first.size())
            return (double)second.top();
        
        double ff = first.top();
        double ss = second.top();
        return (double)(ff+ss)/2;
    }
};