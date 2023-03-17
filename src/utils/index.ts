export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() * 0.001).toFixed(0))

export const decodeUint8 = (data: Uint8Array): string => {
	return new TextDecoder().decode(data)
}

export const encodeUint8 = (data: string): Uint8Array => {
	return new TextEncoder().encode(data)
}