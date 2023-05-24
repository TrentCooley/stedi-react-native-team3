import sayHelloTrent from '../utils/hello.trent.mjs';
import assert from 'assert';

it("Hello Trent", ()=>{

    const hello = sayHelloTrent();

    assert.equal(hello, "Hello Trent");

});

