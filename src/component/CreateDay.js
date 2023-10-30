import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import axios from 'axios'
import Navigate from 'react-router-dom';

export default function CreateDay() {
  const days = useAxios("http://localhost:3001/days");
  const Navigate = useNavigate();
  function addDay(){
        axios.post(`http://localhost:3001/days/`, {
        day:days.length+1
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.status === 200) {
            alert('생성이 완료 되었습니다.');
            Navigate.push(`/`)
          }
        })
        .catch(error => {
          console.error('데이터 업데이트 중 에러 발생:', error);
        });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
} 