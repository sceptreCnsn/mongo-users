const assert = require("assert");
const User = require("../src/user");

describe("Creating Records", () => {
  it("saves a user", (done) => {
    const joe = new User({ name: "Joe",postCount:parseInt(Math.random()*10+1)});
    joe.save().then(
      rec => {
        console.log('createUser Result: ', rec);
        assert(!joe.isNew);
        done();
      },
      reason => {console.log('Error! : '+reason)}
    ).catch(err=>{console.log('An Error Occured: ' + err)});
  });
});
