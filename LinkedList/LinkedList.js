var Node  = function(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
};

var LinkedList = function () {
    this.head = null;
    this.tail = null;
};

LinkedList.prototype.append = function (value){
  var node = new Node(value);
  if(!this.head)
    this.head = node;
  else {
    this.tail.next = node;
    node.prev = this.head;
  }
   this.tail = node;
  return this;
};

LinkedList.prototype.headView = function(){
    return this.head;
};

LinkedList.prototype.tailView = function(){
    return this.tail;
};

LinkedList.prototype.viewList = function(){
  var head = this.head;
  while(head){
    console.log(head.value);
    head = head.next;
  }
};



var list = new LinkedList();
list.append(4);
list.append(5);
list.append(6);

list.viewList();

console.log(list.headView().value);
console.log(list.tailView().value);