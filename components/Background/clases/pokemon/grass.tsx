import { Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Grass {
  private object!: Group;

  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    this.scene = scene;
    loader.load("/models/grass.glb", (gltf) => {
      this.object = gltf.scene;
      scene.add(this.object);
      this.clone(-9, 11);
      this.clone(-7, 11);
      this.clone(-6, 12);
      this.clone(-6, 14);
      this.clone(-9, 13);
      this.clone(-7, 13);
      this.clone(-5, 13);
      this.clone(-5, 15);
      this.clone(-9, 16);
      this.clone(-7, 16.5);
      this.clone(-6, 16);
      this.clone(-8, 17);
      this.clone(-10, 17);
    });
  }

  private clone = (x: number, z: number) => {
    const clone = this.object.clone();
    clone.translateY(-2);
    clone.translateX(x);
    clone.translateZ(z);
    clone.rotateY(Math.PI / 4);
    this.scene.add(clone);
  };

  private posicionar() {
    this.object.translateZ(15);
    this.object.translateY(-2);
    this.object.translateX(-10);
    this.object.rotateY(Math.PI / 2); // 90°
    this.object.scale.set(0.8, 0.8, 0.8);
  }
}
