import "./App.scss";

import { useRef, useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";

//라우트 설정
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Diary from "./pages/diary/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/edit/edit";

const mokData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? { ...item, ...action.data } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  function onCreate(createdDate, emotionId, content) {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  }

  function onUpdate(id, createdDate, emotionId, content) {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  }

  function onDelte(id) {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelte, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
