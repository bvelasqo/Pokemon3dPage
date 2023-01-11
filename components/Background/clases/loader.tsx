import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// loader class to load models and textures from the server with the help of three.js library
export default class Loader extends GLTFLoader {
  constructor() {
    super();
    // creamos un DRACOLoader para cargar los modelos en formato gltf o glb y los convertimos a formato binario para que sean más pequeños y se carguen más rápido
    const dracoLoader = new DRACOLoader();
    // establecer la ruta del archivo .wasm de draco para que el cargador de draco pueda decodificar los archivos gltf o glb
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    // establecer el tipo de archivo que se va a cargar (en este caso, gltf) y el cargador de draco que se va a usar para cargar el archivo
    dracoLoader.setDecoderConfig({ type: "js" });
    // establecer el cargador de draco como el cargador predeterminado para los archivos gltf o glb
    this.setDRACOLoader(dracoLoader);
  }
}
