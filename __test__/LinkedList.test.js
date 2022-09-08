'use strict';

const LinkedList = require('../LinkedList');

describe('testing the LinkedList',()=>{
    it('create inestance from LinkedList class testing ',()=>{
        
        const ll = new LinkedList();

        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull;
        
    })
})

describe('testing the LinkedList insert method',()=>{
    it('testing insert method if ll is empty',()=>{
        
        const ll = new LinkedList();

        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull;
               
    })

    it('testing insert method if ll is not empty',()=>{
        
        const ll = new LinkedList();

        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('a');
        expect(ll.head.next.next.next).toBeNull;
               
    })
})


describe('testing the LinkedList append method',()=>{
    it('testing append method if ll is empty',()=>{
        
        const ll = new LinkedList();

        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
               
    })

    it('testing append method if ll is not empty',()=>{
        
        const ll = new LinkedList();

        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
               
    })
})
