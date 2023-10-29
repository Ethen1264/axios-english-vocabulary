import { useState } from 'react';
import axios from 'axios'
export default function Word(props) {
  const [word, setWord] = useState(props.word)
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone)

  function toggleShow() {
    setIsShow(!isShow)
  }
  function toggleDone() {
    axios.put(`http://localhost:3001/words/${word.id}`, {
      ...word,
      isDone: !isDone,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.status === 200) {
          setIsDone(!isDone);
        }
      })
      .catch(error => {
        console.error('데이터 업데이트 중 에러 발생:', error);
      });
  }
  
  function del() {
    if (window.confirm('삭제 하시겠습니까?')) {
      axios.delete(`http://localhost:3001/words/${word.id}`)
        .then(response => {
          if (response.status === 200) {
            setWord({ ...word, id: 0 });
          }
        })
        .catch(error => {
          console.error('데이터 삭제 중 에러 발생:', error);
        });
    }
  }
  

  if(word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
    <td><input type='checkbox' checked={isDone}
    onChange={toggleDone}
    /></td>
    <td>{word.eng}</td>
    <td>{isShow && word.kor}</td>
    <td>
      <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기" }</button>
      <button className='btn_del' onClick={del}>삭제</button>
    </td>
  </tr>
  )
}