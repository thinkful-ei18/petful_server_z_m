class Node {
	constructor(value) {
		this.value = value
		this.prev = null
		this.next = null
	}
}
class Queue {
	constructor() {
		this.first = null
		this.last = null
	}
	enqueue(value) {
		const node = new Node(value)
		if (!this.first) {
			this.first = node
		}
		if (this.last) {
			node.prev = this.last
			this.last.next = node
		}
		this.last = node
	}

	dequeue() {
		if (!this.first) {
			return null
		}
		const node = this.first
		this.first = this.first.next
		return node.value
	}
}

module.exports = Queue
