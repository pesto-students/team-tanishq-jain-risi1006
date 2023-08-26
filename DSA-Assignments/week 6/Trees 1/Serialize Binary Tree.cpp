void generatePreorder(TreeNode* root, string &preorderTraversal){
        //NLR
        if(!root){
            preorderTraversal += "null ";
            return;
        }
        preorderTraversal += (to_string(root->val) + " ");
        generatePreorder(root->left, preorderTraversal);
        generatePreorder(root->right, preorderTraversal);
    }
    
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        string preorderTraversal = "";
        generatePreorder(root, preorderTraversal);
        return preorderTraversal;
    }