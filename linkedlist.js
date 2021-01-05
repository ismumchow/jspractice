//implementing a linkedList

var Node = function (val) {
    this.next = null;
    this.val =val;
}

var linkedList = function (head) {
    if(!head) console.log('you need a head') 
        break; 
    this.head = head; // first instance of the linked list
    this.tail = this.head;  //since no other instance of a node was created, the tail is just initalized as the head

}

linkedList.prototype.forEach = function (callback) {
    var node = this.head; 
    while (node) { // if node exists
        callback(node.val); 
        node = node.next; 
    }
}; 


linkedList.prototype.print = function () {
    var result = [];
     this.forEach(function (val) {
         result.push(val)
     }); 
     return result.join(', ');
    
}


