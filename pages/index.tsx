import Background from "../components/Background";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

function ThreeJSSkybox(): JSX.Element {
  return (
    <div>
      <div id="container">
        <Section />
        <Section2 />
        <Section3 />
      </div>
      <Background />
    </div>
  );
}

export default ThreeJSSkybox;
