'use strict';

const LinkedList = require('../LinkedList');

describe('testing the LinkedList',()=>{
    it('create inestance from LinkedList class testing ',()=>{
        
        const ll = new LinkedList();

        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull;
        
    })
});