import { fillLine } from "$/index.js";
import { assertEqual, bb, test } from "./test-utils.js";

test("fill line", () => {
  const expected = bb`0000111111110000`;
  const actual = fillLine({ startIndex: 4, length: 8, offset: 1 });
  assertEqual(actual, expected);
});