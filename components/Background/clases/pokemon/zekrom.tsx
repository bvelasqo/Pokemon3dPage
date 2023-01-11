import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class Zekrom {
  private object!: Group;
  private contador = 0;

  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    loader.load("/models/zekrom.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      scene.add(this.object);
    });
    this.update();
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * -1) / 460 + 0.4;
      this.object.translateY(0.5);
      this.object.translateZ(36.6);
      this.object.translateX(ratio);
    } else {
      this.object.translateY(1.8);
      this.object.translateZ(38.5);
      this.object.translateX(0.4);
    }
  }

  private update() {
    this.contador += 0.03;
    if (this.object) {
      this.object.rotation.y = Math.sin(this.contador) / 8 + 1.6;
    }
    requestAnimationFrame(this.update.bind(this));
  }
}
