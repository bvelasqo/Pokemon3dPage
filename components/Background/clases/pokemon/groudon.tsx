import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class Groudon {
  private object!: Group;

  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    loader.load("/models/groudon.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      scene.add(this.object);
    });
  }

  private posicionar() {
    this.object.translateY(-2);
    this.object.translateX(-9);
    this.object.translateZ(11.5);
    this.object.rotateY(Math.PI / 6);
  }
}
