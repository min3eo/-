import { useParams } from "react-router-dom";

function Diary() {
  const params = useParams();
  console.log(params);
  
  return (
    <>
      <h1>다이어리 페이지</h1>
    </>
  );
}

export default Diary;
