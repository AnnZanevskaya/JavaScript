var Node = function(value, parent) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
    return this;
};

var BinaryTree = function () {
    this.root = null;
};

BinaryTree.prototype.Insert = function (value){
     for(var i=0; i < arguments.length; i++){
        if(!this.root) 
            this.root = new Node(arguments[i]);
        else {
          var value = arguments[i];
            (function insert(newNode){ 
                if(value < newNode.value) {
                    if(!newNode.left) 
                        newNode.left = new Node(value, newNode);  
                    else 
                        insert(newNode.left);
                } 
                else 
                    if(!newNode.right) 
                        newNode.right = new Node(value, newNode);  
                    else 
                        insert(newNode.right);
            })(this.root);
        }
    }
  return this;
};

BinaryTree.prototype.GetNode = function(value) {
    var node = this.root;
    var get = function(node) {
        if (!node) return null;
        if (value === node.value) 
            return node;
            else if (value > node.value) 
                return get(node.right);
            else if (value < node.value) 
                return get(node.left);
    };
    return get(node);
};

//rewrite
BinaryTree.prototype.DeleteNode = function(value){
   for(var i=0; i < arguments.length; i++){
    var node = this.GetNode(arguments[i]);
    if(node){
        //if two children doesn't exist
      if(!node.left && !node.right){
          //to know is this node left for parent or right
        if(node.parent.left === node)
          node.parent.left = null;
        else 
          node.parent.right = null;
      }
      //if left child doesn't exist
      else if(!node.left) {
        if(node.parent){
        if(node.parent.left === node)
          node.parent.left = node.right;
        else 
          node.parent.right = node.right;
        }
        else this.root = node.right;
      }
      //if right child doesn't exist 
      else if(!node.right) {
        if(node.parent){
        if(node.parent.left === node)
          node.parent.left = node.left;
        else 
          node.parent.right = node.left;
        }
        else this.root = node.left;
      }    
      //if two children exist
      else if (node.left && node.right){ 
        if(node.parent) 
          {
           if(node.parent.left === node)
             node.parent.left = node.right;
             else 
             node.parent.right = node.right;
          }
        else this.root = node.right;
        node.right.parent = node.parent;
        leftnode = node.left;
        node = node.right;
        while(node.left)
          node = node.left;
        if(!node.left){
        node.left = leftnode; 
        leftnode.parent = node;
        }
      }    
    }
   }
  return this;
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
    bt.Insert(75,40, 37, 53, 73, 52,56, 50,43);
    bt.DeleteNode(40);


console.log("order");
    bt.inOrderTraversal();
