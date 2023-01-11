import {
  BackSide,
  Mesh,
  MeshPhongMaterial,
  Scene,
  SphereGeometry,
  TextureLoader,
} from "three";
export default class Skybox {
  private scene: Scene;
  private skybox: Mesh;
  private textureLoader: TextureLoader;
  constructor(scene: Scene) {
    this.scene = scene;
    // crear un cargador de texturas y cargar una textura
    this.textureLoader = new TextureLoader();
    /// crear un material de esfera usando la textura de la caja de fondo y configurar el material para que la caja de fondo sea de doble cara. Finalmente, cree una esfera de geometría y agregue el material a la esfera, agregue la esfera a la escena
    this.skybox = new Mesh(
      new SphereGeometry(500, 60, 40),
      new MeshPhongMaterial({
        map: this.textureLoader.load("/skybox/custom-sky.png"),
        side: BackSide,
      })
    );
    this.scene.add(this.skybox);
    // agregar la caja de fondo a la escena
  }
  public update = () => {
    this.skybox.rotation.y += 0.0005;
  };
}
