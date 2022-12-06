import React from 'react'; 
import Heading from '../layout/Heading';
//import { BASE_URL } from "../../constants/Api"; 
import LoginForm from '../../components/login/LoginForm';

export default function Login() {
  return (
    <>
  <Heading title="Login page" />
   <LoginForm />
  </>
  );
}