// Configuration
const callsPerSecondLimit = 1000000 // 1 million calls per second

// Internal state for tracking calls
let currentSecondCalls = 0
let currentSecondStart = Date.now()

// This handler is used to throttle the indexing process in order to synchronize Subsquid and Subquery logs
/**
 * Throttles the execution of a provided handler function.
 *
 * @param {Function} handler - The handler function to throttle.
 * @returns {Promise} A Promise that resolves when the handler is executed.
 */
export async function throttleHandler(handler: () => Promise<void>): Promise<any> {
	const now = Date.now()
	const elapsedTime = now - currentSecondStart

	if (elapsedTime >= 1000) { // New second
		currentSecondStart = now
		currentSecondCalls = 0
	}

	if (currentSecondCalls < callsPerSecondLimit) {
		currentSecondCalls++
		return handler() // Execute the handler directly
	} else {
		// Calculate delay and wait until the next second
		const delay = 1000 - elapsedTime
		return new Promise(resolve => setTimeout(resolve, delay)).then(handler)
	}
}