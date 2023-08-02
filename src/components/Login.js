import React from 'react'

import { useForm } from 'react-hook-form';

import { useNavigate } from "react-router-dom";

import useLocalStorage from "use-local-storage";








function Login() {
  const navigate = useNavigate();
  
  const [user,setUser] = useLocalStorage('user',"");
  const [password,setPassword] = useLocalStorage('password',"");

  const onSubmit= (data)=>{
  
    setUser(data.name);
    localStorage.setItem("user",data.name)
    setPassword(data.password)
    localStorage.setItem("password",data.password)
    navigate('/add');
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>

      <label>Kullanıcı Adı</label>
      <input {...register('name', { required: {
        value:true,
        message:"Kullanıcı adı boş olamaz"} } )} autoFocus='true' />
        <span>{errors?.name?.message}</span>
      <label>Parola</label>  
      <input {...register('password', { required:
         {value:true,
          message:"Parola boş olamaz"
         },
         
          minLength:{
            value:6,
            message:"Parola 6 karakterden az olamaz"
         } })} type='password'/>
          <span>{errors?.password?.message}</span>
      {errors.lastName && <p>Last name is required.</p>}
      <input type="submit" onClick={onsubmit}/>
    </form>
  );
}







export default Login