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
    
    bool helper(TreeNode* root, TreeNode* left, TreeNode* right){
        if(!root)
            return true;
        if(left and root->val <= left->val)
            return false;
        if(right and root->val >= right->val)
            return false;
        
        return helper(root->left, left, root) and helper(root->right, root, right);
    }
    
    bool isValidBST(TreeNode* root) {
        if(!root)
            return true;
        return helper(root, nullptr, nullptr);
    }
};