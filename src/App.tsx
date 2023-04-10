import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WideButton from "./components/buttons/wideButton";
import { ButtonType } from "./types/generals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { pagesRoutes } from "./constants/pageUrls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {pagesRoutes.map((page) => (
              <Route path={page.path} element={page.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
