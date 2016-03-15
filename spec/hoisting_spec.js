'use strict';
var jasmine = require('jasmine-node');
var jsdom = require('jsdom');
var path = require('path');
describe("Jasmine Walkthrough", function(){
var callMe, crazy, sayMyName;
beforeEach(function(done) {
 var codeJs = path.resolve(__dirname, '..', 'hoisting.js');
 jsdom.env({
   html: '<div></div>',
virtualConsole: jsdom.createVirtualConsole().sendTo(console),
   scripts: [codeJs],
   onload: function(window) {
     callMe = window.callMe;
     crazy = window.crazy;
     sayMyName = window.sayMyName;
     done();
   }
 });
});
describe('callMe', function(){
  
  it("returns the string 'maybe' ", function(){
    expect(callMe()).toEqual("maybe");
  });
});

describe('crazy', function(){
  
  it("prints 'hey!!!' to the console from the nested function ", function(){
    spyOn(console, 'log');
    crazy();
    expect(console.log).toHaveBeenCalledWith("hey!!!");
  });
});

describe('sayMyName', function(){
  
  it("prints 'hey!!!' to the console from the nested function ", function(){
    spyOn(console, 'log');
    sayMyName();
    expect(console.log).toHaveBeenCalledWith("Kristin");
  });
});
});
