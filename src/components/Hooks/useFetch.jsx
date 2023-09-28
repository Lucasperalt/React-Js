import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[Data, setData] = useState(null);
    const getData = () => {
        fetch(url)
        .then(Response => Response.json())
        .then( data => setData(data))
        .catch( error => console.log(error))
    }
    useEffect(() => {
        getData()
    },[])
  return [Data]
}

export default useFetch