import "./App.css";

import { Routes, Route } from "react-router-dom";

//페이지 임포트
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Diary from "./pages/diary/Diary";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
