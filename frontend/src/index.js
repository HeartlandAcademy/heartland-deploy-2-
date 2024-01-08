import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import "./assets/bootstrap.min.css";
import "./index.css";
import "./assets/myColor.css";
import store from "./store";
import SubDomainApp from "./components/SubDomainApp";

const hostname = window.location.hostname;

ReactDOM.render(
  <Provider store={store}>
    {/* {hostname && hostname === "womenscentre.heartlandacademy.edu.np" ? (
      <SubDomainApp />
    ) : (
      <App />
    )} */}
    <App />
  </Provider>,
  document.querySelector("#root")
);
