import axios from 'axios';
import React from 'react';
import useAsync from '../../customHook/useAsync';

//전달할 함수
async function getCars(){
    const response = await axios.get("http://localhost:8081/cars");
    return response.data;
}
function CarList() {
    //{loadgin:false, data: null, error: null}
    const state = useAsync(getCars);
    const { loading, data, error} = state;
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!data) return null;
    return ( 
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">이미지</th>
                        <th scope="col">브랜드</th>
                        <th scope="col">모델</th>
                        <th scope="col">색상</th>
                        <th scope="col">가격</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {data.map((car,index)=>
                        <tr key={index}>
                            <td>
                           <img src={"http://localhost:8081/image?image="+car.imgName} width={200}/></td>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.price}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     );
}

export default CarList;