import React, { useEffect,useState } from 'react';
import axios from 'axios';

const AxiosApi = () => {
    const [myData,setMyData] = useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>setMyData(res.data));
    },[]);
  return (
    <div>
      <h1>Hello Axios</h1>
      {myData.map((e)=>{
        const {id,title,body} = e;
        return(
          <div key={id}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AxiosApi;
