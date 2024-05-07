import { Outlet } from "react-router-dom";

import "../src/App.css";
import Nav from "./component/common/Nav";
import Footer from "./component/common/Footer";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
