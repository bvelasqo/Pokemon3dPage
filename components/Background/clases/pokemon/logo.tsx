import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class Logo {
  private object!: Group;
  private contador = 0;
  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    loader.load("/models/logo.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      scene.add(this.object);
    });
    this.update();
  }

  private posicionar() {
    this.object.translateZ(-10);
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * 3.2) / 150;
      console.log("ratio", ratio);
      this.object.translateY(5);
      this.object.translateX(ratio);
    } else {
      this.object.translateY(7);
    }
  }

  private update() {
    this.contador += 0.01;
    if (this.object) {
      this.object.rotation.y = Math.sin(this.contador) / 2;
    }
    requestAnimationFrame(this.update.bind(this));
  }
}
