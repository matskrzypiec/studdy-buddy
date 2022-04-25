import React from 'react';
import styled from "styled-components";
import  DeleteIcon from 'assets/icons/delete_icon.svg?component';
const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    background-color: #C0C7D6;
    border: 0;
    color: white;
    font-size: 12px;

    svg{
        width: 100%;
        height: 100%;
    }

`;

export const IconButton = (props) => {
    return(
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
}
