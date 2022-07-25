import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./routes/main/main.component";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
