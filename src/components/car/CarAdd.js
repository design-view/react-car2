import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CarAdd() {
    const navigate = useNavigate();
    const [formData,setFormData]  = useState({
        brand:"", 
        model:"",
        color:"", 
        registerNumber:"",
        year:"",
        price:"",
        dealerId:"1"
    })
    //input에 변경이일어났을때 상태 업데이트 
    const onChange = (e) => {
        const { name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    } 
    //폼태그 생성 
    //<from><input name="upload" value=File/></form>
    const carFormData = new FormData();
    //파일타입의 input에 변경이 일어났을때
    const onChangeImage = (e) => {
        const {name} = e.target;
        console.dir(e.target);
        //파일이 업로드 되었을때 이벤트가 발생한 인풋의 files속성이 있을때 
        //files의 길이가 0보다 클때
        if(e.target.files && e.target.files.length > 0){
            //폼태크에 속성 추가하기
            carFormData.append(name,e.target.files[0]);
        }
    }
    //초기화
    const onReset = () => {
        setFormData({
            brand:"", 
            model:"",
            color:"", 
            registerNumber:"",
            year:"",
            price:"",
            dealerId:"1"
        })
    }
    //등록버튼 클릭시
    const onSubmit = (e) => {
        //전송요청이벤트 제거 
        e.preventDefault();
        //입력이 다 되었는지 체크후 함수호출
        if(formData.brand && formData.model 
            && formData.color && formData.year
            && formData.price && formData.registerNumber
        ){
            carInsert();
        }
    }
    async function carInsert(){
        //폼에 전달한 속성을 다 추가
        carFormData.append("brand",formData.brand);
        carFormData.append("model",formData.model);
        carFormData.append("color",formData.color);
        carFormData.append("registerNumber",formData.registerNumber);
        carFormData.append("year",formData.year);
        carFormData.append("price",formData.price);
        carFormData.append("dealerId",formData.dealerId);
        try{
            const response = await axios.post(
                "http://localhost:8081/addCar",carFormData,{
                    headers: {
                        "Content-Type":"multipart/form-data"
                    }
                });
            //ok, fail
            if(response.data==="ok"){
                navigate("/")
            }
        }
        catch(e){
            console.log(e);
        }
       
    }
    return ( 
    <div>
        <h2>차량 등록 하기</h2>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label for="brand" class="form-label">브랜드</label>
                    <input type="text" 
                    name="brand"
                    value={formData.brand} 
                    onChange={onChange} className="form-control" 
                    id="brand" aria-describedby="brandHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="model" class="form-label">모델</label>
                    <input type="text" 
                    name="model"
                    value={formData.model} 
                    onChange={onChange} className="form-control" 
                    id="model" aria-describedby="modelHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="color" class="form-label">색상</label>
                    <input type="text" 
                    name="color"
                    value={formData.color} 
                    onChange={onChange} className="form-control" 
                    id="color" aria-describedby="colorHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="registerNumber" class="form-label">등록번호</label>
                    <input type="text" 
                    name="registerNumber"
                    value={formData.registerNumber} 
                    onChange={onChange} className="form-control" 
                    id="registerNumber" aria-describedby="registerNumberHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">가격</label>
                    <input type="text" 
                    name="price"
                    value={formData.price} 
                    onChange={onChange} className="form-control" 
                    id="price" aria-describedby="priceHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">년도</label>
                    <input type="text" 
                    name="year"
                    value={formData.year} 
                    onChange={onChange} className="form-control" 
                    id="year" aria-describedby="yearHelp" 
                    />
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">이미지1</label>
                    <input type='file' className='custom-file-input form-control' 
                            name='uploadFiles' onChange={onChangeImage}/>
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">이미지2</label>
                    <input type='file' className='custom-file-input form-control' 
                            name='uploadFiles' onChange={onChangeImage}/>
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">이미지3</label>
                    <input type='file' className='custom-file-input form-control' 
                            name='uploadFiles' onChange={onChangeImage}/>
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">이미지4</label>
                    <input type='file' className='custom-file-input form-control' 
                            name='uploadFiles' onChange={onChangeImage}/>
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">이미지5</label>
                    <input type='file' className='custom-file-input form-control' 
                            name='uploadFiles' onChange={onChangeImage}/>
                </div>
                <div> 
                    <button className="btn btn-primary" type="submit">등록</button>
                    <button  className="btn btn-primary"type="reset" onClick={onReset}>취소</button>
                </div>      
            </form>
    </div> 
    );
}

export default CarAdd;