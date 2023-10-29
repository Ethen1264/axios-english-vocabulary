import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Word from './Word';
import axios from 'axios'
import useAxios from '../hooks/useAxios';

export default function Day() {
  const a = useParams();
  const day = a.day;
  // const wordList = dummy.words.filter(word => word.day === Number(day));
  // const [word, setWords] = useState([])

  // useEffect(() => {
  //   axios(`http://localhost:3001/Words?day=${day}`)
  //     .then(res => {
  //       setWords(res.data)
  //     })
  // }, [day])

  const words = useAxios(`http://localhost:3001/Words?day=${day}`)

  return (
    <>
    <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
          <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}