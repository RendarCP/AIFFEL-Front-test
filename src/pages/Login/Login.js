import React, { useState } from 'react'

// component
import Input from '../../components/Input/Input.js'
import Spacer from '../../components/Spacer/Spacer'
import Button from '../../components/Button/Button'
import Validation from '../../components/Validation/Validation'

import { useDispatch } from 'react-redux'
import { login_success, login_fail } from '../../modules/user';

import { LoginContainer } from './style'
import logo from '../../Images/aiffel_logo.png'
import axios from 'axios';

function Login({ history }) {
  const [inputs, setInputs] = useState({
    userId: '',
    password: ''
  })
  //이메일 정규표현식
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  
  // 리덕스 처리
  const dispatch = useDispatch();
  const login = data => dispatch(login_success(data))
  const fail = err => dispatch(login_fail(err))
  
  // input 관련 onChange 함수
  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value 
    })
  }

  // 로그인 함수
  const onLogin = () => {
    const params = {
      "email" : inputs.userId,
      "password" : inputs.password
    }
    const query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    const url = 'http://localhost:5000/login?' + query
    axios.get(url)
    .then( res => {
      console.log('response', res.data[0]);
      login(res.data[0])
      history.push('/forum')
    })
    .catch( err => {
      console.log(err);
      fail(err)
      alert('아이디와 비밀번호를 확인해주세요')
    })
  }

  return(
    <LoginContainer>
      <img alt="로고" src={logo} />
      
      <Spacer top={30} />
      <Input 
        name="userId" 
        value={inputs.userId} 
        onChange={onChange}
        placeholder="이메일"
      />
      { emailRegex.test(inputs.userId) ? null : <Validation title="이메일 형식이 아닙니다" />}
      
      <Spacer top={30} />
      <Input 
        type="password"
        name="password" 
        value={inputs.password} 
        onChange={onChange} 
        placeholder="비밀번호"
      />
      { inputs.password.length > 10 ? null : <Validation title="비밀번호는 10자리 이상입니다." />}

      <Spacer top={30} />
      <Button title="로그인" click={onLogin}/>
    </LoginContainer>
  )
}

export default Login