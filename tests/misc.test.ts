import { isPowerOf2 } from "$/index.js";
import { assert, test } from "./test-utils.js";

test("is power of 2", () => {
  for (let i = 3n; i <= 99n; i += 2n) {
    assert(!isPowerOf2(i));
    assert(isPowerOf2(1n << i));
  }
});