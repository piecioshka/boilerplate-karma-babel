import { Example } from "../src/example";

describe("Example", function () {
  let o;

  beforeEach(() => {
    o = new Example();
  });

  it("sync", function () {
    expect(o.sync()).toEqual("sync");
  });

  it("asyncCallback", function (done) {
    o.asyncCallback((value) => {
      expect(value).toEqual("asyncCallback");
      done();
    });
  });

  it("asyncPromise", async function () {
    const value = await o.asyncPromise();
    expect(value).toEqual("asyncPromise");
  });
});
