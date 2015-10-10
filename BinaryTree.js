var Node = function(value ) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
};

var BinaryTree = function () {
    this.root = null;
};

BinaryTree.prototype.Insert = function (value){
    for(var i=0; i<arguments.length; i++){
        if(!this.root) {
            this.root = new Node(value);
            return this;
        }
        else {
            (function insert(newNode){
                if(value < newNode.value) {
                    if(!newNode.left) {
                        newNode.left = new Node(value);  
                    } 
                    else {
                        insert(newNode.left);
                    }
                } 
                else 
                    if(!newNode.right) {
                        newNode.right = new Node(value);  
                    } 
                    else {
                        insert(newNode.right);
                    }
            })(this.root);
            return this;
        }
    }
};


BinaryTree.prototype.inOrderTraversal = function(){
    (function inorderTraversal(node) {  
    if(node.left) {
        inorderTraversal(node.left);
    }
    console.log(node.value);
    if(node.right) {
        inorderTraversal(node.right);
    }
})(this.root);
};

var bt = new BinaryTree();
    bt.Insert(25);
    bt.Insert(4);

    bt.inOrderTraversal();