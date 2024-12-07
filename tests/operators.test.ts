import { not } from "$/index.js";
import { assertNotEqual, randomBigInt, test } from "./test-utils.js";

test("NOT", () => {
  const a = randomBigInt(16);
  const b = not(a);

  for (let i = 0n; i < 16n; i++) {
    const b1 = (a & 1n << i) >> i;
    const b2 = (b & 1n << i) >> i;
    assertNotEqual(b1, b2);
  }
});