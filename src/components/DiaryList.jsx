import "./DiaryList.scss";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

function DiaryList() {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text="새로운 일기 작성" type="POSITIVE" />
      </div>
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
}

export default DiaryList;
