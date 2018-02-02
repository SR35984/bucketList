export class User {
	name: string;
	createdAt: Date;
	updatedAt: Date;
	lists: string[];

	constructor() {
		this.name = "";
		this.lists = [];
	}
}
