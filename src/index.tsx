import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";

const Fallback = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "mintcream",
    }}
  ></div>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
