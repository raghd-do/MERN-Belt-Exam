import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./views/Main";
import AddPet from "./views/AddPet";
import UpdatePet from "./views/UpdatePet";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/pets/new">
            <AddPet />
          </Route>
          <Route exact path="/pets/:id/edit">
            <UpdatePet />
          </Route>
          <Route exact path="/pets/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
