const assert = require("assert");
const User = require("../src/user");

describe("Update User", () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: "Joe",likes:parseInt(Math.random()*10+1)});
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

  it("Update all users", done => {
    joe.set("name", "Cansın");
    joe
      .save()
      .then(
        response => {
          console.log("Set and Save Approach Result: ", response);
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

  it("A model instance can update", done => {
    joe
      .updateOne({ name: "Cansın2" })
      .then(
        response => {
          console.log("Update intance Approach Result: ", response);
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

  it("A Model Class can Update", done => {
    User.updateMany({ name: "Joe" }, { name: "Cansin3" })
      .then(
        response => {
          console.log(
            "Update all model class based approach Result: ",
            response
          );
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

  it("A Model Class can Update one record", done => {
    User.findOneAndUpdate({ name: "Joe" }, { name: "Cansın4" })
      .then(
        response => {
          console.log(
            "Update one model class based approach Result: ",
            response
          );
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

  it("A Model Class can Update with an id", done => {
    User.findByIdAndUpdate({ _id: joe._id }, { name: "Cansın5" })
    .then(
      response => {
        console.log(
          "Update one by id model class based approach Result: ",
          response
        );
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

  it('A user can have their postcount incremented by 1',done=>{
    User.updateMany({name:'Joe'},{$inc:{likes:1}}).then(
        response => {
          console.log(
            "Increment Result: ",
            response
          );
          done();
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
        console.log(err);
      });
  })
});
