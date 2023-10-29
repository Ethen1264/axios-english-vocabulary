import axios from 'axios'
import {useState, useEffect} from 'react'

export default function useAxios(url) {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url)
      .then(res => {
        setData(res.data)
      })
  }, [url])

  return data;
}