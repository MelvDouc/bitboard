import { MASK_BITS, CLEAR_BITS, log2 } from "$/tables.js";
import type { BitBoard } from "$/types.js";

export function getBit(bitBoard: BitBoard, index: number): BitBoard {
  return (bitBoard & MASK_BITS[index]) >> BigInt(index);
}

export function setBit(bitBoard: BitBoard, index: number): BitBoard {
  return bitBoard | MASK_BITS[index];
}

export function clearBit(bitBoard: BitBoard, index: number): BitBoard {
  return bitBoard & CLEAR_BITS[index];
}

export function toggleBit(bitBoard: BitBoard, index: number): BitBoard {
  return bitBoard ^ MASK_BITS[index];
}

export function isBitSet(bitBoard: BitBoard, index: number): boolean {
  return (bitBoard & MASK_BITS[index]) !== 0n;
}

export function rightmostSetBit(bitBoard: BitBoard): number {
  return log2(bitBoard & -bitBoard);
}

export function clearRightmostSetBit(bitBoard: BitBoard): BitBoard {
  return bitBoard & (bitBoard - 1n);
}