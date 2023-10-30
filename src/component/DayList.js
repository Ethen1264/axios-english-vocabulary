import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import useAxios from '../hooks/useAxios';

export default function DayList() {
  const days = useAxios('http://localhost:3001/days')

  // const [days, setDays] = useState([])

  // useEffect(() => {
  //   axios('http://localhost:3001/days')
  //     .then(res => {
  //       setDays(res.data)
  //     })
  // }, [])

  return (
    <>
    <ul className='list_day'>
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
    </>
  );
}