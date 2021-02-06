import React from "react";
import ReactDOM from "react-dom";
import app from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./service-worker";


ReactDOM.render(<app />, document.getElementById("root"));

serviceWorker.unregister();