const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let renderer = null;

let scene = null;
let camera = null;

let cube = null;

init();
initRenderer();
// load screen()
// screen.loadmap()
start();

function init() {
    console.log("GAME initiated");
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
    camera.position.z = 50;
    scene.add(camera);
}

function start(params) {
    console.log("GAME start");

    const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095DD });
    cube = new THREE.Mesh(boxGeometry, basicMaterial);
    scene.add(cube);
    cube.rotation.set(0.4, 0.2, 0);

    render();
}

function tick(dt) {
    //console.log("GAME tick");
}

function render(dt) {
    tick();

    //console.log("GAME render");

    requestAnimationFrame(render); // begin, using V-sync

    cube.rotation.x += 0.01;

    renderer.render(scene, camera); // end
}

function stop() {
    console.log("GAME stop");
}

function exit() {
    console.log("GAME exit");
}
