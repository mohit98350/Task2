import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="detail" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
