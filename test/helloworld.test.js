import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Hello World", ()=>{

    const hello = sayHello();
    assert.equal(hello,"hello");
});