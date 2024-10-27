import "./DiaryItem.scss";

import { getEmotionImage } from "../utils/get-emotion-images";
import Button from "./Button";

function DiaryItem() {
  const emotionId = 5;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="이미지" />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 예시 내용</div>
      </div>
      <div className="button_section">
        <Button text="수정하기" />
      </div>
    </div>
  );
}

export default DiaryItem;
