const assert = require("assert");
const User = require("../src/user");

describe("Delete user", () => {
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

  it("Deletes all users with name of Joe", done => {
    User.deleteMany({ name: "Joe" })
      .then(
        response => {
          console.log('deleteMany Result: ', response);
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

  it("Deletes one user with name of Joe", done => {
    User.deleteOne({ name: "Joe" })
      .then(
        response => {
          console.log('deleteOne Result: ',response);
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

  it("Deletes user with id of Joe.id", done => {
    //Returns the user after deleting
    User.findByIdAndDelete(joe._id)
      .then(
        response => {
          console.log('findByIdAndDelete Result: ',response);
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

  it("Deletes user with id of Joe.id", done => {
    //Returns the user after deleting
    User.findOneAndDelete({ _id: joe._id })
      .then(
        response => {
          console.log('findOneAndDelete Result: ', response);
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

  it("Class Method Remove", done => {
    User.deleteMany({ name: "Joe" })
      .then(
        response => {
          console.log('deleteMany Result: ', response);
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
