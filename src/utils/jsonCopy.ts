export default function jsonCopy<T>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}
