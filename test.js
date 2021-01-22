'use strict';

var res = { a:1, b:2 };

function ca(){
    var aa = function(a,b){
        aa.handle(a,b);
    }
    aa.handle = (a,b) => `* aa Handle - a : ${a} / b : ${b}`;
    aa.res = Object.create(
        res,
        {aa: { configurable: true, enumerable: true, writable: true, value: 'app' }}
    );
    return aa;
}

module.exports = ca;