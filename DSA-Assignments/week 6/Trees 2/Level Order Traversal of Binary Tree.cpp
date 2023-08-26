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
    
    void levelOrderHelper(TreeNode* root, vector<vector<int>> &ans){
        queue<TreeNode*> q;
        q.push(root);
       
        while(!q.empty()){
            int len = q.size();
            vector<int> temp;
            
            for(int i=0; i<len; i++){
                TreeNode* tempNode = q.front();
                q.pop();
                temp.push_back(tempNode->val);
                if(tempNode->left)
                    q.push(tempNode->left);
                if(tempNode->right)
                    q.push(tempNode->right);
            }
            ans.push_back(temp);
        }
        
    }
    
    vector<vector<int>> levelOrder(TreeNode* root) {
        if(!root)
            return {};
        vector<vector<int>> ans;
        levelOrderHelper(root, ans);
        return ans;
    }
};