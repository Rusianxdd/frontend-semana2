import React, { useState } from 'react'
import Axios from 'axios';
import { Link , useHistory } from "react-router-dom";

import './login.css';
export const Login = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [acceso, setAcceso] = useState();

        let history = useHistory();


        const inputEmail = (e)=>{
        
            setEmail(e.target.value); 
        }
        const inputPassword = (e)=>{
            
            setPassword(e.target.value); 
        }

        const handleSubmit = (e) => { 
            e.preventDefault();

            Axios.post('http://localhost:5000/login',{
                email:email,
                password:password
            }).then(result=>{
                
               
                setAcceso(true)
                
            }).catch(err=>{
                console.log(err);
            });
            
        }
    
        function handleClick() {
    
                history.push("/home");
         
          }
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
        </div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="email" className="form-control" placeholder="email" value={email} onChange={inputEmail}/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password" value={password} onChange={inputPassword}/>
					</div>

					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn" onClick={handleClick}/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
                ¿No tienes una cuenta?<Link to="/create">Registrar</Link>
				</div>
				<div className="d-flex justify-content-center">
					<a href="">¿Olvidaste tu contraseña?</a>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}
