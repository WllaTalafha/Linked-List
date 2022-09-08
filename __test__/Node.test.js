'use strict';

const Node = require('../Node');

describe('testing the Node',()=>{
    it('create inestance from Node class testing ',()=>{
        
        const value = 'any type of data';
        const node = new Node(value);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull;
    })
});