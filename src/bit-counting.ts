import { clearRightmostSetBit, rightmostSetBit } from "$/bit-manipulation.js";
import { log2 } from "$/tables.js";
import type { BitBoard } from "$/types.js";

/**
 * @returns The number of set bits in a bit board.
 */
export function countOnes(bitBoard: BitBoard): number {
  let count = 0;

  while (bitBoard) {
    count++;
    bitBoard = clearRightmostSetBit(bitBoard);
  }

  return count;
}

/**
 * @returns The numbers of contiguous zeros from the right end of a bit board.
 */
export function countTrailingZeros(bitBoard: BitBoard): number {
  return log2(bitBoard & -bitBoard);
}

/**
 * @returns An array of the indices of the bits equal to 1 in a bit board.
 */
export function getSetBitIndices(bitBoard: BitBoard): number[] {
  const indices: number[] = [];

  while (bitBoard) {
    indices.push(rightmostSetBit(bitBoard));
    bitBoard = clearRightmostSetBit(bitBoard);
  }

  return indices;
}
