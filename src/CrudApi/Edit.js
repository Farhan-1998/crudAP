import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Edit = () => {
     const [id, setId] = useState(0);
     const [name, setName] = useState('');
     const [age, setAge] = useState('');
     const [email, setEmail] = useState('');
     const navigate = useNavigate();
     useEffect(() => {
     setId(localStorage.getItem('id'));
     setName(localStorage.getItem('name'));
     setAge(localStorage.getItem('age'));
     setEmail(localStorage.getItem('email'));
     }, [])
     
     const handleUpdate = (e)=>{
       e.preventDefault();
       axios.put(`https://6438ec3c4660f26eb1a6195a.mockapi.io/crud/${id}`,{
         e_name : name,
         e_age : age,
         e_email : email
       }).then(()=>{
        navigate('/')
       });
    
     }

  return (
    <>
    <div className='row'>
      <div className="col-md-4">
      <div className='my-5'>
           <Link to='/'>
           <button className='btn btn-primary'>Update New Data</button>
           </Link>
          </div>
        <div className="text-center">
          <h2>Update Data</h2>
        </div>
          <form onSubmit={handleUpdate} className='border shadow p-3'>
              <div className="form-group">
                  <label htmlFor="">Enter Name : </label>
                  <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
              </div>
              <div className="form-group">
                  <label htmlFor="">Enter Age : </label>
                  <input type="number" className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age' />
              </div>
              <div className="form-group">
                  <label htmlFor="">Enter Email : </label>
                  <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
              </div>
              <div className="d-grid my-3">
                <input type="submit" value='Update' className='btn btn-primary' />
              </div>
          </form>
      </div>
    </div>
  </>
  );
}

export default Edit;
