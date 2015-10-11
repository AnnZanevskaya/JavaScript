var Node  = function(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
};

var LinkedList = function () {
    this.head = null;
    this.tail = null;
    this.count = 0;
};

LinkedList.prototype.append = function (value){
  var node = new Node(value);
  if(!this.head)
    this.head = node;
  else {
    this.tail.next = node;
    node.prev = this.tail;
  }
   this.tail = node;
   this.count++;
  return this;
};

LinkedList.prototype.headView = function(){
    return this.head;
};

LinkedList.prototype.tailView = function(){
    return this.tail;
};

//return node or null if node doesn't exist
LinkedList.prototype.at = function(index){
  if(index >= this.count || index < 0) 
    return null;
  else{
    var node = this.head;
    for(var i=0; i<index; i++){
      node = node.next;
    }
    return node;
  }
};

LinkedList.prototype.insertAt = function(value, index){
  var node = this.at(index);
  var newNode = new Node(value);
  this.count++;
  if(node){
    if(node.next && node.prev){
    node.prev.next = newNode;
    newNode.prev = node.prev;
    newNode.next = node; 
    node.prev = newNode; 
      return this;
    }
    //if we want to insert node first and node.prev value is null (it's head)
     if(node.next){
      newNode.next = node; 
      node.prev = newNode; 
      this.head = newNode;
      return this;
     }
  }
  //if we want to insert node last and node.next value is null (it's tail)
  //or even when we make a mistake with index (only non negative index)
  else if(index >= 0){
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.deleteAt = function(index){
   var node = this.at(index);
   if(node){
     this.count--;
     if(node.next && node.prev){
       node.next.prev = node.prev;
       node.prev.next = node.next;
       return this;
     }
     //if node to delete is tail and node.next is null
    if(node.prev)
       {
       node.prev.next = null;
       this.tail= node.prev;
       return this;
       }
      //if node to delete is head and node.prev is null
     if(node.next)
       {
         node.next.prev = null;
         this.head = node.next;
         return this;
       }
   }
  
};

LinkedList.prototype.reverse = function() {
    var node = this.head;
    var temp;
    while (node) {
        temp = node.prev;
        node.prev = node.next;
        node.next = temp;
        node = node.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
};

LinkedList.prototype.each = function(func) {
    var node = this.head;
    while (node) {
        func(node);
        node = node.next;
    }
    return this;
};

LinkedList.prototype.indexOf = function(nodeToFind){
  var node = this.head;
  for(var i =0; i< this.count; i++){
    if(node === nodeToFind)
      return i;
    else node = node.next;
  }
  return -1;
};

LinkedList.prototype.viewList = function(){
  var head = this.head;
  while(head){
    console.log(head.value); 
    head = head.next;
  }
};

var list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);
list.append(4);
list.append(5);
list.viewList();


console.log("---------------");
list.insertAt(300,6);
list.viewList();
console.log("---------------");

list.deleteAt(0);
list.deleteAt(4);
list.viewList();
console.log("---------------");
console.log(list.headView().value);
console.log(list.tailView().value);
console.log("---------------");
list.reverse();
list.viewList();
console.log("---------------");

var node = list.at(4);
console.log(list.at(4));
console.log(list.indexOf(node));
            


            
            
            
            
