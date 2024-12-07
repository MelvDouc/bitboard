import {
  clearBit,
  clearRightmostSetBit,
  getBit,
  isBitSet,
  rightmostSetBit,
  setBit,
  toggleBit
} from "$/index.js";
import {
  assert,
  assertEqual,
  assertNotEqual,
  bb,
  randomBigInt,
  randomBitArray,
  randomInt,
  reduceBitArray,
  test
} from "./test-utils.js";

test("get bit", () => {
  const n = bb`10110001`;
  assert(getBit(n, 7) === 1n);
  assert(getBit(n, 6) === 0n);
});

test("set bit", () => {
  const n = bb`10101111`;
  assert(setBit(n, 6) === bb`11101111`);
  assert(setBit(n, 4) === bb`10111111`);
});

test("clear bit", () => {
  const n = bb`11111111`;
  assert(clearBit(n, 6) === bb`10111111`);
  assert(clearBit(n, 4) === bb`11101111`);
});

test("toggle bit", () => {
  const bit = randomInt(30);
  const a = randomBigInt(1 << 30);

  let b = toggleBit(a, bit);
  assertNotEqual(a, b);

  b = toggleBit(b, bit);
  assertEqual(a, b);
});

test("is bit set", () => {
  const bits = randomBitArray(16);
  const n = reduceBitArray(bits);

  for (let i = 0; i < bits.length; i++) {
    assertEqual(isBitSet(n, i), bits[i] === 1n);
  }
});

test("rightmost set bit", () => {
  assert(rightmostSetBit(bb`1111`) === 0);
  assert(rightmostSetBit(bb`1000`) === 3);
  assert(rightmostSetBit(bb`1100`) === 2);
});

test("clear rightmost set bit", () => {
  let n = bb`10010011`;

  n = clearRightmostSetBit(n);
  assertEqual(n, bb`10010010`);

  n = clearRightmostSetBit(n);
  assertEqual(n, bb`10010000`);

  n = clearRightmostSetBit(n);
  assertEqual(n, bb`10000000`);

  n = clearRightmostSetBit(n);
  assertEqual(n, 0n);
});
