import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import React from "react";
import Post1 from "./Components/Post1";
import "./App.css";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Post1 />
    </Provider>
  );
}

export default App;
