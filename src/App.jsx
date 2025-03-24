import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="container">
      <h1 className="my-4 display-5">Vocab App</h1>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
}
