import { AnimationMixer, Clock, Group } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class Pokeball {
  private object!: Group;
  private clock: Clock;
  private animation!: AnimationMixer;

  constructor(private readonly scene: Scene, private loader: GLTFLoader) {
    this.clock = new Clock();
    loader.load("/models/pokeball.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      this.animar(gltf);
      scene.add(this.object);
      this.update();
    });
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * 7.5) / 150;
      console.log("ratio", ratio);
      this.object.translateY(-0.5);
      this.object.translateX(ratio);
      this.object.translateZ(-23);
      this.object.rotateY(-Math.PI / 1.4); // 90°
    } else {
      this.object.translateY(5.8);
      this.object.translateZ(-20);
      this.object.rotateY(-Math.PI / 2);
    }
    this.object.rotateZ(Math.PI / 0.48);
    this.object.scale.set(2, 2, 2);
  }

  private animar(gltf: GLTF) {
    this.animation = new AnimationMixer(this.object);
    const action = this.animation.clipAction(gltf.animations[0]);
    action.play();
  }

  private update() {
    const delta = this.clock.getDelta();
    if (this.object) this.animation.update(delta);
    requestAnimationFrame(this.update.bind(this));
  }
}
