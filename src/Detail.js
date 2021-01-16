import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
    padding : 20px;
    color: red;
`;
let Header = styled.h4`
    font-style : 25px;
    color: ${ props => props.color };
`;

function Detail(props) {

    let { id } = useParams();
    let history = useHistory();
    let url = "https://codingapple1.github.io/shop/shoes" + id + ".jpg";

    let thisShoes = props.shoes.find(function(shoes) {
        return shoes.id == id;
    });

    return (
      <div className="container">
          <Box>
            <Header color="blue" >테스트</Header>
            <Header color="red" >테스트</Header>
            <Header color="gray" >테스트</Header>
          </Box>
        <div className="row">
          <div className="col-md-6">
            <img
              src={url}
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{thisShoes.title}</h4>
            <p>{thisShoes.content}</p>
            <p>{thisShoes.price.toLocaleString('ko-KR')} 원</p>
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