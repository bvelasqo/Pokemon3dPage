import { WebGL1Renderer } from "three";
import Scene from "./scenes/Scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    // antialias: suaviza los bordes de los objetos
    // canvas: elemento del DOM donde se va a renderizar la escena
    super({
      antialias: true,
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });
    // establecer el pixel ratio (relación de píxeles)
    // this.setPixelRatio(window.devicePixelRatio);
    this.config();
    new Scene(this);
  }

  private config() {
    // establecer el tamaño del renderizador
    this.setSize(window.innerWidth, window.innerHeight);
    // reload de la ventana cada que se llama el resize en el browser
    window.addEventListener("resize", this.resize);
  }

  private resize() {
    window.location.reload();
  }
}
