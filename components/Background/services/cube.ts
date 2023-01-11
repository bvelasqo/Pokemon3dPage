import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from "three";

export const crearCubo = (scene: Scene) => {
  //crear cubo
  const geometry = new BoxGeometry(1, 1, 1);
  // crear material (color, textura, etc)
  const material = new MeshBasicMaterial({ color: 0xff0000 });
  // crear mesh (cubo con material)
  const cube = new Mesh(geometry, material);
  // añadir cubo a la escena
  scene.add(cube);
  return cube;
};
