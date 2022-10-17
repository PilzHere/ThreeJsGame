import {
	Scene,
	OrthographicCamera,
	Vector3,
	TextureLoader,
	NearestFilter,
	Sprite,
	SpriteMaterial,
} from "../threejs/three.module.js";
import { GameScreen } from "./GameScreen.js";
import { Box } from "../entity/Box.js";

export class MenuScreen extends GameScreen {
	constructor(width, height) {
		super(width, height);

		this.sprite = null;
	}

	start() {
		this.scene = new Scene();
		//this.camera = new THREE.PerspectiveCamera(70, this.width / this.height);
		console.log(this.width);
		console.log(this.height);
		/*
		this.camera = new OrthographicCamera(
			this.width / -2,
			this.width / 2,
			this.height / 2,
			this.height / -2,
			0.1,
			200
		);
		*/

		this.camera = new OrthographicCamera(
			640 / -2,
			640 / 2,
			480 / 2,
			480 / -2,
			0.1,
			200
		);

		//this.camera.position.set(0, 0, 3);
		this.camera.position.set(0, 0, 1);
		//this.camera.lookAt(0, 0, 0);
		this.scene.add(this.camera);

		// entities
		this.entityManager.addEntity(
			new Box(
				this.entityManager.getNewId(),
				this.scene,
				new Vector3(0, 0, 0),
				this
			)
		);

		const textureLoader = new TextureLoader();

		const texturePath = "assets/textures/tex320.png";
		textureLoader.load(texturePath, (texture) => {
			texture.minFilter = NearestFilter;
			texture.maxFilter = NearestFilter;

			const mat = new SpriteMaterial({ map: texture });
			this.sprite = new Sprite(mat);
			const textureWidth = texture["image"].width * 1; // <-- How to access object data in lightblue color.
			const textureHeight = texture["image"].height * 1;
			this.sprite.scale.set(textureWidth, textureHeight, 1);
			this.scene.add(this.sprite);

			console.log(texture);
		});

		//const texture = new THREE.TextureLoader().load(texturePath);
		//texture.minFilter = THREE.NearestFilter;
		//texture.maxFilter = THREE.NearestFilter;

		//console.log(texture.image);

		//const mat = new THREE.SpriteMaterial({ map: texture });
		//const sprite = new THREE.Sprite(mat);
		//sprite.scale.set(640, 480, 1);
		//this.scene.add(sprite);

		//console.log(sprite.material.texture);

		//console.log(map.image.height);

		//this.entityManager.removeEntityWithId(0);

		/*this.entityFactory.buildEntity();
		this.entityFactory.buildEntity();

		this.entityManager.removeEntityWithId(1);

		this.entityFactory.buildEntity();
		this.entityFactory.buildEntity();

		this.entityManager.removeEntityWithId(2);

		this.entityFactory.buildEntity();*/
	}

	tick(dt) {
		//super.tick(dt);
		//console.log("MenuScreen TICK");

		this.entityManager.entities.forEach((entity) => {
			entity.tick(dt);
		});

		//console.log(this.entityManager.entities.length);

		const keysPressed = this.keysPressed;

		if (keysPressed["w"]) {
			console.log("Key 'w' is pressed.");
			this.sprite.translateY(dt * 100);
		}

		if (keysPressed["s"]) {
			console.log("Key 's' is pressed.");
		}

		if (keysPressed["a"]) {
			console.log("Key 'a' is pressed.");
		}

		if (keysPressed["d"]) {
			console.log("Key 'd' is pressed.");
		}

		this.camera.updateProjectionMatrix();
	}

	render(dt) {
		//super.render(dt);
		//console.log("MenuScreen RENDER");
		/* this.entityManager.entities.forEach((entity) => {
			entity.render(dt);
		}); */
	}

	exit() {}

	/*
	getScene() {
		return this.scene;
	}
    */
}
