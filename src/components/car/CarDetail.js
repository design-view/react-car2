import React from 'react';
import './CarDetail.css';
function CarDetail() {
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
                            KG모빌리티 렉스턴 스포츠 칸 2.2 디젤 4WD 5링크 프로페셔널 X
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
                                    <td>010-1234-5678<br/>053-123-4567</td>
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
                                    <td>대구 동구 안심로59길 22 (각산동) 신서랜드 3층 301호 올카모터스 지도 보기</td>
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