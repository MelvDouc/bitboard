import { randomInt } from "node:crypto";
import {
  ok as assert,
  equal as assertEqual,
  notEqual as assertNotEqual
} from "node:assert";
import { test } from "node:test";

export function bb([n]: TemplateStringsArray): bigint {
  return BigInt(parseInt(n, 2));
}

export function randomBigInt(max: number): bigint {
  return BigInt(randomInt(max));
}

export function randomBitArray(len: number): bigint[] {
  return Array.from({ length: len }, () => randomBigInt(2));
}

export function reduceBitArray(bitArray: bigint[]): bigint {
  return bitArray.reduce((acc, bit, i) => acc | bit << BigInt(i), 0n);
}

export {
  randomInt,
  assert,
  assertEqual,
  assertNotEqual,
  test
};