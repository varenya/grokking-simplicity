type Stack<T> =
	| {
			item: T;
			next: Stack<T>;
	  }
	| "Empty";

function createStack<T>() {
	let top: Stack<T> = "Empty";
	let size = 0;
	function push(item: T) {
		const prevTop = top;
		top = { item, next: prevTop };
		size++;
	}
	function pop(): T {
		if (top === "Empty") throw new Error("stack is empty");
		const item = top.item;
		top = top.next;
		size--;
		return item;
	}
	return {
		push,
		pop,
		size: () => size,
		isEmpty: () => {
			return size === 0;
		},
	};
}
