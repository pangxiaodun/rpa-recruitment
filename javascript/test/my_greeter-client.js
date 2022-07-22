'use strict';

/**
 * @doc :https://mochajs.cn/
 * @author：zh
 */
var assert = require('chai').assert
var MyGreeter = require('../src/MyGreeter.js');

describe('MyGreeter', function () {

    describe('Constructor', function () {
        it('should be instantiated', function() {
            var greeter = new MyGreeter.Client();
            assert.equal(greeter instanceof MyGreeter.Client, true);
        });
    });

    describe('getGreeting', function () {
        it('getGreeting结果验证', function() {
            var greeter = new MyGreeter.Client(10);
            assert.typeOf(greeter.getGreeting, 'function','getGreeting方法不合法');
            assert.equal(!!greeter.getGreeting(), true, '返回值为空');
            assert.equal(greeter.getGreeting(), 'Good morning','返回内容不正确');
        });
    });
    
});




