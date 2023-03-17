import { decodeHex } from "@subsquid/substrate-processor";
import { SnapshotType } from "../model"

export const XOR: Uint8Array = decodeHex('0x0200000000000000000000000000000000000000000000000000000000000000')
export const VAL: Uint8Array = decodeHex('0x0200040000000000000000000000000000000000000000000000000000000000')
export const PSWAP: Uint8Array = decodeHex('0x0200050000000000000000000000000000000000000000000000000000000000')
export const DAI: Uint8Array = decodeHex('0x0200060000000000000000000000000000000000000000000000000000000000')
export const ETH: Uint8Array = decodeHex('0x0200070000000000000000000000000000000000000000000000000000000000')
export const XSTUSD: Uint8Array = decodeHex('0x0200080000000000000000000000000000000000000000000000000000000000')
export const XST: Uint8Array = decodeHex('0x0200090000000000000000000000000000000000000000000000000000000000')

export const BASE_ASSETS = [XOR, XSTUSD];

export const DOUBLE_PRICE_POOL = [VAL, PSWAP, DAI, ETH, XST];

export const SECONDS_IN_BLOCK = 6;

// Intervals for snapshots (in seconds)
export const SnapshotSecondsMap = {
  [SnapshotType.DEFAULT]: 300, // 5 min
  [SnapshotType.HOUR]: 3_600, // hour
  [SnapshotType.DAY]: 86_400, // day
  [SnapshotType.MONTH]: 2_592_000, // month (30 days)
};