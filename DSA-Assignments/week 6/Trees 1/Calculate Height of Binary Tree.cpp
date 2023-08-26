/*
class Tree{
    int val;
    Tree *left;
    Tree *right;
};
*/


int calculateHeight(Tree* root){
    if(!root){
        return 0;
    }


    int leftSubtreeHeight = calculateHeight(root->left);
    int rightSubtreeHeight = calculateHeight(root->right);

    return 1 + max(leftSubtreeHeight, rightSubtreeHeight);
}