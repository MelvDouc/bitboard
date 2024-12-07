import { MAX_BIT_BOARD } from "$/common.js";
import type { BitBoard } from "$/types.js";

/**
 * Flip all the bits in a bit board.
 * This should be used instead of the `~` operator
 * as the latter will merely negate the number.
 */
export const not = (bitBoard: BitBoard): BitBoard => MAX_BIT_BOARD - bitBoard;