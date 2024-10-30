import "./DiaryItem.scss";

import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../utils/get-emotion-images";
import Button from "./Button";

function DiaryItem({ id, emotionId, createdDate, content }) {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="이미지" />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() =>nav(`/edit/${id}`)} text="수정하기" />
      </div>
    </div>
  );
}

export default DiaryItem;
