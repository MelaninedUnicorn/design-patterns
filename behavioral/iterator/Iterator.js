class Iterator {
	constructor(items = []) {
		this.index = 0;
		this.items = items;
	}
	first() {
		var [first] = this.items;
		return first;
	}
	last() {
		// because the reverse operation actually does it on the array  so we spread it ... like jam onto a copy array
		var [last] = [...this.items.reverse()];
		return last;
	}
	hasNext() {
		return this.index < this.items.length - 1;
	}
	current() {
		return this.items[this.index];
	}
	next() {
		if (this.hasNext()) {
			this.index += 1;
		}
		return this.current();
	}
	prev() {
		if (this.index !== 0) {
			this.index -= 1;
		}
		return this.current();
	}
}

module.exports = Iterator;
