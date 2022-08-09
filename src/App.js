import Home from "./routes/Home.js"
import RouterCom from "./components/router";

import Footer from "./components/Footer.js";

function App() {
  return (
    <div style={{height:"inherit"}}>
      <RouterCom style={{height: "auto"}}/>
    </div>
  );
}

export default App;
