import "./default.scss";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import HomepageLayout from "./layouts/HomepageLayout";
import Registration from "./pages/Registration";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
      path="/"
      element={
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      }
    />
    <Route
    path="/"
    element={
      <MainLayout>
        <Registration />
      </MainLayout>
    }
  />
      </Routes>
    </div>
  );
}

export default App;
