import { AmbientLight, HemisphereLight, Scene } from "three";

export default class Lights {
  constructor(scene: Scene) {
    // crear una luz ambiental y agregarla a la escena
    scene.add(new AmbientLight(0xffffff));
    // crear una luz hemisférica y agregarla a la escena
    scene.add(new HemisphereLight(0xffffff));
  }
}
