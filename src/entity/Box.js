import {
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
} from "../threejs/three.module.js";
import { Entity } from "./Entity.js";

export class Box extends Entity {
	constructor(id, scene, position, screen) {
		super(id, scene, screen);

		this.position = position;

		const boxGeometry = new BoxGeometry(10, 10, 10);
		const basicMaterial = new MeshBasicMaterial({ color: 0x0095dd });
		this.cube = new Mesh(boxGeometry, basicMaterial);

		this.cube.position.x = position.x;
		this.cube.position.y = position.y;
		this.cube.position.z = position.z;

		this.cube.rotation.set(0.4, 0.2, 0);
	}

	spawn() {
		super.spawn();

		this.scene.add(this.cube);
	}

	input(dt) {
		const keysPressed = this.screen.keysPressed;

		if (keysPressed["w"]) {
			console.log("Key 'w' is pressed.");
			//this.cube.rotation.x -= dt * 2;
			//this.screen.entityManager.removeEntityWithId(0);

			this.cubeNewRotX -= 20;
		}

		if (keysPressed["s"]) {
			console.log("Key 's' is pressed.");
			//this.cube.rotation.x += dt * 2;

			this.cubeNewRotX += 20;
		}

		if (keysPressed["a"]) {
			console.log("Key 'a' is pressed.");
			//this.cube.rotation.y -= dt * 2;

			this.cubeNewRotY -= 20;
		}

		if (keysPressed["d"]) {
			console.log("Key 'd' is pressed.");
			//this.cube.rotation.y += dt * 2;

			this.cubeNewRotY += 20;
		}
	}

	tick(dt) {
		this.cubeNewRotX = 0;
		this.cubeNewRotY = 0;

		this.input(dt);

		this.cube.rotation.x += dt * this.cubeNewRotX;
		this.cube.rotation.y += dt * this.cubeNewRotY;

		//this.cube.rotation.x += dt * 2;
		//this.cube.rotation.y += dt * 1.5;
		//this.cube.rotation.z += dt * -2;
	}

	render(dt) {}

	destroy() {
		this.scene.remove(this.cube);
	}
}
