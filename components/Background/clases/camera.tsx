import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
  private container: HTMLElement | null;
  /**
     * PARAMETROS PRA LA CAMARA
     * {
      50, // fov: field of view (grado de visión)
      window.innerWidth / window.innerHeight, // aspect ratio (relación de aspecto),
      0.1, // near clipping plane (plano de recorte cercano),
      1000, // far clipping plane (plano de recorte lejano)
    }
     */
  constructor(fov: number, aspect: number, near: number, far: number) {
    super(fov, aspect, near, far);
    this.container = document.getElementById("container");
    this.container!.onscroll = this.moveCamera.bind(this);
    // cambiar la posición de la cámara en el eje y (altura)
    this.position.setY(3);
  }

  private moveCamera = () => {
    // obtener pixeles de scroll en el eje y (altura)
    const scrollTop = this.container!.scrollTop;
    // obtener el alto total del scroll del componente container (altura total)
    const scrollHeight = this.container!.scrollHeight;
    // obtener el alto de la pantalla (altura de la pantalla)
    const scrollOffsetHeight = this.container!.offsetHeight;

    // scrollheight - scrollOffsetHeight nos el valor maximo con el que podemos llegar abajo
    // es decir que el valor maximo de scrollTop es scrollHeight - scrollOffsetHeight
    // obtener el porcentaje de scroll en el eje y (scrollTop / (scrollHeight - scrollOffsetHeight)) (porcentaje de scroll en el eje y que se encuentra el usuario)
    const scrollPercent = scrollTop / (scrollHeight - scrollOffsetHeight);
    const t = scrollPercent * 100;

    this.position.z = t * 0.35;
    this.position.x = t * 0.025;
    this.rotation.y = t * 0.025;
  };
}
