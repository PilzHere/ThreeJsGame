export class EntityManager {
	constructor(screen) {
		this.screen = screen;
		this.unusedIds = new Array();
		this.entities = new Array();
	}

	addEntity(entity) {
		this.entities.push(entity);

		console.log(
			"Entity with ID: " +
				entity.id +
				" was added in array[" +
				(this.entities.length - 1) +
				"]"
		);

		entity.spawn();
	}

	removeEntityWithId(id) {
		/*
        this.entities.forEach((element) => {
			console.log(element);
		});
        */

		const index = this.entities.findIndex((i) => i.id === id); // get index
		const entity = this.entities[index];

		if (entity !== undefined) {
			entity.destroy(); // remove from scene

			this.entities.splice(id, 1); // remove entity from entities, just 1
			this.unusedIds.push(id); // add the id to unused ids

			console.log(
				"Entity with ID: " +
					id +
					" was removed from array[" +
					index +
					"]"
			);
		}
	}

	getNewId() {
		if (this.unusedIds.length === 0) {
			return this.entities.length;
		}

		return this.unusedIds.pop();
	}
}
