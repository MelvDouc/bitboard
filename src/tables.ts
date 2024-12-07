import { TYPE_WIDTH } from "$/common.js";
import { not } from "$/operators.js";
import type { BitBoard } from "$/types.js";

export const MASK_BITS = generateMaskBits();
export const CLEAR_BITS = generateClearBits();
const log2Map = generatorLog2Map();

/**
 * @param bitBoard Must be a power of 2.
 * @returns The base 2 logarithm of `bitBoard` or, in other words, `x` such that `1n << x === bitBoard`.
 */
export function log2(bitBoard: BitBoard): number {
  if (log2Map.has(bitBoard))
    return log2Map.get(bitBoard) as number;

  throw new Error(`${bitBoard} is not a power of 2.`);
}

function generateMaskBits() {
  return Array.from({ length: TYPE_WIDTH }, (_, i) => 1n << BigInt(i));
}

function generateClearBits() {
  return MASK_BITS.map(not);
}

function generatorLog2Map(): Map<BitBoard, number> {
  return MASK_BITS.reduce((acc, mask, index) => {
    return acc.set(mask, index);
  }, new Map<BitBoard, number>());
}