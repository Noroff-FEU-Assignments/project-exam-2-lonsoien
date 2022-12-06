import React from 'react'; 
import Heading from '../layout/Heading';
import { BASE_URL } from "../../constants/Api"; 

export default function Login() {
  return (
    <>
  <Heading title="Login page" />
   {BASE_URL}
  </>
  );
}