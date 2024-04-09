import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
    const navigate = useNavigate();
    const [formData,setFormData]  = useState({
        username:"",
        password:""
    })
    //input에 변경이일어났을때 상태 업데이트 
    const onChange = (e) => {
        const { name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    } 
    //초기화
    const onReset = () => {
        setFormData({
            username:"",
            password:""
        })
    }
    //로그인버튼 클릭시
    const onSubmit = (e) => {
        //전송요청이벤트 제거 
        e.preventDefault();
        //입력이 다 되었는지 체크후 함수호출
        if(formData.username && formData.password){
            memberLogin();
        }
    }
    async function memberLogin(){
        try{
            const response = await axios.post(
                "http://localhost:8081/member/login",formData);
            //로그인 성공시 받은 토큰을 세션스토리지(브라우저 저장소)에 저장
            //response.data { grantType: "Bdddd", accessToken:"ddfddfdfdfdd",}
            const jwtToken = response.data.grantType+" "+response.data.accessToken;
            sessionStorage.setItem("jwt",jwtToken);
            setAuth(true);
            //메인페이지 이동
            navigate("/");
        }
        catch(e){
            console.log(e);
        }
       
    }
    return ( 
        <div>
            <h2>로그인하기</h2>
            <form onSubmit={onSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" 
                name="username"
                value={formData.username} 
                onChange={onChange} className="form-control" 
                id="exampleInputEmail1" aria-describedby="emailHelp" 
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"
                            name="password"
                            value={formData.password} 
                            onChange={onChange} className="form-control" id="exampleInputPassword1"/>
            </div> 
            <div>
                    <button type="submit" className="btn btn-primary">로그인</button>
                    <button type="reset" className="btn btn-primary" onClick={onReset}>취소</button>
                </div>   
            </form>
        </div>
    );
}

export default Login;