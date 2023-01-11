import { AppPropsType } from "next/dist/shared/lib/utils";
import "../styles/index.css";
import "../styles/sections.css";

function MyApp({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />;
}

export default MyApp;
