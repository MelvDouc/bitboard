import { clearRightmostSetBit } from "$/bit-manipulation.js";
import type { BitBoard } from "$/types.js";

export function isPowerOf2(bitBoard: BitBoard): boolean {
  return bitBoard !== 0n && clearRightmostSetBit(bitBoard) === 0n;
}