// variables
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let clock = new THREE.Clock();
let deltaTime = 0;

let desiredFps = 60;
let desiredDelta = 1000 / desiredFps;
let timeTarget = 0;

let renderer = null;

let screens = null;

// functions
init();
start();

function init() {
    console.log("GAME initiated");

    initRenderer();
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);
}

function start(params) {
    console.log("GAME start");

    screens = new Stack();
    screens.push(new MenuScreen(WIDTH, HEIGHT));
    screens.peek().start();

    render();
}

function tick(dt) {
    if (!screens.isEmpty()) {
        screens.peek().tick(dt);
    }
}

function render() {
    if (Date.now() >= timeTarget) {
        deltaTime = clock.getDelta();
        //console.log(deltaTime);

        tick(deltaTime);
        renderScreen(deltaTime);

        timeTarget += desiredDelta;

        if (Date.now() >= timeTarget) {
            timeTarget = Date.now();
        }
    }

    requestAnimationFrame(render); // always request

    if (screens.isEmpty()) {
        stop();
        exit();
    }
}

function renderScreen(dt) {
    if (!screens.isEmpty()) {
        const currentScreen = screens.peek();

        currentScreen.render(dt);
        renderer.render(currentScreen.scene, currentScreen.camera); // actually rendering
    }
}

function stop() {
    console.log("GAME stop");
}

function exit() {
    console.log("GAME exit");
}
