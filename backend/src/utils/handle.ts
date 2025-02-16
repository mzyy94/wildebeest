// Naive way of transforming an Actor ObjectID into a handle like WebFinger uses
export function urlToHandle(input: URL, username: string | undefined): string {
	const { pathname, host } = input
	const parts = pathname.split('/')
	if (parts.length === 0) {
		throw new Error('malformed URL')
	}
	const localPart = username || parts[parts.length - 1]
	return `${localPart}@${host}`
}
