import React from "react";
import ReactDOM from "react-dom";
import { TopErrorBoundary } from "./components/TopErrorBoundary";
import { IsMobileProvider } from "./is-mobile";
import { App } from "./components/App";
import "./styles.scss";

// Block pinch-zooming on iOS outside of the content area
document.addEventListener(
  "touchmove",
  function(event) {
    // @ts-ignore
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  { passive: false },
);

const Main = (props: { width: number; height: number }) => (
  <TopErrorBoundary>
    <IsMobileProvider>
      <App width={props.width} height={props.height} />
    </IsMobileProvider>
  </TopErrorBoundary>
);

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.render(<Main width={800} height={600} />, rootElement);
