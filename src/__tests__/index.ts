import { identity } from "../index";

describe("Identity", () => {
  it("should return the first argument", () => {
    const o = {};
    expect(identity(o)).toBe(o);
  });
});
