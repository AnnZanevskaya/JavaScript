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
     for(var i=0; i < arguments.length; i++){
        if(!this.root) {
            this.root = new Node(arguments[i]);
        }
        else {
          var value = arguments[i];
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
        }
    }
  return this;
};

BinaryTree.prototype.GetNode = function(value) {
    var node = this.root;
    var get = function(node) {
        if (!node) return null;
        if (value === node.value) {
            return node;
        } else if (value > node.value) {
            return get(node.right);
        } else if (value < node.value) {
            return get(node.left);
        }
    };
    return get(node);
};

BinaryTree.prototype.DeleteNode = function(node){
    
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

var NewBinaryTree = function(){
    BinaryTree.apply(this,arguments);
};

function extend(child, parent){
    var Temp = function(){};
    Temp.prototype = parent.prototype;
    child.prototype = new Temp();
    child.prototype.constructor = child;
    child.superclass = parent.prototype;
    return child;
}

extend(NewBinaryTree, BinaryTree);



var bt = new NewBinaryTree();
    bt.Insert(25,4, 5, 92);

    var node = bt.GetNode(3);
    console.log("node");console.log(node);

console.log("order");
    bt.inOrderTraversal();