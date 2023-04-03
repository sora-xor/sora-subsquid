import { Opaque } from 'type-fest'

export type AssetId = Opaque<string, 'AssetId'>

export type AssetAmount = Opaque<bigint, 'AssetAmount'>

export type Address = Opaque<string, 'Address'>

export type AddressEthereum = Opaque<string, 'AddressEthereum'>