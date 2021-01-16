import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
    padding : 20px;
    color: red;
`;

let Header = styled.h4`
    font-style : 25px;
    color: ${ props => props.color };
`;

function Detail(props) {

    useEffect(() => {
      setTimeout(() => {
        alertUpdate(false);
      }, 2000);
    });

    //my-alert2가 지금 보이는지 여부를 보여주는 state
    let [alert, alertUpdate] = useState(true);

    let { id } = useParams();
    let history = useHistory();
    let url = "https://codingapple1.github.io/shop/shoes" + id + ".jpg";

    let thisShoes = props.shoes.find(function(shoes) {
        return shoes.id == id;
    });

    return (
      <div className="container">
        <Box>
          <Header className="red">Detail</Header>
        </Box>

        {
          alert == true 
          ? (
            <div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>
          ) 
          : null
        }
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{thisShoes.title}</h4>
            <p>{thisShoes.content}</p>
            <p>{thisShoes.price.toLocaleString("ko-KR")} 원</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Detail;