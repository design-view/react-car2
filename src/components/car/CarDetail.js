import React, { useEffect, useState } from 'react';
import './CarDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAsync from '../../customHook/useAsync';

//전달할 함수/car/{carId}
async function getCars(id){
    const response = await axios.get("http://localhost:8081/car/"+id);
    console.log(response);
    return response.data;
}
function CarDetail() {
    const { carId } = useParams();
    //{loadgin:false, data: null, error: null}
    
    const { loading, data, error} = useAsync(getCars,carId,[carId]);
    
    
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!data) return null;
    return ( 
        <div>
            <div className="detail">
                <div className="detailView">
                    <div>
                        <div className="viewImg">이미지</div>
                        <h4>사진</h4>
                        <ul>
                            <li>
                                <img src="" className="so_img"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="detailInfo">
                    <div className="carInfo">
                        <div className="carTitle">
                            {data.model}
                        </div>
                        <div>
                            <ul>
                                <li><b>2004</b>년식</li>
                                <li><b>43,472</b>km</li>
                                <li><b>디젤</b></li>
                            </ul>
                        </div>
                        <div className='price'><span>2,330</span>만원</div>
                    </div>
                    <div className="dealer">
                        <div className='profile'>
                            <div><img /></div>
                            <div>
                                <span>이름</span>
                                <div>
                                    판매중<span>25</span>
                                    판매완료<span>30</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <td>휴대폰</td>
                                    <td>{data.dealerDto.phone}<br/>053-123-4567</td>
                                </tr>
                                <tr>
                                    <td>종사원증</td>
                                    <td>19-053-00397</td>
                                </tr>
                                <tr>
                                    <td>소속</td>
                                    <td>올카모터스 (053-000-0000)</td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>{data.dealerDto.location}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <h3>차량설명</h3>
            <div className="detaildesc">
                설명설명설명
            </div>
        </div>
     );
}

export default CarDetail;