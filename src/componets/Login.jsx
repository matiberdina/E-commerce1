import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


import useInput from "../hook/useInput";
import { setUser , sendLogin } from "../states/usario";


//importar setUser de redux
const Login = function(){
    //setUser
    const navigate = useNavigate();
    const email = useInput();
    const pass = useInput();
    const dispatch = useDispatch()

    // const handleLogin = (e) => {
    //     console.log("hasta acá funciona")
    //     e.preventDefault();
    //     axios
    //         .post("/api/login", { //consultar ruta al back team
    //         email: email.value,
    //         password: pass.value
    //         })
    //         .then((res) => { dispatch(setUser(res.data))// setear el usuario redux---luego para pedir user en otros comp, usamos useSelector
    //         navigate("/")}) //definir a donde redirecciona
    //         .catch(err=>console.log(err))
    // };
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(sendLogin(email , pass))
        .then((res)=>{console.log(res)
        navigate('/home')})
        .catch((err)=>console.log(err))
    }
    const register = ()=>{
        navigate("/register")
    }
    return(
        <form id="login" class="container" onSubmit={handleLogin}>
            <h3>Login</h3><br/>
            <div  class="field">
                <p class="control has-icons-left has-icons-right">
                    <input {...email} class="input" type="email" placeholder="Email"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div id="margen" class="field">
                <p class="control has-icons-left">
                    <input {...pass} class="input" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <input id="margen" type="submit" class="button is-success is-fullwidth" value="Sing In"/>
            <div id="margen" id="verticalCenter" class="field">
                <p id="borderText" class="control">
                    <a>No estas registrado?</a>
                </p>
            </div>
            <div id="margen" class="field">
                <p class="control">
                    <button onClick={register} class="button is-link is-fullwidth">Sing Up</button>
                </p>
            </div>
        </form>
    )
}
export default Login