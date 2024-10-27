import "./App.scss";

import { Routes, Route } from "react-router-dom";

//라우트 설정
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Diary from "./pages/diary/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/edit/edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
