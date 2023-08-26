#include <bits/stdc++.h> 
/*************************************************************
    
    Following is the Binary Tree node structure:

	class BinaryTreeNode {
		
	public :
		int data;
		BinaryTreeNode* left;
		BinaryTreeNode* right;

		BinaryTreeNode(int data) {
		this -> left = NULL;
		this -> right = NULL;
		this -> data = data;
		}
	};

*************************************************************/

BinaryTreeNode* generateHeap(int ind, vector<int> &arr){
	if(ind >= arr.size()){
		return NULL;
	}

	BinaryTreeNode *newRoot = new BinaryTreeNode(arr[ind]);
	newRoot->left = generateHeap(2*ind + 1, arr);
	newRoot->right = generateHeap(2*ind + 2, arr);

	return newRoot;
}


void generateInorder(BinaryTreeNode* root, vector<int> &inorderTraversal){
	if(!root){
		return;
	}
	generateInorder(root->left, inorderTraversal);
	inorderTraversal.push_back(root->data);
	generateInorder(root->right, inorderTraversal);
}

BinaryTreeNode* convertBST(BinaryTreeNode* root)
{
	// Write your code here.
	vector<int> inorderTraversal;
	generateInorder(root, inorderTraversal);
	sort(inorderTraversal.begin(), inorderTraversal.end());
	return generateHeap(0, inorderTraversal);

}