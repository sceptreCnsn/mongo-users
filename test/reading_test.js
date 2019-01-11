const assert = require("assert");
const User = require("../src/user");

describe("Finding Records", () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: "Joe",postCount:parseInt(Math.random()*10+1)});
    joe
      .save()
      .then(
        record => {
          done();
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
        console.log(err);
      });
  });

  it("finds all users with a name of joe", done => {
    User.find({ _id: joe._id })
      .then(
        records => {
        console.log('find Result: ',records);
          done();
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
        console.log(err);
      });
  });
});
