class MenuScreen extends GameScreen {
    constructor(width, height) {
        super(width, height);

        this.cube = null;
    }

    start() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height);

        this.camera.position.z = 50;
        this.scene.add(this.camera);

        const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
        const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095DD });
        this.cube = new THREE.Mesh(boxGeometry, basicMaterial);
        this.scene.add(this.cube);
        this.cube.rotation.set(0.4, 0.2, 0);
    }

    tick(dt) {
        //super.tick(dt);
        //console.log("MenuScreen TICK");

        this.cube.rotation.x += dt * 2;
    }

    render(dt) {
        //super.render(dt);
        //console.log("MenuScreen RENDER");
    }

    exit() {

    }
}