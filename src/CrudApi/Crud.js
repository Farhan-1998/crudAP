import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Crud = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [email, setEmail] = useState('')
  
   const navigate = useNavigate();

  const handlerSubmit = (e)=>{
    e.preventDefault();
    axios.post('https://6438ec3c4660f26eb1a6195a.mockapi.io/crud',{
      e_name : name,
      e_age : age,
      e_email : email
    }).then(()=>{
      navigate('/');
    })

  }

  return (
    <>
      <div className='row'>
        <div className="col-md-4">
        <div className='my-5'>
             <Link to='/'>
             <button className='btn btn-primary'>Create New Data</button>
             </Link>
            </div>
          <div className="text-center">
            <h2>Create Data</h2>
          </div>
            <form className='border shadow p-3' onSubmit={handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="">Enter Name : </label>
                    <input type="text" className='form-control' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Enter Age : </label>
                    <input type="number" className='form-control' placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Enter Email : </label>
                    <input type="text" className='form-control' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="d-grid my-3">
                  <input type="submit" value='Submit' className='btn btn-primary' />
                </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default Crud;
