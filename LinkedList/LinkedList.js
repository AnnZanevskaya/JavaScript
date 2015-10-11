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
    node.prev = this.head;
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

LinkedList.prototype.at = function(index){
  if(index >= this.count || index < 0) {
    console.log("invalid index");
    return this;
  }
  else{
    var node = this.head;
    for(var i=0; i<index; i++){
      node = node.next;
    }
    return node;
  }
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
list.append(7);
list.viewList();

list.at(2);
console.log("---------------");
console.log(list.at(3).value);

