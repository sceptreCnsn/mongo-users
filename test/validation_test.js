const assert = require("assert");
const User = require("../src/user");

describe("Validating records", () => {
  it("requires a user name", done => {
    const user = new User({ name: "Asd" });
    const validation = user.validateSync();
    console.log("Sync validation result: ", validation);
    let validationAsync;
    user.validate(
      result => {
        validationAsync = result;
        console.log("Async Validation Result: ", validationAsync);
        return Promise.resolve("Success");
      },
      err => {
        return Promise.reject("Failed: ",err);
      }
    );
    done();
  });

  it("disallows invalid records from being saved", done => {
    const user = new User({ name: "Alsd" });
    user
      .save()
      .then(
        rec => {
          console.log("Record: ", rec);
        },
        reason => {
          console.log("Reason: ", reason);
        }
      )
      .catch(err => {
        const { message } = err.errors.name;
        console.log("Error Occured: ", message);
      });
    done();
  });
});
