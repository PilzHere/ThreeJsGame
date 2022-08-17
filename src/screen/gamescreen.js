class GameScreen {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.scene = null;
        this.camera = null;
    }

    start() {
        
    }

    tick(dt) {
        console.log("GameScreen TICK");
    }

    render(dt) {
        console.log("GameScreen RENDER");
    }

    exit() {

    }
}