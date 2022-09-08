'use strict';

const Node = require('./Node');

class LinkedList {
    constructor(){
        this.head = null;        
    }        

    insert(value){

        if(! this.head){
            const node = new Node(value);
            this.head = node;
        } else{
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    append(value){
        const node = new Node(value);

        if(this.head){            
            let currentNode = this.head ;
            
            while(currentNode.next){
                currentNode = currentNode.next;
            }       
            currentNode.next = node;
            
        } else{
            this.head = node;
        }
    }
}
module.exports = LinkedList;