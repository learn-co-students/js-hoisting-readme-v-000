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
    expect(console.log).toHaveBeenCalledWith("hey!!!");
  });
});

describe('sayMyName', function(){

  it("prints 'Kristin' to the console from the nested function ", function(){
    spyOn(console, 'log');
    sayMyName();
    expect(console.log).toHaveBeenCalledWith("Kristin");
  });
});
