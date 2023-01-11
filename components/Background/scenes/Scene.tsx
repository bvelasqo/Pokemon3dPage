import { Scene as SceneThree } from "three";
import Camera from "../clases/camera";
import Lights from "../clases/lights";
import Loader from "../clases/loader";
import Charizard from "../clases/pokemon/charizard";
import Entei from "../clases/pokemon/entei";
import { Grass } from "../clases/pokemon/grass";
import Groudon from "../clases/pokemon/groudon";
import Logo from "../clases/pokemon/logo";
import Pokeball from "../clases/pokemon/pokeball";
import Zekrom from "../clases/pokemon/zekrom";
import Skybox from "../clases/skybox";
import Renderer from "../Renderer";

export default class Scene extends SceneThree {
  private camera: Camera;

  constructor(renderer: Renderer) {
    super();
    const loader = new Loader();
    this.camera = new Camera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    new Lights(this);
    new Skybox(this);
    new Logo(this, loader);
    new Pokeball(this, loader);
    new Entei(this, loader);
    new Groudon(this, loader);
    new Charizard(this, loader);
    new Zekrom(this, loader);
    new Grass(this, loader);
    this.update(renderer);
  }

  public update = (renderer: Renderer) => {
    renderer.render(this, this.camera);
    requestAnimationFrame(this.update.bind(this, renderer));
  };
}
