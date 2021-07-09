import React, { useState } from 'react'
import Axios from 'axios';
import './register.css';
import { Link, Redirect, useHistory } from 'react-router-dom';

export const Register = () => {

    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    
    let history = useHistory();

    function handleClick() {
            history.push("/login");
      }


    const inputUsername = (e)=>{
        
        setUsername(e.target.value);

      
    }
    const inputLastName = (e)=>{
        
        setLastname(e.target.value);

      
    }
    const inputAge = (e)=>{
        
        setAge(e.target.value); 
    }
    const inputEmail = (e)=>{
        
        setEmail(e.target.value); 
    }
    const inputPassword = (e)=>{
        
        setPassword(e.target.value); 
    }
    const inputState = (e)=>{
      
        setState(e.target.value);

      
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        Axios.post('http://localhost:5000/user',{
            name:username,
            lastname:lastname,
            age:age,
            email:email,
            password:password,
            state:state
        }).then(result=>{
            setUsername("");
            setPassword("");
            setAge("");
            setEmail("");
            setLastname("");
            
        }).catch(err=>{
            alert('El email ya esta ligado a otra cuenta');
            console.log(err);
        });
    }

    return (
        <>
          
           <div className="container bg-light bg-gradient"  >
              
               <form onSubmit={handleSubmit}> 
               <h1 className="text-center">Registrar Usuario</h1>
                    <div className="form-group">
                        <label htmlFor="user">Nombres</label>
                        <input type="text" className="form-control" id="user"  placeholder="Nombre" name="name"  onChange={inputUsername} value={username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Apellidos</label>
                        <input type="text" className="form-control" id="lastname"  placeholder="Apellidos" name="lastname"  onChange={inputLastName} value={lastname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Edad</label>
                        <input type="number" className="form-control" id="age"  placeholder="Edad" name="age"  onChange={inputAge} value={age}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="age"  placeholder="example@gmail.com" name="age"  onChange={inputEmail} value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={inputPassword} value={password}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mr-2" onClick={handleClick}>Registrarse</button>
                    <Link  className="btn btn-danger mt-3" to="/login">Cancelar</Link>
                    
                </form>
            </div>
        </>
    )
}
