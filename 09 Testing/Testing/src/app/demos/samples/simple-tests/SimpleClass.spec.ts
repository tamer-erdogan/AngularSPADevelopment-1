import { SimpleClass } from "./SimpleClass";

describe("Hello world", function() {
  it("contains 12 charactes", function() {
    expect(SimpleClass.sayHelloWorld().length).toEqual(12);
  });

  it("says 'Hello World!", function() {
    expect(SimpleClass.sayHelloWorld()).toEqual("Hello World!");
  });
});
