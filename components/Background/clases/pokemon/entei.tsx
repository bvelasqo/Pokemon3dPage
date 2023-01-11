import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class Entei {
  private object!: Group;

  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    loader.load("/models/entei.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      scene.add(this.object);
    });
  }

  private posicionar() {
    this.object.translateY(-3);
    this.object.translateX(-11);
    this.object.translateZ(14);
    this.object.rotateY(Math.PI / 2);
    this.object.scale.set(0.65, 0.65, 0.65);
  }
}
