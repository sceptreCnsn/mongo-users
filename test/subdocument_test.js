const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments", () => {
  it("can create a subdocument", done => {
    const user = new User({
      name: "cansin",
      postCount: 2,
      posts: [{ title: "Post 1" }, { title: "Post 2" }]
    });

    user
      .save()
      .then(
        rec => {
          console.log(rec);
        },
        reason => {
          console.log(reason);
        }
      )
      .catch(err => {
        console.log(err);
      });

    done();
  });

  it("add new subdocuments to existing record", done => {
    const user = new User({
      name: "cansin",
      postCount: 2,
      posts: [{ title: "Post 1" }, { title: "Post 2" }]
    });

    user
      .save()
      .then(
        rec => {
          console.log("Subdocuments 1: ", rec);
          user.posts.push({ title: "New Post" });
          user
            .save()
            .then(
              rec => {
                console.log("Subdocuments 2: ", rec);
                assert(rec._id.toString() === user._id.toString());
              },
              reason => {
                console.log(reason);
              }
            )
            .catch(err => {
              console.log(err);
            });
        },
        reason => {
          console.log(reason);
        }
      )
      .catch(err => {
        console.log(err);
      });

    done();
  });

  it("it can remove an existing subdocument", done => {
    const user = new User({
      name: "cansin",
      postCount: 2,
      posts: [{ title: "Post 1" }, { title: "Post 2" }]
    });

    user
      .save()
      .then(() => {
        user.posts.pop();
        user
          .save()
          .then(
            rec => {
              console.log("Subdocuments 2: ", rec);
              assert(rec._id.toString() === user._id.toString());
            },
            reason => {
              console.log(reason);
            }
          )
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
      
    done();
  });
});
