import { EntityManager } from "../entity/manager/EntityManager.js";

export class GameScreen {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.scene = null;
		this.camera = null;

		this.entityManager = new EntityManager(this);

		this.keysPressed = null;
	}

	start() {}

	input(keysPressed) {
		this.keysPressed = keysPressed;
	}

	tick(dt) {
		console.log("GameScreen TICK");
	}

	render(dt) {
		console.log("GameScreen RENDER");
	}

	exit() {}
}
