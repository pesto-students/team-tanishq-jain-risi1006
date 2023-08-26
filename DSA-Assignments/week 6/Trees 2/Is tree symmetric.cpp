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
    
    bool isSymmetricHelper(TreeNode* p, TreeNode* q){
        if(!p and !q)
            return true;
        if((!p or !q) or (p->val != q->val))
            return false;
        
        return isSymmetricHelper(p->left, q->right) and isSymmetricHelper(p->right, q->left);
    }
    
    bool isSymmetric(TreeNode* root) {
        if(!root)
            return true;
        return isSymmetricHelper(root->left, root->right);
    }
};