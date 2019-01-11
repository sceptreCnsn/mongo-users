const assert = require("assert");
const User = require("../src/user");

describe("Virtual types", () => {
  it("postCount returns number of posts", done => {
    const joe = new User({
      name: "Joe",
      posts: [{ title: "PostTitle" },{ title: "PostTitle3" },{ title: "PostTitle2" }]
    });

    joe.save().then(user => {
      const usr = user;
      console.log("Virtual Prop postCount:", usr.postCount);
    });
    done();
  });
});
