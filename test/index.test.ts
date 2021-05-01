import { conditionalClass } from '../src/index';

describe("conditionalClass", function () {
  it("check", function () {
    expect(conditionalClass("some-class")).toEqual("some-class");
    expect(
      conditionalClass("some-class", {
        "is-active": true,
      })
    ).toEqual("some-class is-active");
    expect(
      conditionalClass("some-class", {
        "is-active": true,
        "another-class": false,
      })
    ).toEqual("some-class is-active");
    expect(conditionalClass()).toEqual("");
    expect(
      conditionalClass(undefined, {
        "is-active": true,
      })
    ).toEqual("is-active");
  });
});
