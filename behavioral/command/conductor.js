class Conductor {
	constructor() {
		this.history = [];
		this.undone = [];
	}
	run(command) {
		console.log(`Executing command: ${command.name}`);
		command.execute();
		this.history.push(command);
	}
	printHistory() {
		this.history.forEach((command) => console.log(command.name));
	}
	undo() {
		var command = this.history.pop();
		console.log(`Fixing your mess... undoing : ${command.fileName}`);
		command.undo();
		this.undone.push(command);
	}

	redo() {
		var command = this.undone.pop();
		console.log(
			`Pff you keep changing your mind eh? ... redoing : ${command.fileName}`
		);
		command.execute();
		this.history.push(command);
	}
}

module.exports = new Conductor();
