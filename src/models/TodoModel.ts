export class TodoModel {
	/**
	 * Represents a TodoModal.
	 * @constructor
	 * @param {string} id - The id for each Todo
	 * @param {string} title - The title of Todo
	 * @param {string} description - The description each Todo
	 * @param {string} priority - priority of each Todo if it HIGH, LOW or MEDIUM
	 * @param {string} createDate - each todo must have its created date
	 * @param {string} modifiedDate - each todo must record a date whenever it's modefied
	 */
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public priority: string,
		public createDate: string,
		public modifiedDate: string
	) {}
}
