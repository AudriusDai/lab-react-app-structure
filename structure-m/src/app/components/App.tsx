import React, { FC } from "react";
import { Switch, Route, Link } from "react-router-dom";
import SamplePage from "./sample/SamplePage";
import ExamplePage from "./example/ExamplePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

const App: FC = () => {
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="/sample" component={SamplePage} />
        <Route path="/example" component={ExamplePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
