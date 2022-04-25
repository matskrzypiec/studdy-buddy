import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 13px;
    color: ${({theme: {colors}}) => colors.white};
    font-weight: bold;
    ${
        ({average, theme: {colors}}) => {
            if (average <= 2.3){
                 return 'background-color:' + colors.error;
            }
            if (average > 2.3 && average < 4){
                return 'background-color:' + colors.warning;
            }
            if ( average > 4){
                return 'background-color:' + colors.success;
            }
        }
    }
`;

export const AverageCircle = ({average}) => {
    return (
        <Wrapper average={average}>
            {average}
        </Wrapper>
    )
}
