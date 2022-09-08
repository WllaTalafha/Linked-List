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

    delete() {
        if(this.head){
           let start=this.head;
           let counter = 1;
        while(start.next){
            start=start.next;
            counter=counter+1;
    }  
    
    console.log(counter);
    let middle = Math.floor(counter/2)
    console.log(middle);

    let origin=this.head;

    for (let i=1 ; i<middle ; i++){
        origin=origin.next;
    }
    console.log(origin);
    
    origin.next=origin.next.next;

      }
          
    }
}
module.exports = LinkedList;