import React, { FC } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./components/App";

const FinalApp: FC = () => {
  const store = configureStore(null);
  return (
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  );
};

export default FinalApp;
