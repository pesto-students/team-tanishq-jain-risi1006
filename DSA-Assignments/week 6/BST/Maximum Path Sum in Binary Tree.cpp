/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    
    int ans = INT_MIN;
    
    int maxPathSumHelper(TreeNode* root){
        
        if(!root)
            return 0;
        
        // if(root and !root->right and !root->left)
        //     return root->val;
        
        int leftSum = max(0, maxPathSumHelper(root->left));
        int rightSum = max(0, maxPathSumHelper(root->right));
        
        int tempAns =  (leftSum+root->val+rightSum);
        ans = max(ans, tempAns);
        return root->val + max(leftSum, rightSum);
    }
    
    int maxPathSum(TreeNode* root) {
        if(!root)
            return 0;

        int finalAns = max(ans, maxPathSumHelper(root));
        return ans;
    }
};