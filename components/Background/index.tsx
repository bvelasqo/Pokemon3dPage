import { Component } from "react";
import {
  AmbientLight,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  WebGL1Renderer,
} from "three";
import Renderer from "./Renderer";

export default class Background extends Component {
  componentDidMount = () => new Renderer();
  render = () => (
    <div>
      <canvas id="bg" />
    </div>
  );
}
