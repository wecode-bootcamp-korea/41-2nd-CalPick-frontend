import { useState, useEffect } from 'react';

export default function useFetch(url, method = 'GET', options) {
  const [fetchData, setFetchData] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('accessToken');

  const fetchResult = () => {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      ...options,
    })
      .then(res => res.json())
      .then(data => {
        setFetchData(data);
      })
      .catch(e => setError(e.message))
      .finally(setLoding(false));
  };

  useEffect(() => fetchResult(), [url]);

  return [fetchData, error, loding];
}
