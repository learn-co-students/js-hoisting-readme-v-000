'use strict';

describe('callMe', function(){
  
  it("returns the string 'maybe' ", function(){
    expect(callMe()).toEqual("maybe");
  });
});

describe('crazy', function(){
  
  it("prints 'hey!!!' to the console from the nested function ", function(){
    spyOn(console, 'log');
    crazy();
    expect(console.log).toEqual("hey!!");
  });
});