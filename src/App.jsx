import { Provider } from "react-redux";
import { store } from "./redux/store";

import Card from "./components/Card";
import Kart from "./components/Kart";

function App() {
  return (
    <div className="text-3xl">
      <Provider store={store}>
        <Card />
        <Kart />
      </Provider>
    </div>
  );
}

export default App;
