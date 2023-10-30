import {useNavigate} from 'react-router'
import useAxios from '../hooks/useAxios'
import axios from 'axios'

export default function CreateWord() {
  const days = useAxios('http://localhost:3001/days');
  const Navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

      axios.post(`http://localhost:3001/words/`, {
        day:dayAxios.current.value,
        eng:engAxios.current.value,
        kor:korAxios.current.value,
        isDone:false
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.status === 200) {
            alert('생성이 완료 되었습니다.');
            Navigate.push(`/day/${dayAxios.current.value}`)
          }
        })
        .catch(error => {
          console.error('데이터 업데이트 중 에러 발생:', error);
        });
  }

  const engAxios = useAxios(null)
  const korAxios = useAxios(null)
  const dayAxios = useAxios(null)

  return( 
  <form onSubmit={onSubmit}>
    <div className='input_area'>
      <label>Eng</label>
      <input type='text' placeholder='computer' ref={engAxios}></input>
    </div>
    <div className='input_area'>
      <label>Kor</label>
      <input type='text' placeholder='컴퓨터' ref={korAxios}></input>
    </div>
    <div className='input_area'>
      <label>Day</label>
      <select ref={dayAxios}>
        {days.map(day=>(
        <option key={day.id} value={day.day}>{day.day}</option>
        ))}
      </select>
    </div>
    <button>저장</button>
  </form>
  )
}