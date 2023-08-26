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
    bool hasPathSum(TreeNode* root, int targetSum) {
        if(!root and !targetSum)
            return false;
        return helper(root, targetSum);
    }
    
    bool helper(TreeNode* root, int targetSum){
        if(!root)
            return false;
        if(!root->left and !root->right and !(targetSum-root->val))
            return true;

        return helper(root->left, targetSum-root->val) or helper(root->right, targetSum-root->val);
    }
};


//TC - O(n) as each node is being traversed only once
//SC - O(h) that is height of the tree and it would be taken by stack of the recursion call.