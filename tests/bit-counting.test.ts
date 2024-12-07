import {
  countOnes,
  countTrailingZeros,
  getSetBitIndices
} from "$/index.js";
import { assertEqual, randomBitArray, reduceBitArray, test } from "./test-utils.js";

test("count ones", () => {
  const bits = randomBitArray(16);
  const n = reduceBitArray(bits);
  const oneCount = bits.filter((b) => b === 1n).length;
  assertEqual(countOnes(n), oneCount);
});

test("count trailing zeros", () => {
  const bits = randomBitArray(16);
  const n = reduceBitArray(bits);
  let zeroCount = 0;

  for (let i = 0; i < bits.length && bits[i] === 0n; i++) {
    zeroCount++;
  }

  assertEqual(countTrailingZeros(n), zeroCount);
});

test("get set bit indices", () => {
  const bits = randomBitArray(16);
  const n = reduceBitArray(bits);
  const expected = bits.reduce((acc, bit, i) => {
    if (bit === 1n)
      acc.push(i);
    return acc;
  }, [] as number[]);
  const actual = getSetBitIndices(n);

  assertEqual(actual.length, expected.length);

  for (let i = 0; i < actual.length; i++) {
    assertEqual(actual[i], expected[i]);
  }
});