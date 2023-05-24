import sayNathanael from '../utils/hellonathanael.mjs';
import assert from 'assert';

it("Hello Nathanael", ()=>{

    const nathanael = sayNathanael();
    assert.equal(nathanael,"nathanael");
});