import * as ss58 from '@subsquid/ss58'
import { AssetId, Address, AddressEthereum } from '../types'
import { toHex, decodeHex } from '@subsquid/substrate-processor'

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() * 0.001).toFixed(0))


export const toText = (data: Uint8Array): string => {
	return new TextDecoder().decode(data)
}
export const decodeText = (data: string): Uint8Array => {
	return new TextEncoder().encode(data)
}


export const toAssetId = (data: Uint8Array): AssetId => {
	return toHex(data) as AssetId
}
export const decodeAssetId = (data: AssetId): Uint8Array => {
	return decodeHex(data)
}


export const toAddressEthereum = (data: Uint8Array): AddressEthereum => {
	return toHex(data) as AddressEthereum
}
export const decodeAddressEthereum = (data: AddressEthereum): Uint8Array => {
	return decodeHex(data)
}


export const toAddress = (data: Uint8Array | string): Address => {
	return ss58.codec('sora').encode(typeof data === 'string' ? decodeHex(data) : data) as Address
}
export const decodeAddress = (data: Address): Uint8Array => {
	return ss58.codec('sora').decode(data)
}