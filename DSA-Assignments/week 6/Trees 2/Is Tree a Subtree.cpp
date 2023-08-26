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
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        string preOrder = "", inorder = "", subPreOrder = "", subInorder = "";
        generatePreorder(root, preOrder);
        generatePreorder(subRoot, subPreOrder);
        
        if(preOrder.find(subPreOrder) == string::npos)
            return false;
        generateInorder(root, inorder);
        generateInorder(subRoot, subInorder);
        
        if(inorder.find(subInorder) == string::npos)
            return false;
        return true;
    }
    
    void generatePreorder(TreeNode* root, string &preOrder){
        if(!root){
            preOrder += ",#";
            return;
        }
        preOrder += (","+to_string(root->val));
        generatePreorder(root->left, preOrder);
        generatePreorder(root->right, preOrder);
    }
    
    void generateInorder(TreeNode* root, string &inorder){
        if(!root){
            inorder += ",*";
            return;
        }
        generateInorder(root->left, inorder);
        inorder += (","+to_string(root->val));
        generateInorder(root->right, inorder);
    }
    
};