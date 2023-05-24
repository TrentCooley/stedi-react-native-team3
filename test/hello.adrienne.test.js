import sayHelloAdrienne from '../utils/hello.adrienne.mjs';
import assert from 'assert';

it("Hello Adrienne", ()=>{

    const hello = sayHelloAdrienne();

    assert.equal(hello, "Hello Adrienne");

});

