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

LinkedList.prototype.viewList = function(){
  while(this.head){
    console.log(this.head.value);
    this.head = this.head.next;
  }
};



var list = new LinkedList();
list.append(4);
list.append(5);
list.append(6);

list.viewList();