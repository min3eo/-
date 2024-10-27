import Header from "../../components/Header";
import Button from "../../components/Button";
import DiaryList from "../../components/DiaryList";

function Home() {
  // 현재 날짜를 연, 월, 일로 포맷팅
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <div>
      <Header title={formattedDate} leftChild={<Button text='<'/>} rightChild={<Button text='>'/>}/>
      <DiaryList />
    </div>
  );
}

export default Home;
