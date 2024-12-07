import { setBit } from "$/bit-manipulation.js";
import type { BitBoard } from "$/types.js";

export function fillLine({ startIndex: startBit, length: len, offset }: FillLineParams): BitBoard {
  let line = 0n;

  for (let i = 0; i < len; i++)
    line = setBit(line, startBit + i * offset);

  return line;
}

type FillLineParams = {
  startIndex: number;
  length: number;
  offset: number;
};