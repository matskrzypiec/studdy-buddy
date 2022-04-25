import React from 'react';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';
import {IconButton} from "../../atoms/IconButton/IconButton";

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
    <Wrapper>
        <StyledAverage value={average}>{average}</StyledAverage>
        <StyledInfo>
            <p>
                {name}
                <IconButton onClick={() => deleteUser(name)} />
            </p>
            <p>attendance: {attendance}</p>
        </StyledInfo>
    </Wrapper>
);


export default UsersListItem;
