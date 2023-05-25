import * as React from 'react';
import styled from 'styled-components';


const LeftDecoration = styled.div`
    position: absolute;
    left: 90px;
    top: 580px;
    @media (max-width: 768px) {

        transform: rotate(-90deg);
        left:200px;
        top:0px;
    
  }
`;
const RightDecoration = styled.div`
    position: absolute;
    right: 240px;
    bottom: 50px;
    @media (max-width: 768px) {
   
        transform: rotate(-90deg);
        right: 400px;
        bottom:0px;    
  
  }
    `;

const StyledDecorations = () => {

    return (
        <><LeftDecoration>  <svg
        width="20"
        height="331"
        viewBox="0 0 20 331"
        fill="none"
      
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#FFC107" />
        <circle cx="10" cy="90" r="10" fill="#FFC107" />
        <circle cx="10" cy="50" r="10" fill="#FFC107" />
        <line
          x1="9"
          y1="331"
          x2="9"
          y2="131"
          stroke="#FFC107"
          stroke-width="2"
        />
      </svg></LeftDecoration>
        <RightDecoration><svg
        width="20"
        height="320"
        viewBox="0 0 20 320"
        className="right-decoration"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="230" r="10" fill="#FFC107" />
        <circle cx="10" cy="310" r="10" fill="#FFC107" />
        <circle cx="10" cy="270" r="10" fill="#FFC107" />
        <line x1="9" y1="200" x2="9" stroke="#FFC107" stroke-width="2" />
      </svg> </RightDecoration>
        </>)

}
export default StyledDecorations;