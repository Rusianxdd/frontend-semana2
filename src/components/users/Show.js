import {   useEffect, useState } from 'react'
import Axios from 'axios';




export const Show = () => {


    const [datos, setDatos] = useState();

        useEffect(() => {
            Axios.get('http://localhost:5000/user')
        .then(result=>{
            
            const {data} = result;
         
            setDatos(JSON.stringify(data))
            console.log(datos)
        }).catch(err=>{
            console.log(err);
        });
        }, [datos]);

       

    return (
        <>
            {
               datos
            }
        </>
    )
   
}
