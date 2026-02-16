import React, { useRef } from 'react';
import { getAPIBase } from "../../helpers/AppHelpers";
import styled from 'styled-components';

const Wrapper = styled.div`
  figure:hover {
    background-color: ${(props) => props.figureHovBgColor && props.figureHovBgColor + "!important"};
  }
  img:hover {
    background-color: ${(props) => props.imgHovBgColor && props.imgHovBgColor + "!important"};
  }
`;

function HomeComponent ({ 
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    title1,
    title5,
    title7,
    title11,
    description1,
    description5,
    description7
}) {

  const image5Ref = useRef(null);
  const image7Ref = useRef(null);

  return (
    <Wrapper className='homeComponentWrapper'>
      <div className="homeComponent">
        <div className="column1">
            {/* <img  className='image image1' src={image1 && image1['@link']} alt=""/> */}
            <img className='image1' src={require('../../images/home/image1.jpg')} alt=""/>
            {/* <img className='image2' src={image2 && image2['@link']} alt=""/> */}
            <img className='image2' src={require('../../images/home/image2.png')} alt=""/>
        </div>
        <div className="column2">
            {/* <img src={image3 && image3['@link']} alt=""/> */}
            <img className='image image3' src={require('../../images/home/image3.png')} alt=""/>
            {/* <img src={image4 && image4['@link']} alt=""/> */}
            <img className='image image4' src={require('../../images/home/image4.png')} alt=""/>
        </div>
        <div className="column3">
          <div className='row'>  
                {/* <img src={image5 && image5['@link']} alt=""/> */}
                <img 
                  className='image image5'
                  onMouseOver={() => {
                    image5Ref.current.src = require('../../images/home/image5hover.jpg');
                  }}
                  onMouseOut={() => {    
                    image5Ref.current.src= require('../../images/home/image5.jpg');
                  }}
                  src={require('../../images/home/image5.jpg')} 
                  alt=""
                  ref={image5Ref}
                />
                {/* <img src={image6 && image6['@link']} alt=""/> */}
                <img className='image image6' src={require('../../images/home/image6.png')} alt=""/>
          </div>
            {/* <img src={image7 && image7['@link']} alt=""/> */}
            <img 
              className='image image7'
              onMouseOver={() => {
                image7Ref.current.src = require('../../images/home/image7hover.jpg');
              }}
              onMouseOut={() => {
                image7Ref.current.src= require('../../images/home/image7.jpg');
              }}
              src={require('../../images/home/image7.jpg')} 
              alt=""
              ref={image7Ref}
            />
        </div>
        <div className="column4">
            {/* <img src={image8 && image8['@link']} alt=""/> */}
            <img className='image image8' src={require('../../images/home/image8.png')} alt=""/>
          <div className='row'>  
                {/* <img src={image9 && image9['@link']} alt=""/> */}
                <img className='image image9' src={require('../../images/home/image9.png')} alt=""/>
                {/* <img src={image10 && image10['@link']} alt=""/> */}
                <img className='image image10' src={require('../../images/home/image10.png')} alt=""/>
          </div>
        </div>
        <div className="column5">
            {/* <img src={image11 && image11['@link']} alt=""/> */}
            <div className='row1'>
                <img className='image image11' src={require('../../images/home/image11.jpg')} alt=""/>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomeComponent;


