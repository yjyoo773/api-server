const loggerMW = require("../src/middleware/logger");

describe("logger middleware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("properly logs some output", () => {
    loggerMW(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("properly moves to the next middleware", () => {
    loggerMW(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
