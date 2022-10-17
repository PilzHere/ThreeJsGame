import {
	Clock,
	WebGLRenderer,
	FramebufferTexture,
	RGBAFormat,
	NearestFilter,
	Vector2,
} from "./../threejs/three.module.js";
import { MenuScreen } from "../screen/MenuScreen.js";
import { Stack } from "../utils/Stack.js";

// Variables
// window
//const WIDTH = window.innerWidth;
//const HEIGHT = window.innerHeight;

const SCALE = 2;
const WIDTH = 640 * SCALE;
const HEIGHT = 480 * SCALE;
const clock = new Clock();
let deltaTime = 0;
const desiredFps = 60;
let desiredDelta = 1000 / desiredFps;
let timeTarget = 0;
let keysPressed = new Array();
let renderer = null;
let fbo = null;
let screens = null;

init();
start();

//const SCALE = 2;
//const WIDTH = 640 * SCALE; // 1280
//const HEIGHT = 480 * SCALE; // 720

// general timing
//const CLOCK = new Clock();
//let deltaTime = 0;

// fps
//let desiredFps = 60;
//let desiredDelta = 1000 / desiredFps;
//let timeTarget = 0;

// input keys
//let keysPressed = new Array();

// other
//let renderer = null;
//let fbo = null;

//let screens = null;

// Functions
//init();
//start();

function init() {
	console.log("GAME initiated");

	initRenderer();
}

function initRenderer() {
	renderer = new WebGLRenderer({ antialias: false });
	renderer.setSize(WIDTH, HEIGHT);
	renderer.setClearColor(0x000000, 1);
	//renderer.copyFramebufferToTexture // !
	document.body.appendChild(renderer.domElement);

	fbo = new FramebufferTexture(640, 480, RGBAFormat);
	fbo.minFilter = NearestFilter;
	fbo.magFilter = NearestFilter;

	//window.addEventListener("resize")
}

function start() {
	console.log("GAME start");

	// listen for input
	window.addEventListener("keydown", (event) => {
		keysPressed[event.key] = true;
	});

	window.addEventListener("keyup", (event) => {
		delete keysPressed[event.key];
	});

	// create first screen
	screens = new Stack();
	screens.push(new MenuScreen(WIDTH, HEIGHT));
	screens.peek().start();

	render();
}

function input() {
	if (!screens.isEmpty()) {
		screens.peek().input(keysPressed);
	}
}

function tick(dt) {
	if (!screens.isEmpty()) {
		screens.peek().tick(dt);
	}
}

function render() {
	//let deltaTime = game.deltaTime; //
	//let timeTarget = game.timeTarget; //
	//let desiredDelta = game.desiredDelta; //

	//console.log("dt: " + this.deltaTime); //
	//console.log("tt: " + this.timeTarget); //

	//console.log("bas");

	if (Date.now() >= timeTarget) {
		deltaTime = clock.getDelta();
		//console.log(deltaTime);

		input();
		tick(deltaTime);
		renderScreen(deltaTime);

		timeTarget += desiredDelta;

		if (Date.now() >= timeTarget) {
			timeTarget = Date.now();
		}
	}

	//requestAnimationFrame(this.render.bind(this)); // always request
	requestAnimationFrame(render); // always request

	if (screens.isEmpty()) {
		stop();
		exit();
	}
}

function renderScreen(dt) {
	if (!screens.isEmpty()) {
		const currentScreen = screens.peek();

		//this.renderer.clear();
		currentScreen.render(dt);
		renderer.render(currentScreen.scene, currentScreen.camera); // actually rendering

		//let vector = new Vector2(-640, 480 * 0.5);
		//this.renderer.copyFramebufferToTexture(vector, this.fbo);

		//this.renderer.clearDepth();
		//this.renderer.render(currentScreen.scene, currentScreen.camera);
	}
}

function stop() {
	console.log("GAME stop");
}

function exit() {
	console.log("GAME exit");
}
