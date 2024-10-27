import "./App.scss";

import { Routes, Route } from "react-router-dom";

//라우트 설정
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Diary from "./pages/diary/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/edit/edit";
import { useReducer } from "react";

const mokData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용'
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용'
  }
]

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch ] = useReducer(reducer, mokData);

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
