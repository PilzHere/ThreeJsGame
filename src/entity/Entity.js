export class Entity {
	constructor(id, scene, screen) {
		this.id = id;
		this.scene = scene;
		this.screen = screen;
	}

	spawn() {
		console.log("Entity with ID: " + this.id + " spawned.");
	}

	tick(dt) {}

	render(dt) {}

	destroy() {}
}
