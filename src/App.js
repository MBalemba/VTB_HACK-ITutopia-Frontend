import React from "react";
import { Route, Routes  } from "react-router-dom";


import {AUTH_ROUTE, routes} from "./utils/path";
import AuthPage from "./components/pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
              <Route>
                  <Route path={AUTH_ROUTE} element={< AuthPage/>} />
              </Route>
      </Routes >
    </div>
  );
}

export default App;
