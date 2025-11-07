import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routing from "./router/Routing";
import Header from "./components/Header/Header";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
}

export default App;