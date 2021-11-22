import React from "react";
import { Route, Routes  } from "react-router-dom";


import {routes} from "./utils/path";

function App() {
  return (
    <div className="App">
      <Routes >
          {routes.map(({component, path}) =>
              <Route path={path} component={component} />
          )}
      </Routes >
    </div>
  );
}

export default App;
